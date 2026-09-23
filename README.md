# Day 13 — 99 Reasons, Chorlton

[Live concept](https://patu-art.github.io/Day-13/) · [Portfolio](https://patu-art.github.io/Portfolio/) · [Challenge log](https://patu-art.github.io/Portfolio/challenge.html)

An independent, unofficial static website concept for 99 Reasons. HTML, CSS and vanilla JavaScript are separate, with no remote images, build step or backend.

## Deployment

GitHub Pages: `main` branch, repository root. Entry point: `index.html`. Use the venue’s permission and confirmation of business information before offering this as an official website.

## Local photography

Four user-supplied files are committed in `assets/` and referenced by the website:

| File | Website use |
| --- | --- |
| `coffee-and-bakes.png` | Daytime hero, coffee card and daytime scene |
| `venue-interior.png` | Nighttime hero and evening scene |
| `food-special.png` | Food card |
| `whisky-night-poster.png` | Events/evening card, linking to the venue’s Instagram |

The day/night button updates the hero image and description in `js/main.js`. The poster is a dated promotional graphic, **not a promise of a currently bookable event**; viewers are directed to the venue for current details. The previously included original SVG illustrations remain in `assets/` as unused optional concept assets.

These photographs were supplied by the project requester, not verified as licensed for public promotional use. Obtain permission from the rights holders and the venue before a client-facing launch. Any people identifiable in interior shots should have appropriate permissions for this use. This demo is not commissioned, endorsed by, or affiliated with 99 Reasons.

Opening hours, menu, prices and event availability are deliberately not stated as current facts. Confirm them directly with the venue before production.

## Developer notes

All image URLs are relative local paths; do not hotlink Instagram. To replace a photograph, keep its filename or update the `src` in `index.html` and, for hero images, the matching paths in `js/main.js`. Optimize high-resolution files for production without making the promotional poster illegible.
