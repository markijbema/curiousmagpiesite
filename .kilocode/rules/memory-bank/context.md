# Active Context: Curious Magpie Static Site

## Current State

**Site Status**: ✅ Static HTML/CSS site ready for GitHub Pages

The site has been converted from a Next.js app to a plain static HTML/CSS site. No build step required. Hosted directly on GitHub Pages.

## Recently Completed

- [x] **Moved all inline color styles to CSS classes** — no more hardcoded colors in HTML `style` attributes
- [x] **Headers now use accent blue (#00679A)** — page titles, section titles, card titles all use `--color-accent-blue`
- [x] **Greens kept for backgrounds** — CTA sections, badges, section backgrounds remain green-dominant
- [x] Added 50+ utility CSS classes: `.page-title`, `.section-title`, `.body-text`, `.badge-green`, `.bg-blush`, `.text-blue`, etc.
- [x] Created SVG favicon (`favicon.svg`) from ekster.svg — cropped to bird head + disco ball, text removed
- [x] Updated all 4 HTML pages to reference `favicon.svg` instead of `favicon.ico`
- [x] Removed `favicon.ico` (no longer needed)
- [x] Converted from Next.js to plain static HTML/CSS
- [x] Created 4 HTML pages (index, producten, agenda, contact)
- [x] Created shared CSS file (css/styles.css) with all design tokens and utility classes
- [x] Created vanilla JS for mobile navigation (js/nav.js)
- [x] GitHub Pages serves directly from `main` branch (no build step, no Actions workflow)
- [x] Removed all Next.js dependencies (package.json, tsconfig, next.config, etc.)
- [x] Google Fonts loaded via CDN (Playfair Display + Lato)
- [x] Added ekster.svg logo to header on all 4 pages (displayed alongside text logo)
- [x] Updated color palette to 5-color brand palette: #00679A, #207FA6, #6DB52D, #2C6C13, #FFB30F
- [x] Updated color stripe from 6 bands to 5 bands matching new palette
- [x] Updated all inline colors across all 4 HTML pages to match new palette
- [x] Updated CSS custom properties and pastel derivations for new palette
- [x] Added `.logo-img` and `.logo-text` CSS classes for logo layout
- [x] Removed dotted background pattern (`.dot-bg`), replaced with solid `var(--color-butter)` background
- [x] Created 8 SVG stub illustrations in `images/` directory (hero, atelier, 6 products)
- [x] Replaced all "Foto volgt" placeholder boxes with actual SVG illustrations on index.html and producten/index.html
- [x] Added CSS classes for images: `.product-img`, `.img-frame`, `.card-img`, `.photo-strip-item`
- [x] **Green is now the dominant/primary color** — swapped roles: greens (#2C6C13, #6DB52D) are primary/secondary, blues (#00679A, #207FA6) are accents
- [x] Updated `--color-cream` to `#f5f9f0` (soft green tint instead of warm cream)
- [x] Color stripe reordered: greens first, then yellow, then blues
- [x] CTA banner changed from blue to dark green
- [x] All badges, labels, and inline colors updated across all 4 pages to use green-dominant palette
- [x] **Made design more playful/rounder** — all border-radius changed from angular `4px 16px 4px 16px` to `20px` or `999px` (full pill) for buttons, badges, cards, contact cards, info boxes, market cards, photo strip items
- [x] `.dot-bg` now uses `var(--color-mint)` (soft green) instead of `var(--color-butter)`
- [x] Stripe pattern uses green-tinted stripes instead of yellow
- [x] Removed "Curious Magpie" text from logo (ekster.svg already contains it), kept only "keramiek atelier" subtitle
- [x] Made logo image larger (5rem instead of 3rem)
- [x] Replaced 5-color stripe with single solid green bar (#6DB52D)
- [x] Replaced striped background behind "greep uit de collectie" with solid `var(--color-mint)`

## Current Structure

| File/Directory | Purpose | Status |
|----------------|---------|--------|
| `index.html` | Home page with hero, about, featured products, CTA | ✅ Done |
| `producten/index.html` | Products overview with 6 products + illustrations | ✅ Done |
| `agenda/index.html` | Markets agenda with upcoming + past dates | ✅ Done |
| `contact/index.html` | Contact page with email + Instagram | ✅ Done |
| `css/styles.css` | All styles: layout, components, utilities, image classes | ✅ Done |
| `js/nav.js` | Mobile hamburger menu toggle | ✅ Done |
| `images/` | SVG stub illustrations (8 files: hero, atelier, 6 products) | ✅ Stub |
| `favicon.svg` | SVG favicon (bird head + disco ball, cropped from ekster.svg) | ✅ Done |
| (no workflow needed) | GitHub Pages serves from `main` branch directly | ✅ Done |
| `.kilocode/` | AI context & recipes | ✅ Ready |

## Current Focus

Website is a static site for Curious Magpie ceramics atelier (Marjolein IJbema).

### To deploy on GitHub Pages:
1. Push to `main` branch
2. Go to GitHub repo Settings → Pages → Source: "Deploy from a branch" → Branch: `main` / `/ (root)`
3. Save — the site will be live within a minute

Pending user actions:
1. Replace SVG stub illustrations in `images/` with real product photos (swap SVG for JPG/PNG, update `src` in HTML)
2. Update email address in contact page (currently info@curiousmagpie.nl)
3. Update market dates in agenda page as needed
4. Enable GitHub Pages in repo settings (Source: "Deploy from a branch" → Branch: `main` / `/ (root)`)

## Quick Start Guide

### To edit content:

Edit the HTML files directly. No build step needed.

### To preview locally:

Open `index.html` in a browser, or use a simple HTTP server:
```bash
python3 -m http.server 8000
```

### To add a new page:

1. Create a directory with an `index.html` file
2. Copy the header/footer from an existing page
3. Add navigation links to all pages

## Session History

| Date | Changes |
|------|---------|
| Initial | Template created with base Next.js setup |
| Previous | Built full Curious Magpie ceramics website (4 pages + components) |
| 2026-02-22 | Converted from Next.js to plain static HTML/CSS for GitHub Pages hosting |
| 2026-02-22 | Added ekster.svg logo to header, updated to 5-color brand palette (#00679A, #207FA6, #6DB52D, #2C6C13, #FFB30F) |
| 2026-02-22 | Removed dot background pattern (solid butter bg), added 8 SVG stub illustrations for all products/hero/atelier |
| 2026-02-22 | Made green the dominant color (customer feedback), made design more playful with rounder shapes (20px/999px border-radius) |
| 2026-02-22 | Simplified header: removed duplicate name text, enlarged logo, single green stripe, solid section backgrounds |
| 2026-02-22 | Created SVG favicon from ekster.svg (cropped to head + disco ball, text removed), updated all HTML pages to reference it |
| 2026-02-22 | Moved all inline color styles to CSS classes; headers now use accent blue (#00679A); greens kept for backgrounds |
