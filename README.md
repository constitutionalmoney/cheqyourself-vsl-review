# Five standalone, single-page VSL funnels

Share the review gallery: https://constitutionalmoney.github.io/cheqyourself-vsl-review/

Each concept is now one page containing the VSL preview and complete sales
story. The price, reference price, saving and any monetary value estimates
appear only in the final offer section, after the explanation, process, six
work areas, service limits, policy and FAQs. There is no early price, sticky
price bar or checkout button. As requested on October 9, one fit-call button
directly below each video jumps to its price card. The gallery shows no price.

| Concept | Combined sales/VSL page | Final action |
| --- | --- | --- |
| 01 · The Property File | [Review](designed/index.html) | Property fit call preview |
| 02 · The Direct Conversation | [Review](simple/index.html) | Property fit call preview |
| 03 · The Records First | [Review](squeeze/index.html) | Property fit call preview |
| 04 · The Guided Decision | [Review](screenshots/index.html) | Property fit call preview |
| 05 · The Guardian of the Record | [Review](archival/index.html) | Property fit call preview |

The former five watch.html pages are removed. The gallery has one page button
per concept. Concept 03 no longer asks for signup before the overview; the
video and written explanation are on the same page without a subscription.

## Offer and draft boundary

The shared offer remains CAD 1,799, reduced from CAD 2,499, saving CAD 700,
with the same six core work areas. No Trust Documentation offer is added.
The owner-approved record allowance, 30–90-day turnaround after required
information/scope confirmation, and 14-day cancellation/refund policy remain.

All five use the exact supplied thumbnail. Clicking Play explains that the
recording is pending; closing the notice returns keyboard focus. The written
explanation is on the same page. No playable recording or captions exist yet.

All five use a local, sample-only fit form. Required fields validate,
optional consent starts unchecked, values clear and no request, email,
subscription, appointment or purchase is sent or stored. A request is not a
confirmed booking. No private property details should be entered here.

The bottom fit-call button opens the sample popup. It includes the required
Type of Property dropdown with all nine owner-specified options. The video
button jumps to the price card without opening the popup. Concept 05 now uses
this same fit-call path; its former direct Stripe link is removed. Its supplied
free-webinar alternative remains in the final offer.

All three record descriptions are visible without opening cards. Record-source
cards wrap into rows and stack on phones. Concepts 01–04 also incorporate
Concept 05's reader questions, record sources, standard record allowance and
before-research / after-scoped-work comparison. Their visual styles remain distinct.

Concept 05 retains the owner-supplied proposal-letter bonus, attributed value
estimates and two explicitly labeled Terry/Saige lorem ipsum placeholders.
These are not endorsements or independently verified market rates. The case
study remains withheld until evidence and publication permission are supplied.
Production validation deliberately rejects the testimonial placeholders.

This is a public draft design review, separate from the production website.
It changes no application routes, menus, checkout settings, GetResponse lists
or deployment configuration. No legal outcome, invented credential, results
metric, scarcity deadline or delivery claim is added.

## Edit and validate

Using existing Python and Node runtimes, from the repository root:

    python previews/vsl-funnels/build.py
    python previews/vsl-funnels/validate.py
    node --check previews/vsl-funnels/assets/site.js
    git diff --check
    python -m http.server 5092 --bind 127.0.0.1 --directory previews/vsl-funnels

The generator produces seven HTML pages: five combined funnels, gallery and
recording script. Edit content.json for shared offer facts, funnel.py for the
first four layouts, archival.json / archival.py for Concept 05, and
assets/site.css / assets/site.js for presentation and interactions.

    python previews/vsl-funnels/validate.py --production

This intentionally fails while the two testimonial placeholders remain.
No production release is authorized by this review request.

The existing [573-word script](script.html) and [editable copy](vsl-script.md)
retain a fit-call close for all five concepts.

## Review hosting

The same public GitHub Pages URL replaces the previous review. The host needs
no sign-in and does not depend on a running local server. Only the review
HTML, approved assets and review notes are exported to its separate repository;
application source, raw transcripts, credentials and client records are excluded.
No custom domain, DNS change or subscription is needed.

On October 8, the replacement Pages build completed, all seven public HTML
pages returned HTTP 200, and all five former watch.html URLs returned HTTP 404.
The public gallery and all five combined funnels were inspected in a browser.

    python previews/vsl-funnels/package_preview.py --output <review-export-directory>

The exporter creates 21 public files and a ZIP. When updating the existing
export, it safely retires only the five known former watch.html files. It does
not recursively delete the destination or touch its Git metadata.

All pages have noindex,nofollow, no-referrer and a Content Security Policy that
blocks connections, embedded frames and form transmission. There are no
external fonts, trackers or dependencies. Only Concept 05's supplied
free-webinar destination is allowed.

## Awaiting configuration/assets; still manual

Record the video and add reviewed captions. Approve or remove testimonial
copy; verify case-study permission before use. Confirm current quotes/fees,
checkout amount/taxes, full policy/contact links, written scope and paid-intake
fulfillment. Staff review, confirmed calendars, GetResponse configuration and
payment verification are outside this static review. Design selection and
production integration require separate approval.

See [source decisions](SOURCES.md), [comparison](COMPARISON.md) and
[validation evidence](QA.md).
