# Validation record

## October 9 Concept 05 optimization — published draft review

Implemented: exact supplied hero, unchanged fit-call labels, header-offset
service anchors with reduced-motion behavior, two responsive video options,
purchase-specific refund messaging and the requested section order. One staged
property/contact/scheduling dialog reuses the existing marketing inquiry API.
The owner-supplied Tymeslot URL is configured; default submission is disabled.
The owner subsequently approved the public static review update. The production
application remains unchanged.

Commands run from the repository root, using existing dependencies:

| Command/check | Exit/result |
| --- | --- |
| python previews/vsl-funnels/build.py | 0; seven pages regenerated |
| python previews/vsl-funnels/validate.py | 0; exact copy, anchors/order, one form/three stages, pricing/scope/media/consent/security guards |
| node --check previews/vsl-funnels/assets/site.js | 0 |
| node --check previews/vsl-funnels/assets/consultation.js | 0 |
| node --test previews/vsl-funnels/tests/consultation.test.cjs | 0; eight tests passed: consent, existing payload, disabled/cross-origin gate, malformed success, provider/network failure, no fabricated booking, safe booking URLs, private-data-free CTA IDs |
| python -m unittest discover -s previews/vsl-funnels/tests -p "test_*.py" | 0; one adapter-to-existing-API test passed, mocked sender, duplicate request accepted once |
| python -m unittest discover -s apps/marketing/tests -p "test_*.py" | 0; 26 existing tests passed, external delivery mocked |
| python previews/vsl-funnels/validate.py --production | 1 as intended; the two explicitly requested testimonial placeholders still block production |
| git diff --check | 0 |
| python previews/vsl-funnels/package_preview.py --output <new-local-review-directory> --video-file <approved-streaming-copy.mp4> | 0; 24 public files and ZIP, video size/checksum verified; no publication |
| Standard-library source/export comparison and ZIP CRC inspection | 0; first four concepts, gallery and script match the preceding source commit; ZIP contains 24 approved files and excludes test harnesses |

Browser checks in the Codex in-app browser covered Concept 05 at 1280×900,
390×844 and 320×760: no page or popup horizontal overflow, side-by-side desktop
choices and vertically stacked phone choices, all nine property types, early
CTA service destination with target focus and no popup, and final popup opening.
Empty property fields and missing contact consent block progression/submission.
Disabled submission reports nothing sent, preserves values, keeps scheduling
locked and loads no iframe. Escape closes and returns focus to the final CTA;
reopening retains the unfinished stage. Explicit clear resets the unsubmitted
fields. Keyboard focus remains inside the modal; keyboard FAQ expansion passes.
Submission feedback receives keyboard focus. The existing V3 player still
decodes 1920×1080 frames with readyState=4 and advances playback; native keyboard
pause works. A shared-script smoke check on Concept 01 still opens its sample
popup with all nine property choices and unchecked optional consent.

Loopback test harnesses exercise the real existing inquiry contract with synthetic
example.invalid fields and a mocked sender, never SMTP or Tymeslot. Accepted
delivery unlocks stage 3, clears personal inputs and exposes only the exact public
booking URL. Closing/reopening preserves stage 3 and explicitly says the inquiry
does not confirm an appointment. Unavailable delivery (503) retains stage 2 and
its inputs, displays the error, and never adds a scheduling href or iframe.
No real inquiry, appointment, email, subscription or payment is produced.

Saved desktop, phone video-choice and phone popup screenshots are outside Git
in the local optimization-review deliverable. These are local presentation and
mocked integration evidence. Tymeslot account availability, domain authorization,
actual inline rendering, calendar invitations, inbox receipt, reviewed captions,
Safari/iOS and production hosting remain unverified. No dependency was installed.
Next.js, API/worker and production-stack gates were not run for this preview-only
change; the unchanged marketing boundary was tested as described above.

The owner subsequently approved GitHub review publication on October 9.
Source revision: 27573253feb6581c758330cc2dd6b10df6661b85. All following
publication and playback sections are historical evidence for earlier revisions.

## October 9 supplied V3 video publication

Implemented: all five combined funnels play the supplied final-cut recording.
The unchanged thumbnail is the poster, playback starts only on request, and
native controls provide pause and seeking. The presenter caption is
"Mark Smith · Founder of Cheq Yourself". Current pending-recording notices
are removed. The below-video price jump and sample fit popup remain.

