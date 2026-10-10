(() => {
  "use strict";
  const CTA_IDS = new Set(["hero-property-fit", "under-video-property-fit", "under-video-webinar", "final-consultation", "tymeslot-scheduling"]);
  const ctaDetail = (id) => CTA_IDS.has(id) ? { id } : null;
  const fail = (code) => Object.assign(new Error(code), { code });
  const text = (value, max, required = false) => {
    if (typeof value !== "string" || value.length > max || /[\u0000-\u0008\u000b-\u001f\u007f]/.test(value)) throw fail("invalid");
    const clean = value.trim();
    if (required && !clean) throw fail("invalid");
    return clean;
  };
  function payloadFor(fields) {
    if (fields.contactConsent !== true || fields.marketingConsent === true) throw fail("invalid");
    const concern = text(fields.concern, 500, true);
    const phone = text(fields.phone, 40);
    if (concern.length < 10) throw fail("invalid");
    const description = [
      `Property type: ${text(fields.propertyType, 100, true)}`,
      `Relationship: ${text(fields.authority, 100, true)}`,
      phone ? `Optional phone: ${phone}` : "",
      `Main concern: ${concern}`
    ].filter(Boolean).join("\n");
    // Reuse the existing marketing inquiry allowlist. Follow-up consent is separate.
    return {
      name: text(fields.name, 80, true), email: text(fields.email, 254, true),
      province: text(fields.province, 80, true), category: "Crown Grant or land records",
      deadline: "Unsure", ongoingIssue: "Unsure", description,
      nextStep: "Crown Grant package information", consent: true, website: ""
    };
  }
  async function sendInquiry(config, payload, key, fetcher, signal) {
    if (!config.enabled || config.endpoint !== "/api/inquiries") throw fail("disabled");
    const response = await fetcher(config.endpoint, {
      method: "POST", credentials: "omit", cache: "no-store", redirect: "error", signal,
      headers: { "Content-Type": "application/json", "X-Inquiry-Request": "1", "Idempotency-Key": key },
      body: JSON.stringify(payload)
    });
    const result = await response.json().catch(() => null);
    if (!response.ok || result?.status !== "sent") {
      throw fail(response.status === 503 ? "unavailable" : response.status === 429 ? "limited" : "not_confirmed");
    }
    return { submitted: true, booked: false };
  }
  function bookingLink(value) {
    if (!value) return "";
    const url = new URL(value);
    if (url.protocol !== "https:" || url.username || url.password || url.search || url.hash) throw fail("invalid_booking_url");
    return url.href;
  }
  if (typeof module !== "undefined" && module.exports) module.exports = { payloadFor, sendInquiry, bookingLink, ctaDetail };
  if (typeof document === "undefined") return;
  const dialog = document.querySelector("[data-consultation]");
  if (!dialog) return;
  const form = dialog.querySelector("[data-consultation-form]");
  const status = dialog.querySelector("[data-consultation-status]");
  const submit = dialog.querySelector("[data-inquiry-submit]");
  const steps = Array.from(dialog.querySelectorAll("[data-stage]"));
  const config = { enabled: dialog.dataset.inquiryEnabled === "true", endpoint: dialog.dataset.inquiryEndpoint };
  let stage = 1, submitted = false, busy = false, returnFocus, key, previousPayload, embedStarted = false;
  const field = (id) => dialog.querySelector(`#fit-${id}`);
  const say = (message) => {
    status.textContent = message; status.hidden = false;
    if (dialog.open) status.focus();
  };
  function showStage(next) {
    stage = next;
    form.hidden = next === 3;
    steps.forEach((step) => {
      const active = Number(step.dataset.stage) === next;
      step.hidden = !active;
      if (step.tagName === "FIELDSET") step.disabled = !active;
    });
    dialog.querySelectorAll("[data-progress]").forEach((item) => {
      if (Number(item.dataset.progress) === next) item.setAttribute("aria-current", "step");
      else item.removeAttribute("aria-current");
    });
    dialog.querySelector(`[data-stage="${next}"] :is(legend,h3)`)?.focus();
  }
  const validStage = (number) => Array.from(dialog.querySelectorAll(`[data-stage="${number}"] input:not(:disabled), [data-stage="${number}"] select, [data-stage="${number}"] textarea`)).every((input) => input.reportValidity());
  document.querySelectorAll("[data-cta-id]").forEach((element) => element.addEventListener("click", () => {
    const detail = ctaDetail(element.dataset.ctaId);
    if (detail) document.dispatchEvent(new CustomEvent("cheq:cta", { detail }));
  }));
  const header = document.querySelector(".archival-header");
  if (header) {
    const offset = () => document.documentElement.style.setProperty("--archive-header-height", `${header.getBoundingClientRect().height}px`);
    offset();
    if (typeof ResizeObserver !== "undefined") new ResizeObserver(offset).observe(header);
  }
  document.querySelectorAll("[data-service-jump]").forEach((link) => link.addEventListener("click", (event) => {
    const target = document.querySelector("#what-we-do");
    if (!target) return;
    event.preventDefault();
    history.replaceState(null, "", "#what-we-do");
    target.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start" });
    target.focus({ preventScroll: true });
  }));
  document.querySelectorAll("[data-fit]").forEach((trigger) => trigger.addEventListener("click", () => {
    returnFocus = trigger;
    dialog.showModal();
    showStage(submitted ? 3 : stage);
  }));
  dialog.querySelectorAll("[data-consultation-close]").forEach((button) => button.addEventListener("click", () => dialog.close()));
  dialog.addEventListener("close", () => returnFocus?.focus());
  dialog.addEventListener("click", (event) => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
  dialog.querySelector("[data-next-stage]").addEventListener("click", () => { if (validStage(1)) showStage(2); });
  dialog.querySelector("[data-previous-stage]").addEventListener("click", () => { if (!busy) showStage(1); });
  const clear = dialog.querySelector("[data-clear-inquiry]");
  clear.addEventListener("click", () => {
    if (busy || submitted) return;
    form.reset(); key = undefined; previousPayload = undefined;
    status.hidden = true; showStage(1);
  });
  function showScheduling() {
    showStage(3);
    const link = dialog.querySelector("[data-scheduling-action]");
    const calendarStatus = dialog.querySelector("[data-calendar-status]");
    const url = bookingLink(dialog.dataset.bookingUrl);
    if (!url) { calendarStatus.textContent = "Scheduling is not connected yet. Your accepted inquiry remains submitted; no appointment has been booked."; return; }
    link.href = url; link.hidden = false;
    const scriptURL = dialog.dataset.embedScript;
    const username = dialog.dataset.bookingUsername;
    if (!scriptURL || !username || location.protocol !== "https:") {
      calendarStatus.textContent = "Open Tymeslot to choose a time. The inline calendar requires an approved HTTPS host.";
      return;
    }
    if (embedStarted) return;
    embedStarted = true;
    calendarStatus.textContent = "Loading the calendar. If it does not appear, open Tymeslot with the button below.";
    const script = document.createElement("script");
    script.src = scriptURL; script.async = true; script.referrerPolicy = "no-referrer";
    script.addEventListener("load", () => {
      if (typeof window.TymeslotBooking?.embed !== "function") {
        calendarStatus.textContent = "The inline calendar is unavailable. Open Tymeslot with the button below."; return;
      }
      const container = dialog.querySelector("[data-calendar-container]");
      container.id = "consultation-calendar";
      try {
        window.TymeslotBooking.embed("#consultation-calendar", username, { theme: "1", primaryColor: "#cda548", locale: "en", layout: "column", initialHeight: "650", maxWidth: "800" });
        calendarStatus.textContent = "Choose a time below, or open Tymeslot separately. Tymeslot will confirm a completed booking.";
      } catch {
        calendarStatus.textContent = "The inline calendar is unavailable. Your inquiry remains accepted; open Tymeslot with the button below.";
      }
    });
    script.addEventListener("error", () => { calendarStatus.textContent = "The inline calendar could not load. Open Tymeslot with the button below."; });
    document.head.appendChild(script);
  }
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (busy || submitted) return;
    if (stage === 1) { if (validStage(1)) showStage(2); return; }
    if (!validStage(2)) return;
    if (!config.enabled) { say("Inquiry submission is not connected in this review. Nothing has been sent; your entries remain available in this tab."); return; }
    let timeout;
    try {
      const payload = payloadFor({ name: field("name").value, email: field("email").value, phone: field("phone").value, province: field("province").value, propertyType: field("property-type").value, authority: field("authority").value, concern: field("concern").value, contactConsent: field("contact-consent").checked, marketingConsent: field("consent").checked });
      const serialized = JSON.stringify(payload);
      if (!key || previousPayload !== serialized) { key = crypto.randomUUID(); previousPayload = serialized; }
      busy = true; submit.disabled = true; clear.disabled = true;
      dialog.querySelector("[data-previous-stage]").disabled = true;
      form.setAttribute("aria-busy", "true"); say("Submitting your inquiry…");
      const controller = new AbortController();
      timeout = setTimeout(() => controller.abort(), 20000);
      await sendInquiry(config, payload, key, fetch, controller.signal);
      submitted = true;
      form.reset(); previousPayload = undefined;
      showScheduling();
    } catch (error) {
      say(error.code === "unavailable" ? "The inquiry service is unavailable. Nothing has been confirmed; your entries remain available to retry." : error.code === "limited" ? "Too many attempts. Please wait before trying again; your entries remain available." : error.code === "invalid" ? "Please check your entries before submitting." : "We could not confirm submission. Your entries are still here. A timeout may occur after acceptance; check with Cheq Yourself before retrying. No appointment has been booked.");
    } finally {
      clearTimeout(timeout); busy = false; submit.disabled = false; clear.disabled = false;
      dialog.querySelector("[data-previous-stage]").disabled = false;
      form.removeAttribute("aria-busy");
    }
  });
})();
