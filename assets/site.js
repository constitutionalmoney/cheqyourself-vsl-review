(() => {
  "use strict";

  // This prototype never transmits or stores form values.
  const dialog = document.querySelector("#fit-dialog");
  let returnFocus = null;
  const openFit = (trigger) => {
    returnFocus = trigger;
    dialog?.showModal();
    const form = dialog?.querySelector("form");
    form?.reset();
    if (form) form.hidden = false;
    const result = dialog?.querySelector("[data-fit-result]");
    if (result) result.hidden = true;
  };
  document.querySelectorAll("[data-fit]").forEach((button) => {
    button.addEventListener("click", () => openFit(button));
  });
  dialog?.querySelector("[data-close]")?.addEventListener("click", () => dialog.close());
  dialog?.addEventListener("close", () => returnFocus?.focus());
  dialog?.addEventListener("click", (event) => {
    if (event.target === dialog) {
      const rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right ||
          event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
    }
  });

  document.querySelectorAll("form[data-preview-form]").forEach((form) => {
    const submit = () => {
      if (!form.reportValidity()) return;
      if (form.dataset.previewForm === "overview") {
        form.reset();
        window.location.assign("watch.html?preview=overview");
        return;
      }
      const result = dialog?.querySelector("[data-fit-result]");
      form.reset();
      form.hidden = true;
      if (result) {
        result.hidden = false;
        result.focus();
      }
    };
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      submit();
    });
    form.querySelector("[data-preview-submit]")?.addEventListener("click", submit);
  });

  document.querySelectorAll("[data-recording]").forEach((button) => {
    button.addEventListener("click", () => {
      const message = button.closest(".video-frame")?.querySelector("[data-video-message]");
      if (message) {
        message.hidden = false;
        message.focus();
      }
    });
  });

  document.querySelectorAll("[data-video-close]").forEach((button) => {
    button.addEventListener("click", () => {
      const frame = button.closest(".video-frame");
      const message = frame?.querySelector("[data-video-message]");
      if (message) message.hidden = true;
      frame?.querySelector("[data-recording]")?.focus();
    });
  });

  document.querySelectorAll("details").forEach((details) => {
    const summary = details.querySelector("summary");
    const sync = () => summary?.setAttribute("aria-expanded", String(details.open));
    sync();
    details.addEventListener("toggle", sync);
  });

  const hero = document.querySelector("[data-purchase-hero]");
  const sticky = document.querySelector("[data-sticky-purchase]");
  if (hero && sticky && "IntersectionObserver" in window) {
    new IntersectionObserver(([entry]) => {
      sticky.hidden = entry.isIntersecting || entry.boundingClientRect.bottom > 0;
    }).observe(hero);
  }

  document.querySelectorAll("[data-payment-preview]").forEach((button) => {
    button.addEventListener("click", () => {
      const message = document.querySelector("#payment-preview-message");
      if (message) {
        message.hidden = false;
        message.focus();
      }
    });
  });

  if (new URLSearchParams(window.location.search).get("preview") === "overview") {
    const message = document.querySelector("[data-overview-result]");
    if (message) message.hidden = false;
  }
})();