Media verification: the unchanged original is HEVC/AAC, 409,538,991 bytes.
The separate streaming copy is H.264/AAC, yuv420p, 1920×1080, 77,659,967 bytes.
Both have duration 476.102993 seconds and 14,283 video frames. FFmpeg completed
successfully; the MP4 moov box precedes mdat. The approved checksums are in
video.json. The binary is in the separate public review repository only.

Commands run from the repository root unless noted:

| Command/check | Exit/result |
| --- | --- |
| python previews/vsl-funnels/build.py | 0; seven pages regenerated |
| python previews/vsl-funnels/validate.py | 0; shared video, poster, founder attribution, manual controls, media policy and existing pricing/scope/privacy guards |
| node --check previews/vsl-funnels/assets/site.js | 0 |
| python previews/vsl-funnels/package_preview.py --output <review-export-directory> --video-file <approved-streaming-copy.mp4> | 0; 22 public files and ZIP, including size/checksum-verified video |
| python previews/vsl-funnels/package_preview.py --output <review-export-directory> | 0; existing approved video reused with matching size/checksum |
| ffprobe JSON plus standard-library metadata/frame-count/SHA-256/MP4-box inspection | 0; format, original preservation, runtime, frame count, size and fast-start layout verified |
| ffmpeg -v error -nostdin -ss 470 -i <streaming-copy.mp4> -t 5 -f null - | 0; final playback segment decoded |
| Standard-library HTTPS HEAD and byte-range comparisons | 0; video/mp4, exact 77,659,967-byte length, HTTP 206 and matching bytes at start, middle and end |
| Standard-library public-file comparisons | 0; seven HTML pages, CSS and JavaScript returned HTTP 200 and matched the export, with line endings normalized |
| git diff --check | 0 |
| python previews/vsl-funnels/validate.py --production | 1, intentionally; only the two requested testimonial placeholders block production |

GitHub Pages reported built with no error for artifact commit
af7734402307cfe295604ff284e11eabcde1ce13, at the unchanged review URL.
Browser playback checks passed for all five at 1280×900 and 390×844:
preload=none left readyState=0 and paused=true before activation; after Play,
currentTime advanced, readyState=4 and decoded dimensions were 1920×1080.
The overlay hid, native keyboard pause worked, founder text was present,
pending copy was absent and there was no horizontal overflow. In Concept 05,
native keyboard seeking moved playback forward and the below-video fit link
still jumped to the price card. No console errors or warnings appeared in the
inspected hosted tab. A phone screenshot captures the actual playing frame,
fit-call link and founder credit outside Git. Temporary viewport overrides
were reset after testing.

Reviewed captions remain pending. The earlier editable script is a writing
reference, not a transcript of V3. Full narrative/audibility and Safari/iOS
device testing were not performed. Fit requests remain sample-only; this
publication does not establish email delivery, bookings, payments or
production application behavior. No dependencies were installed, no VPS
operation was needed, and application/API suites were not rerun for this
static-only change. The following sections are historical evidence.

## October 9 record visibility, shared fit calls and property type

Implemented: all three record descriptions always visible in Concept 05;
eight record sources wrap into rows and stack on phones. Concepts 01–04
reuse the fifth's reader questions, record sources, standard record allowance
and scoped-file comparison. All five have a fit-call link directly below the
thumbnail, jumping immediately to the final price card. The bottom button
opens the sample popup, including all nine exact Type of Property options.
Concept 05's direct checkout link is removed. Core pricing/scope/policy and
the supplied image are unchanged; draft testimonials remain labeled.

Commands run from the repository root:

| Command | Exit/result |
| --- | --- |
| python previews/vsl-funnels/build.py | 0; seven pages regenerated |
| python previews/vsl-funnels/validate.py | 0; price boundary, below-video jump, visible record copy, eight sources, nine property types, final fit popup, local links, unchanged assets, scope and transmission/consent gates |
| node --check previews/vsl-funnels/assets/site.js | 0 |
| python previews/vsl-funnels/package_preview.py --output <review-export-directory> | 0; 21 approved public files and ZIP |
| git diff --check | 0 |
| Inline standard-library guard probes using validate.Page and JSON comparison | 0; all five pages checked, early price and collapsed record probes detected, core pricing/scope/policy/record copy unchanged |
| python previews/vsl-funnels/validate.py --production | 1, intentionally; only the two requested draft testimonial cards block production |

