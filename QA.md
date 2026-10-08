# Validation record

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
