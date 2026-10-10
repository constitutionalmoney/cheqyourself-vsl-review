# Five standalone, single-page VSL funnels

Share the review gallery: https://constitutionalmoney.github.io/cheqyourself-vsl-review/

The owner approved publishing the latest Concept 05 optimization to the same
GitHub Pages review URL on October 9. This is a standalone draft review; inquiry
submission remains disabled and production integration is unchanged.

Each concept is now one page containing the VSL preview and complete sales
story. The price, reference price, saving and any monetary value estimates
appear only in the late offer section, after the explanation, process, six
work areas and service limits. Concepts 01–04 also place policy/FAQs before
the offer. Concept 05 now follows the latest requested sequence: price/value,
testimonials, refund policy, FAQs, then final consultation. There is no early
price, sticky price bar or checkout button. The gallery shows no price.

| Concept | Combined sales/VSL page | Final action |
| --- | --- | --- |
| 01 · The Property File | [Review](designed/index.html) | Property fit call preview |
| 02 · The Direct Conversation | [Review](simple/index.html) | Property fit call preview |
| 03 · The Records First | [Review](squeeze/index.html) | Property fit call preview |
| 04 · The Guided Decision | [Review](screenshots/index.html) | Property fit call preview |
| 05 · The Guardian of the Record | [Local revision](archival/index.html) | Three-stage inquiry / Tymeslot path, disabled pending configuration |

The former five watch.html pages are removed. The gallery has one page button
per concept. Concept 03 no longer asks for signup before the overview; the
video and written explanation are on the same page without a subscription.

## Offer and draft boundary

The shared offer remains CAD 1,799, reduced from CAD 2,499, saving CAD 700,
with the same six core work areas. No Trust Documentation offer is added.
The owner-approved record allowance, 30–90-day turnaround after required
information/scope confirmation, and 14-day cancellation/refund policy remain.

All five play the supplied V3 final-cut video, with the exact supplied thumbnail
as the poster. Clicking Play starts the video; native controls support pause,
seeking, volume and fullscreen. Playback is manual and the MP4 is not preloaded.
The presenter caption reads "Mark Smith · Founder of Cheq Yourself".

The original HEVC file is 409,538,991 bytes. A separate H.264/AAC, yuv420p,
1080p streaming copy is 77,659,967 bytes, with the same 476.103-second duration
and 14,283 video frames. MP4 metadata precedes media data for streaming startup.
The original is unchanged. The approved copy is hosted in the separate public
review repository, below GitHub's 100 MiB file limit; no VPS upload is needed
for this draft. See [GitHub file limits](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github).
Reviewed captions remain pending; none are invented from the earlier script.

Concepts 01–04 retain the local sample form: required fields validate, optional
consent starts unchecked, sample values clear and nothing is sent. Concept 05
now retains unsubmitted entries within the current tab until explicitly cleared
or reloaded. Its submission switch is off; nothing is sent in this review.
No private property details should be entered here.

All five retain the exact "Request a Property Fit Call" label and all nine
owner-specified Type of Property options. Concepts 01–04 still jump from the
video to the price card, then open their sample popup from the bottom button.
The fifth's under-video fit link instead reaches #what-we-do directly
after the three-layer explanation, with smooth/reduced-motion scrolling and
a header offset. A second under-video option opens the supplied webinar in
a secured new tab. The final fifth CTA, after the FAQs, opens its only form.

Concept 05 stages are property details, contact/processing consent, then
scheduling. It reuses the existing marketing /api/inquiries payload and requires
HTTP success plus status="sent" before showing Tymeslot. The owner-provided
TYMESLOT_BOOKING_URL is https://tymeslot.app/cheqyourself. The documented inline
embed is attempted only after acceptance on HTTPS; a direct link is the fallback.
No undocumented name/email prefills or private-property URL parameters are added.
An accepted inquiry is never reported as a booking. Closing the accepted step
keeps that state in the current tab; it is not a durable CRM record.

The existing backend has no CORS configuration for GitHub Pages. It must be
made available through a reviewed same-origin deployment with server-side
delivery configuration before enabling inquiries. Marketing subscription is
separate and unconnected: its checkbox remains disabled and unchecked.
See [configuration checklist](CONSULTATION-CONFIG.md).

The fifth uses the exact supplied new hero copy and 14-day refund wording in
the offer and in scheduling. Each reminder applies to a package
purchase under written service terms, not to requesting or booking a call.

All three record descriptions are visible without opening cards. Record-source
cards wrap into rows and stack on phones. Concepts 01–04 also incorporate
Concept 05's reader questions, record sources, standard record allowance and
before-research / after-scoped-work comparison. Their visual styles remain distinct.