Browser checks passed for all five at 1280×900, 390×844 and 320×760
(15 page/viewport combinations): no page, record-strip or popup horizontal
overflow; all three descriptions visible; eight record sources; six work areas;
original thumbnail loaded; below-video button immediately follows the player;
price appears in the viewport after the jump without opening a dialog;
bottom button opens the popup with a required property type, nine choices plus
an empty prompt, and unchecked optional consent.

The fifth popup also passed empty-form and missing-property-type validation.
Synthetic details and a property-type selection produced the explicit
"No request has been sent" result; all fields reset, including property type,
and closing returned focus to the trigger. Keyboard FAQ expansion passed.
The fifth's play notice, close action and return to the play button also passed.
No real contact, external booking, payment or provider operation was exercised.

Publication: GitHub Pages reported a successful build at the unchanged review
URL. All seven public HTML pages and the stylesheet returned HTTP 200 and
matched the export (line endings normalized). Browser checks passed for all
five hosted video-to-price jumps and bottom fit popups, including the exact
nine property-type choices and unchecked consent. The fifth's record cards,
wrapped sources and popup were inspected at desktop/mobile widths. Screenshots
were saved outside Git; the browser viewport was reset after testing.

The following sections are historical validation records.

## October 8 single-page redesign

Implemented: five combined VSL/sales pages, one gallery link per concept,
video near the beginning, clearer record/process/scope/DIY/service-limit
sections and one final offer after the information. All money figures occur
inside that offer, including the fifth's component estimates. Hero prices,
priced FAQs, price metadata, early fit/checkout controls, sticky purchase bars,
the overview signup and the five former watch.html pages are removed.

Current commands, from the repository root:

| Command | Exit/result |
| --- | --- |
| python previews/vsl-funnels/build.py | 0; five combined funnels, gallery and script |
| python previews/vsl-funnels/validate.py | 0; exactly seven pages, one VSL and one final offer per concept, no monetary amounts outside offer, no early price shortcut or separate watch links, unchanged pricing/scope/assets, consent defaults and transmission gates |
| node --check previews/vsl-funnels/assets/site.js | 0 |
| python previews/vsl-funnels/package_preview.py --output <review-export-directory> | 0; 21 public files and ZIP; five former watch files retired from the existing export |
| Inline standard-library pricing-boundary probes using validate.Page | 0; hero, metadata and collapsed-FAQ amounts detected; final-only pricing accepted |
| python previews/vsl-funnels/validate.py --production | 1, intentionally; two draft testimonial cards block production |
| git diff --check | 0 |

Browser checks covered all five pages at 1280×900, 390×844 and 320×760
(15 page/viewport combinations). Every page had one loaded original thumbnail,
six work areas, no horizontal overflow, no amounts before the final offer and
no separate-VSL links. Play/close/focus restoration passed in every combination.
At desktop width, the package price began approximately 89–92% down each
full document, after the main explanation. This is layout evidence, not a
conversion result or a guarantee that a visitor read every section.

All four fit-form concepts rejected empty submission. Synthetic sample details
with optional consent unchecked showed the no-request result, cleared values
and created no query string. Return closed the dialog and restored CTA focus.
The first FAQ expanded through keyboard activation and reflected aria-expanded.
The fifth's record layer expanded; two placeholder cards remained; its one
purchase CTA used the exact supplied label/URL inside the final offer. No
checkout fields were entered and no payment was attempted.

The gallery had five cards and exactly one page button per card, with no price.
At all three widths, titles stayed inside the cards, did not overlap thumbnails
and produced no horizontal overflow. Mobile overview/records navigation remained
visible. No console errors or warnings appeared in the inspected preview tab.

Desktop/mobile screenshots are saved outside Git as review evidence. The
underlying application/API/provider code is unchanged, so those suites were
not rerun and no provider or production behavior is claimed.

Public replacement: https://constitutionalmoney.github.io/cheqyourself-vsl-review/

