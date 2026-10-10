# Concept 05 pre-checkout contact popup review — October 10, 2026

## Verified provider link

The owner supplied https://buy.stripe.com/4gM9AU3OG7JAgUtb1h2go0b. Read-only browser inspection showed Cheq Yourself, Assert Crown Grant Package and CA$1,799.00. No customer or card details were entered and no Pay action was taken. Taxes, payment completion, receipt delivery and fulfillment were not tested.

## Current draft behavior

Purchase Now appears after the bonus inclusion and before the refund/turnaround paragraph. It opens a separate native dialog requiring name, email, phone and permission to use those details for checkout/purchase support. Optional marketing is disabled and unchecked. Closing clears entries and returns focus to the trigger. No field has a name attribute for native serialization, and the existing CSP blocks form transmission.

The current controller is explicitly draft-only. It validates required fields and basic phone syntax, then reports that nothing was sent or saved. It never redirects to Stripe, even with valid entries. It makes no network request and stores no data in cookies, localStorage, sessionStorage, analytics or logs. The payment URL is public configuration, not a credential. Rendering restricts it to HTTPS on the exact buy.stripe.com host with a stable alphanumeric/underscore path and no query, fragment, credentials or visitor data. Missing configuration disables Purchase Now; invalid links fail the build. No provider account, Price, SDK, API key, webhook, authentication or fulfillment code changed.

## Remaining capture connection

The owner selected both GetResponse and a private inquiry inbox. The monitored inbox and GetResponse list still need to be confirmed. GitHub Pages cannot securely receive these details itself. Real capture and checkout navigation remain off until a reviewed private service is connected, with server-side validation, appropriate consent handling and an actual accepted/persisted contact result. Do not put contact details in the Stripe URL or public GitHub files. Optional marketing consent must remain separate, and unsubscribe choices must be preserved. Do not create an email-marketing subscription from purchase-support consent. The existing marketing inquiry service accepts email delivery but has no marketing-subscription or GetResponse capture contract; using both requires a reviewed server-side integration, not merely turning on the existing inquiry switch.

After that connection is reviewed and tested, the flow can open the supplied hosted checkout after confirmed contact capture. A click, return page or success-page visit must never record a purchase. Any later purchase record, prospect-email suppression or fulfillment requires verified server-side Stripe payment status. This draft does not establish that the Payment Link is wired into the application's fulfillment flow.