Concept 05 retains the owner-supplied proposal-letter bonus, attributed value
estimates and two explicitly labeled Terry/Saige lorem ipsum placeholders.
These are not endorsements or independently verified market rates. The case
study has a conspicuous placeholder in the requested position; its story
remains withheld until evidence and publication permission are supplied.
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
    node --check previews/vsl-funnels/assets/consultation.js
    node --test previews/vsl-funnels/tests/consultation.test.cjs
    python -m unittest discover -s previews/vsl-funnels/tests -p "test_*.py"
    git diff --check
    python -m http.server 5092 --bind 127.0.0.1 --directory previews/vsl-funnels

The generator produces seven HTML pages: five combined funnels, gallery and
recording script. Edit content.json for shared offer facts, funnel.py for the
first four layouts, archival.json / archival.py for Concept 05, and
assets/site.css / assets/site.js for presentation and shared interactions.
assets/consultation.js owns only the fifth's staged inquiry flow. Its five
CTA identifiers emit local cheq:cta events containing only the ID; no analytics
service receives them. Backend/provider code is unchanged.
video.json records the approved public MP4 URL, size, SHA-256 and media format.
The large binary is stored only in the public review repository, outside this
application checkout.

    python previews/vsl-funnels/validate.py --production

This intentionally fails while the two testimonial placeholders remain.
No production release is authorized by this review request.

The existing [573-word script](script.html) and [editable copy](vsl-script.md)
retain a fit-call close for all five concepts.

## Review hosting

The previously published public GitHub Pages URL needs
no sign-in and does not depend on a running local server. Only the review
HTML, approved assets and review notes are exported to its separate repository;
application source, raw transcripts, credentials and client records are excluded.
No custom domain, DNS change or subscription is needed.

On October 8, the replacement Pages build completed, all seven public HTML
pages returned HTTP 200, and all five former watch.html URLs returned HTTP 404.
The public gallery and all five combined funnels were inspected in a browser.

On October 9, the record/fit-call update was published at the same URL. All seven
HTML pages and the stylesheet returned HTTP 200 and matched the exported
files. All five published below-video fit links landed on the price card; their bottom
buttons opened the updated property-type popup. Concept 05's record cards and
wrapping sources were checked on desktop and mobile.

The supplied V3 video was then published at the same review URL. The host
served video/mp4 with the exact approved size and matching HTTP 206 ranges
at its start, middle and end. Actual playback and keyboard pause passed on
all five concepts at desktop and phone widths; currentTime advanced and
1920×1080 frames decoded. Native keyboard seeking and the fifth's price jump
also passed. This verifies draft playback in the tested browser, without
claiming Safari/iOS testing, reviewed captions or provider operations.

    python previews/vsl-funnels/package_preview.py --output <review-export-directory>

The exporter creates 24 public files and a ZIP, including the verified video,
the new consultation controller and the configuration checklist.
For a new export, add --video-file <approved-streaming-copy.mp4>. For an existing
export, its matching video can be reused; size and SHA-256 must match video.json.
When updating the existing export, it safely retires only the five known
former watch.html files. It does
not recursively delete the destination or touch its Git metadata.

All pages have noindex,nofollow and no-referrer. The default Content Security
Policy blocks API connections, embedded frames and native form transmission,
while allowing the review's media host. Enabling the fifth's inquiry switch
allows only same-origin API connections and, when inline embedding is configured,
its explicit booking-provider origin for script/frame/connection access.
There are no external fonts, analytics trackers or new dependencies.

## Awaiting configuration/assets; still manual

Configure and approve same-origin inquiry delivery before enabling submission;
authorize the eventual HTTPS preview domain in Tymeslot's Embed & Share security
settings and test a controlled booking separately. The booking URL is configured,
but account availability, domain authorization, inline rendering and calendar
invitations have not been verified. Add reviewed captions. Approve or remove testimonial
copy; verify case-study permission before use. Confirm current quotes/fees,
checkout amount/taxes, full policy/contact links, written scope and paid-intake
fulfillment. Staff review, confirmed calendars, GetResponse configuration and
payment verification are outside this static review. Design selection and
production integration require separate approval.

See [source decisions](SOURCES.md), [comparison](COMPARISON.md) and
[validation evidence](QA.md).

## Latest Concept 05 introduction adjustments

The supplied Crown Grant now follows the hero subheadline, centered in a bordered frame. Responsive WebP derivatives replace the large PNG in the rendered page: 57,248 bytes at 380 pixels wide and 159,258 bytes at 690 pixels wide. The original supplied PNG is retained unchanged for provenance. The frame, including its border, is capped relative to the video player's height. The redundant introductory fit button, refund reminder, player kicker and repeated record labels are removed on all screen sizes. “Start with the records” now follows the two below-video choices on desktop and mobile. The remaining refund policy and late offer are unchanged.
