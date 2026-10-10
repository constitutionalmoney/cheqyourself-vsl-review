(() => {
  "use strict";
  const dialog = document.querySelector("[data-purchase-dialog]");
  if (!dialog) return;
  const form = dialog.querySelector("[data-purchase-form]");
  const status = dialog.querySelector("[data-purchase-status]");
  const phone = form.querySelector("#purchase-phone");
  let trigger = null;
  const clear = () => {
    form.reset();
    phone.setCustomValidity("");
    status.hidden = true;
    status.textContent = "";
  };
  document.querySelectorAll("[data-purchase-open]").forEach(button => {
    button.addEventListener("click", () => {
      trigger = button;
      clear();
      dialog.showModal();
      form.querySelector("#purchase-name").focus();
    });
  });
  dialog.querySelectorAll("[data-purchase-close]").forEach(button => {
    button.addEventListener("click", () => dialog.close());
  });
  dialog.addEventListener("close", () => {
    clear();
    trigger?.focus();
  });
  dialog.querySelector("[data-purchase-policy]").addEventListener("click", () => dialog.close());
  phone.addEventListener("input", () => phone.setCustomValidity(""));
  form.addEventListener("submit", event => {
    event.preventDefault();
    const digits = phone.value.replace(/\D/g, "");
    phone.setCustomValidity(digits.length >= 7 && digits.length <= 18 ? "" : "Enter a phone number with 7–18 digits.");
    if (!form.reportValidity()) return;
    // Draft-only: capture must be connected before any Stripe navigation is enabled.
    // Do not send, log, persist or place contact details in a checkout URL.
    status.textContent = "Nothing was sent or saved. Contact capture is awaiting configuration, so checkout has not opened.";
    status.hidden = false;
    status.focus();
  });
})();
