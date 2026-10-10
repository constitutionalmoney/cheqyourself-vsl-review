# Concept 05 consultation configuration

The owner approved this revision for the public GitHub draft review on October 9.
No production deployment, provider account operation, real inquiry or booking
was performed.
The supplied booking URL is configured; inquiry delivery remains disabled.

## Public configuration

Edit `consultation` in archival.json, then regenerate the HTML with build.py.
These values are public configuration, never credentials:

| Key | Current value | Purpose |
| --- | --- | --- |
| INQUIRY_SUBMISSION_ENABLED | false | Must stay off until reviewed same-origin delivery is available |
| INQUIRY_ENDPOINT | /api/inquiries | Existing marketing inquiry contract; other endpoints are rejected |
| TYMESLOT_BOOKING_URL | https://tymeslot.app/cheqyourself | Exact public URL supplied by the owner |
| TYMESLOT_EMBED_SCRIPT_URL | https://tymeslot.app/embed.js | Official programmatic embed entry point |
| TYMESLOT_USERNAME | cheqyourself | Public username from the supplied booking URL |

For link-only scheduling, set both embed script and username to empty strings.
Booking configuration accepts HTTPS only, without credentials, query or fragment.
The embed script must have the booking origin and documented /embed.js path.
The generated CSP remains closed by default; rebuilding with the enable switch
allows same-origin inquiry connections and the explicitly configured provider.

## Inquiry delivery checklist

- Decide where the standalone page and existing marketing inquiry service will
  run behind the same HTTPS origin. GitHub Pages serves static files; it cannot
  run this Python service. Direct cross-origin calls are not supported by the
  existing backend. Routing/integration requires a separately reviewed change.
- Confirm the monitored recipient and the backend's allowed origin with the
  operator. The recipient and all SMTP credentials remain server-side. Use the
  existing apps/marketing/README.md and its security review for server settings;
  never put secrets in archival.json, HTML, Git or the ZIP.
- Complete a controlled delivery check before changing the enable switch. Do
  not use real contacts in ordinary automated tests. HTTP 200 with status="sent"
  means the service accepted the inquiry for delivery; it does not establish
  inbox receipt, staff review or an appointment.
- Confirm final privacy, contact, service terms and refund-policy links. The
  required processing/contact checkbox is separate from marketing consent.
  The latter remains disabled and unchecked because this backend has no
  subscription contract. No consent choice is silently enrolled or discarded.

The adapter sends the existing ten allowed fields. Property type, authority,
optional phone and main concern become the existing description field; province,
name and email keep their corresponding fields. Required field IDs are preserved.
No street address, title number, legal description or client document is requested.

Requests use JSON, the existing X-Inquiry-Request header and a random
Idempotency-Key. Only HTTP success plus the exact status="sent" unlocks stage 3.
Missing configuration, failure, rate limits, malformed success or a timeout keep
entries available and scheduling locked. A timeout can follow server acceptance;
the UI explains uncertainty and does not automatically retry. The same payload
reuses its key. Existing backend idempotency is process-local for one hour,
not a durable queue/CRM record. A recipient/provider delivery error remains an
existing service limitation.

## Tymeslot checklist

- Confirm the public profile, consultation type and availability at the supplied
  booking URL. No appointment was created or account configuration changed here.
- For inline scheduling, authorize the eventual HTTPS hosting domain in
  Tymeslot's Embed & Share → Security settings. Its official documentation says
  domain whitelisting is required for embedding.
- Check the inline calendar on actual mobile and desktop devices. The official
  programmatic TymeslotBooking.embed API is used only after accepted inquiry;
  the direct booking link remains available if loading fails or inline rendering
  is unusable. HTTP local previews deliberately use only the link fallback.
- Complete a separately authorized controlled booking and verify its actual
  confirmation and calendar invitation. Opening the link is only a CTA action.
  This page never labels an inquiry or link click as a confirmed booking; any
  appointment confirmation is owned by Tymeslot.

The official embed guide does not document name/email prefill parameters, so
none are invented. Property details, name, email and phone are never appended to
third-party URLs. The provider script loads only after the visitor's inquiry is
accepted. All four local CTA events contain a known ID only and are not sent to
an analytics service. No provider booking webhook or GetResponse stop-email
automation is integrated by this static-page change.

Official guide: https://tymeslot.app/docs/embed

## Local rehearsal and persistence limits

From the repository root, using already installed runtimes/dependencies:

    python -m previews.vsl-funnels.tests.review_server --port 6126
    python -m previews.vsl-funnels.tests.review_server --port 6127 --delivery unavailable

These bind loopback only, display a local-test banner and mock delivery. They
exercise the existing inquiry API without SMTP or Tymeslot requests. Use only
synthetic example.invalid details. They are test harnesses, not hosting services.

Unsubmitted entries remain in memory in this tab. Closing/reopening the popup
preserves them; Clear unsubmitted details or reloading removes them. Successful
acceptance clears the personal fields and preserves the scheduling stage on
close/reopen in the same tab. It does not undo the server-accepted inquiry.
Reloading loses this browser state, and backend restart loses process-local
idempotency. No localStorage, sessionStorage, cookies or durable client record
is created by this controller.

## Assets and operations still manual

Approve Terry's evidence/permission and replace the clearly marked testimonial
placeholders before production. Supply reviewed V3 captions and operational
policy/contact links. Staff scope review, actual delivery, calendar confirmation,
GetResponse integration, verified payment and fulfillment remain separate work.
The CAD 1,799 / CAD 2,499 offer, six work areas, record allowance, existing
turnaround and purchase-specific refund policy are unchanged.

## Separate Purchase Now contact popup

`stripe_checkout_url` in archival.json holds the owner-supplied public Stripe Payment Link: https://buy.stripe.com/4gM9AU3OG7JAgUtb1h2go0b. The hosted product and CA$1,799.00 amount were inspected read-only on October 10, 2026.

Purchase Now now opens a pre-checkout popup with required name, email and phone, plus separate processing permission. The current review validates the form but never saves or transmits entries and never opens Stripe. Closing clears unsubmitted details. Marketing follow-up remains disabled and unchecked.

The owner selected both GetResponse and a private inquiry inbox. The purchase-only inbox and dedicated purchase list are confirmed; keep their delivery settings server-side and connect a reviewed private capture service before enabling continuation. Do not treat purchase-support consent as permission for marketing or override existing unsubscribe choices. GitHub Pages cannot receive these contacts securely. Checkout must stay locked until actual capture is confirmed; no customer data may be appended to the public payment URL. The existing property-fit inquiry path remains separate and disabled. Purchase tracking, GetResponse suppression and fulfillment require verified server-side Stripe payment status. The focused source review is in CHECKOUT-REVIEW.md.
