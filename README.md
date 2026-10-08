# Five standalone Cheq Yourself funnel concepts

This is a draft review gallery, separate from the production website. It
registers no application routes, changes no menus or GetResponse lists, sends
no email, books no appointments and records no purchases.

| Concept | Sales page | VSL page | Reference / conversion |
| --- | --- | --- | --- |
| 01 · The Property File | [Sales](designed/index.html) | [VSL](designed/watch.html) | Designed HTML; fit-call invitation |
| 02 · The Direct Conversation | [Sales](simple/index.html) | [VSL](simple/watch.html) | Simple HTML; fit-call invitation |
| 03 · The Records First | [Sales](squeeze/index.html) | [VSL](squeeze/watch.html) | Squeeze HTML; optional overview signup simulation |
| 04 · The Guided Decision | [Sales](screenshots/index.html) | [VSL](screenshots/watch.html) | Supplied screenshots; fit-call invitation |
| 05 · The Guardian of the Record | [Sales](archival/index.html) | [VSL](archival/watch.html) | October 7 brief; direct purchase and free webinar |

Start at [the gallery](index.html), which also compares these concepts with
PR 80's operational five-page flow. No conversion experiment was run.

Every sales and VSL page uses the exact supplied VSL-Video-Thumbnail.png.
Clicking the play control explains that the recording and captions remain
pending. The notice closes and keyboard focus returns to Play.

## Draft-review boundary

Concepts 01–04 use local form and payment demonstrations. Required fields
validate sample details only; optional consent is unchecked. Forms clear the
values and send/save nothing. Video access does not require a signup.

Concept 05 has no fit-call step. Primary buttons use the exact supplied label
and same-tab Stripe payment-link destination; secondary buttons open the
supplied free-webinar destination in a new tab. Do not complete a payment
while reviewing the design. The checkout's current amount, taxes and intake
follow-up have not been verified; no provider settings were changed.

Concept 05 includes the owner-supplied proposal-letter bonus and component
value estimates, clearly attributed to supplied quotes/costs/internal labour
estimates. They are not independently verified market rates. The six core
work areas and $1,799 CAD price / $2,499 reference / $700 saving are preserved.
There is no Trust Documentation offer.

At the user's explicit request, Terry and Saige's exact lorem ipsum cards
appear with prominent placeholder warnings and data-placeholder="true".
They are not endorsements. The supplied case study is withheld pending
supporting records and publication permission.

All pages use noindex,nofollow and prohibit connections, embedded frames and
form transmission. There are no new dependencies, subscriptions, external
fonts or trackers. External navigation is confined to Concept 05's two supplied
destinations. A review site is not a production release.

## Edit and validate

From the repository root, using existing Python and Node runtimes:

    python previews/vsl-funnels/build.py
    python previews/vsl-funnels/validate.py
    node --check previews/vsl-funnels/assets/site.js
    git diff --check
    python -m http.server 5092 --bind 127.0.0.1 --directory previews/vsl-funnels

The generator writes 12 HTML pages: five sales, five VSL, gallery and script.
Edit content.json for core offer facts, archival.json for Concept 05's URLs,
value stack and FAQs, build.py / archival.py for layout, and assets/site.css
and assets/site.js for presentation and interactions. Rebuild generated HTML.
Both layouts derive price/savings from content.json.

For a production check:

    python previews/vsl-funnels/validate.py --production

This intentionally fails while draft testimonial placeholders remain. Replace
them with approved text or remove them before a future production release.
No production release is authorized.

The existing [573-word recording script](script.html) and editable
[Markdown](vsl-script.md) retain the fit-call close for Concepts 01–04.
Select a direct-purchase close for Concept 05 before recording.

## Shareable web review

Share [the five-funnel review gallery](https://constitutionalmoney.github.io/cheqyourself-vsl-review/).
It is public and needs no sign-in or running local preview server. On October 7,
the GitHub Pages build completed and all 12 public HTML pages returned HTTP 200.
The public gallery, fifth page and recording notice were also checked in a browser.

Sites publishing controls remained unavailable after reconnection approval.
The user authorized a web-preview alternative. Only public review files are
exported to a separate static review repository and GitHub Pages. No application
source, raw transcript, input screenshots, credentials or property/client records
are exported. No custom domain or DNS change was made.

Export a portable static bundle outside this source directory:

    python previews/vsl-funnels/package_preview.py --output <review-export-directory>

The exporter produces public files and cheq-yourself-five-vsl-review.zip.
No package installation is required by its host.

## Awaiting configuration/assets; still manual

Record the video, time it, add reviewed captions and choose the final CTA.
Replace testimonial placeholders with approved words or remove them. Verify
case-study evidence/permission before use, source quotes/current registry fees,
tax treatment, contracting details, full policy/contact URLs, checkout amount,
paid-intake follow-up and proposal-letter fulfillment. Design selection and
production website integration require separate approval. Staff scope review
and calendar/provider operations remain outside this review build.

See [source decisions](SOURCES.md), [comparison](COMPARISON.md) and
[validation record](QA.md).