The Pages build reported built with no error for artifact commit
5c7af5f578497822690c20eb9c25339ae497c13d. All seven public HTML pages returned
HTTP 200, and all five retired watch.html URLs returned HTTP 404. The public
gallery showed five cards, one page button each and no price. All five public
funnels had one original thumbnail, six work areas, a final offer after the
story, no preceding monetary amount and no desktop overflow. The first
thumbnail was rechecked after the load event and had naturalWidth=1672.
The fifth's recording notice worked publicly; no console warning/error appeared.
The public gallery screenshot is saved outside Git. This proves draft review
hosting and presentation only, not video playback or provider operations.

The October 7 evidence below describes the former 12-page review and remains
historical.

## October 7 extension

Implemented: fifth standalone sales/VSL pair, five-concept gallery, original
thumbnail on all ten concept pages, recording notice/close with returned focus,
interactive record layers, accessible expanded FAQ state, mobile purchase bar,
editable fifth copy/URLs and public-file-only static export. The fifth keeps
direct-purchase CTAs and has no fit form. Draft testimonials carry obvious
placeholder labels; production validation rejects them.

Current commands and results, from the repository root:

| Command | Exit/result |
| --- | --- |
| python previews/vsl-funnels/build.py | 0; 12 generated pages |
| python previews/vsl-funnels/validate.py | 0; all 12 pages, local references, scope, pricing, consent defaults, transmission gates, source-image hashes, exact allowed external links and unique CTA locations |
| node --check previews/vsl-funnels/assets/site.js | 0 |
| python previews/vsl-funnels/validate.py --production | 1, intentionally; the two draft testimonial cards block production |
| python previews/vsl-funnels/package_preview.py --output <review-export-directory> | 0; 26 allowlisted public files and ZIP |
| git diff --check | 0 |

Local browser checks: all ten sales/VSL pages at 1280, 390 and 320 pixels
(30 page/viewport combinations). No horizontal overflow; six work areas on
every page; the unchanged 1672-pixel-wide thumbnail loaded everywhere; the
recording notice opened, closed and returned keyboard focus in every case.
The fifth page's exact CTA labels/URLs and two placeholder cards were inspected.
Its record layer and FAQ expanded through keyboard/pointer actions with
aria-expanded=true. The mobile purchase bar was hidden in the hero and visible
after passing it. The gallery contained five cards and had no mobile overflow.
Temporary viewport overrides were reset. Desktop/mobile screenshots are saved
outside Git as local review evidence, without private client data.

The original fit form rejected empty submission; optional consent remained
unchecked. Synthetic sample details produced the no-request notice, were
cleared, and did not enter the URL. The squeeze overview form with consent
unchecked opened its watch page, disclosed that no signup was sent, and used
only the fixed preview=overview query flag.

No application/API, GetResponse, payment, booking or production behavior is
claimed from these checks. No dependencies were installed. The underlying
quotes/fees, checkout amount/taxes, case-study evidence and paid-intake workflow
remain unverified. The attempted public Stripe read was unavailable; no
checkout fields were entered and no charge was attempted.

Sites controls were unavailable after reconnection approval. The user approved
a web-preview fallback. A temporary tunnel was rejected by workstation web
protection and stopped; no protection or certificate verification was bypassed.
The fallback is a separate GitHub Pages static review export, with no custom
domain/DNS change and no production application deployment.

Public review: https://constitutionalmoney.github.io/cheqyourself-vsl-review/

The initial Pages artifact commit edf091cd68141acc91b204f03ad0263f673c2bc3
reported build status built with no error. All 12 public HTML pages returned
HTTP 200 without authentication. The public browser gallery showed five
concept cards and their ten sales/VSL links; navigating to the fifth page and
opening its recording notice worked. No console errors or warnings appeared.
The public gallery screenshot is saved outside Git. This verifies review
hosting, not recording playback, live checkout or production application behavior.

## Initial October 2 evidence (historical)

This file records this build's evidence. Provider operations, Sites hosting,
video playback and production behavior are not established by local tests.

## Implemented

Four sales pages and four VSL pages, comparison hub, one editable short script,
genuine local assets, responsive styles, accessible FAQ controls, local
fit-form validation and honest overview/payment previews.

## Tested

The following commands ran from the repository root and exited 0:

    python previews/vsl-funnels/build.py
    python previews/vsl-funnels/validate.py
    node --check previews/vsl-funnels/assets/site.js
    git diff --check

