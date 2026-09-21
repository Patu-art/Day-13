# Day 13 — 99 Reasons / Chorlton

A responsive, static **unofficial website concept** for a café and bar in Chorlton, Manchester. Built with separate HTML, CSS and vanilla JavaScript for GitHub Pages. No backend, fake booking flow, embedded trackers, font CDNs or remote image dependencies.

## Deploy

The project is deployed to the root of `Patu-art/Day-13` on the `main` branch. GitHub Pages should use Settings → Pages → Deploy from a branch → `main` → `/ (root)`. Changes can take a few minutes to appear. To preview locally, open `index.html` in a browser or run a static web server. Site has no build dependencies.

## Assets and accuracy

- `assets/coffee.svg`, `brunch.svg`, `cocktail.svg` and `favicon.svg` are original stylised illustrations supplied with this concept, **not photos of 99 Reasons or actual menu items**. No image URLs are used anywhere in the site.
- Replace them with licensed/venue-approved original photography before presenting as a final brand website, if the owners agree. Maintain the same filenames or update paths in HTML and the mood-switch image path in `js/main.js`.
- The site is independently produced and has not been commissioned or endorsed by 99 Reasons. Please obtain business approval before claiming to represent them or publishing under their name for commercial use.
- Verified public venue details used in this concept: 99 Manchester Road, Chorlton-cum-Hardy, M21 9GA; 0161 881 7216; hello@99reasons.co.uk; @99reasonschorlton. Source: CAMRA listing https://camra.org.uk/pubs/99-reasons-chorlton-cum-hardy-130096 and current TripAdvisor profile https://www.tripadvisor.co.uk/Restaurant_Review-g187069-d25477024-Reviews-99_Reasons-Manchester_Greater_Manchester_England.html (checked 2026-09-21). Contact details, opening times, menu and ownership must be re-confirmed with the venue before official launch. Listings disagree on some opening times, so no potentially incorrect timetable was published. The decorative coordinate/map graphic is explicitly illustrative; the directions button opens a real Google Maps place search.
- Text mentions the categories already publicly associated with the venue, not confirmed live stock, specific item prices, reservations, or scheduled events.

## Interaction and accessibility

Working mobile menu (Escape closes, navigation closes on selection and desktop resize), day/night hero mode toggle with accessible pressed state and relevant alt text, reduced-motion handling, skip link, keyboard focus styles, native phone/email/Instagram/Maps links, lazy below-the-fold images. JS failures leave main content and desktop links readable.

## Photography required before an official customer-facing launch

The existing SVGs are self-contained original concept illustrations, **not venue photography**. To make the demo more convincing, request the following **venue-approved** horizontal/portrait images, preferably original high-resolution JPG or WebP files:

| Priority | Shot | Where it would appear | Recommended source dimensions |
| --- | --- | --- | --- |
| 1 | Interior / bar counter with actual café atmosphere (no unconsenting identifiable guests) | Main hero, replace concept coffee illustration if approved | 1600 × 1800 portrait |
| 2 | Actual coffee in venue's cup, with distinct setting | Coffee offer card and daytime mood | 1200 × 1400 portrait |
| 3 | One of the venue's **actual current** brunch dishes | Brunch offer card | 1200 × 1400 portrait |
| 4 | Actual cocktails/drinks photographed in the bar | Drinks offer card and evening mood | 1200 × 1400 portrait |
| 5 | Exterior or entrance/signage (optional) | About / Find us, after adding an appropriate section | 1600 × 1000 landscape |

Suggested new filenames: `venue-interior.webp`, `coffee.webp`, `brunch.webp`, `evening.webp`, and `exterior.webp`. Keep files inside `assets/`, not hotlinked to Instagram or an image search. Make sure each image is owned or licensed by the venue and obtain their permission to use it in the demo. Publicly visible Instagram/Google photographs are **not automatically licensed for reuse**.

To integrate approved photos: change the affected `<img src>` values in `index.html`; for the day/night switch, change both `heroImage.src` choices in `js/main.js`; update alt text so photographs are not described as illustrations; and remove the illustration-only warnings once **all** imagery has genuinely been replaced. Do not replace an SVG's bytes with a JPG while keeping `.svg` in the filename. Crop and compress imagery offline to keep the site fast.
