(() => {
  "use strict";

  // Concepts 01–04 remain sample-only. Concept 05 has its own guarded controller.
  const dialog = document.querySelector("#fit-dialog:not([data-consultation])");
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
    if (dialog) button.addEventListener("click", () => openFit(button));
  });
  dialog?.querySelectorAll("[data-close]").forEach((button) => {
    button.addEventListener("click", () => dialog.close());
  });
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

  document.querySelectorAll("[data-play-video]").forEach((button) => {
    const video = button.closest(".video-frame")?.querySelector("video");
    const status = button.closest("#vsl")?.querySelector("[data-video-status]");
    if (!video) return;
    button.addEventListener("click", async () => {
      button.disabled = true;
      try {
        await video.play();
      } catch {
        if (status) status.hidden = false;
      } finally {
        button.disabled = false;
      }
    });
    video.addEventListener("play", () => {
      button.hidden = true;
      if (status) status.hidden = true;
    });
    video.addEventListener("error", () => {
      button.hidden = false;
      if (status) status.hidden = false;
    });
    video.addEventListener("ended", () => { button.hidden = false; });
  });

  document.querySelectorAll("details").forEach((details) => {
    const summary = details.querySelector("summary");
    const sync = () => summary?.setAttribute("aria-expanded", String(details.open));
    sync();
    details.addEventListener("toggle", sync);
  });

})();