The validator checked all ten HTML pages, local assets/links/anchors, preview
indexing/transmission policies, price/savings, six work areas, consent defaults,
exact source-asset hashes and the 573-word script's approved facts. JSON input
was parsed with the standard library; no dependencies were installed.

Local browser checks used the preview server at loopback port 5092:

- All four sales and all four VSL pages loaded at desktop width 1280 and mobile
  width 390. Images loaded, every page retained six work areas and none had
  horizontal overflow. The temporary viewport override was reset afterward.
- Empty fit form stayed invalid. Sample name/email/province/authority values
  produced the explicit "No request has been sent" result, were cleared, and
  did not enter the URL. Consent was unchecked and optional.
- The squeeze form rejected empty fields. Valid sample values with consent
  left unchecked opened the VSL and explained that no signup was sent. The
  URL used only the fixed non-personal preview flag. The separate ungated
  overview link was inspected.
- The video button disclosed that a recording is still needed. It did not
  pretend to play a video. The payment button explained that no payment had
  started and did not navigate to a provider.
- FAQ keyboard activation opened the requested answer. Escape closed the
  modal and returned focus to its trigger. No console errors or warnings
  appeared in the inspected preview tab.

For comparison, all five updated PR 80 pages were inspected locally at
desktop/390-pixel widths, with no overflow. The overview and watch price
showed CAD 1,799, the struck CAD 2,499 reference and CAD 700 saving. The fit page
was reviewed alongside its updated price acknowledgment. Unconfirmed
next-step/payment states did not claim a booking or payment. Private staff
approval and a real paid state were not simulated in this browser pass.

Screenshot evidence is saved outside Git as local review material; it is not
customer data or a hosted Sites preview. The full reference inputs and raw
transcript were not included in the PR.

## Awaiting configuration/assets

Sites connector access, actual recording/runtime/captions, permitted redacted
sample if used, calendar provider details, scope/taxes/current terms and
operational launch configuration.

## Still manual

Design selection, recording and caption review, Sites publication when access
exists, future website integration approval, staff scope review, confirmed
appointments, account configuration and launch authorization.

## Concept 05 mobile introduction revision — October 9, 2026

- `python previews/vsl-funnels/build.py` — exit 0.
- `python previews/vsl-funnels/validate.py` — exit 0; all seven pages validated.
- `git diff --check` — exit 0.
- Browser checks at 390×844 and 320×760: no horizontal overflow. The red-marked introductory CTA/refund/record link, player kicker and repeated record labels are hidden at widths up to 700px. The founder attribution and both below-video choices remain.
- Browser check at 1280×900: the existing two-column desktop layout and desktop details remain visible without overflow.
- The supplied Crown Grant graphic loads at its original 1122×1402 dimensions and immediately precedes the introductory subheadline. The complete asset is preserved without cropping.
- The remaining under-video fit link scrolls to and focuses `#what-we-do`; it does not open the popup. The final button opens the three-stage popup with all nine property types. Inquiry delivery remains disabled.
- Concepts 01–04, pricing, scope, video and consultation scripts were unchanged. This revision is authorized for publication to the existing GitHub Pages draft review only.

## Centered bordered Crown Grant and desktop cleanup — latest revision

- `python previews/vsl-funnels/build.py`: exit 0.
- `python previews/vsl-funnels/validate.py`: exit 0, seven pages.
- `node --check previews/vsl-funnels/assets/site.js` and `node --check previews/vsl-funnels/assets/consultation.js`: exit 0.
- `node --test previews/vsl-funnels/tests/consultation.test.cjs`: exit 0, eight tests.
- `git diff --check`: exit 0.
- Browser checks at 320, 390, 700, 701, 950, 1000 and 1280 pixels: no horizontal overflow; framed image centered within 0.01px; border-inclusive image height below video height at every width.
- Image order: the full Crown Grant follows the exact introductory subheadline. Original proportions and transparency retained in the responsive WebP copies; no content was generated or replaced.
- Desktop and mobile no longer render the extra introductory fit button, refund reminder, “The three records behind your property” kicker or repeated record labels. The refund policy elsewhere is unchanged.
- “Start with the records” directly follows both under-video choices. Pricing, service scope, the video, submission guards and Concepts 01–04 remain unchanged.
