# Active Context: Curious Magpie Static Site

## Current State

**Site Status**: ✅ Static HTML/CSS site ready for GitHub Pages

The site has been converted from a Next.js app to a plain static HTML/CSS site. No build step required. Hosted directly on GitHub Pages.

## Recently Completed

- [x] Converted from Next.js to plain static HTML/CSS
- [x] Created 4 HTML pages (index, producten, agenda, contact)
- [x] Created shared CSS file (css/styles.css) with all design tokens and utility classes
- [x] Created vanilla JS for mobile navigation (js/nav.js)
- [x] Added GitHub Actions workflow for automatic deployment to GitHub Pages
- [x] Removed all Next.js dependencies (package.json, tsconfig, next.config, etc.)
- [x] Google Fonts loaded via CDN (Playfair Display + Lato)

## Current Structure

| File/Directory | Purpose | Status |
|----------------|---------|--------|
| `index.html` | Home page with hero, about, featured products, CTA | ✅ Done |
| `producten/index.html` | Products overview with 6 products + placeholders | ✅ Done |
| `agenda/index.html` | Markets agenda with upcoming + past dates | ✅ Done |
| `contact/index.html` | Contact page with email + Instagram | ✅ Done |
| `css/styles.css` | All styles: layout, components, utilities | ✅ Done |
| `js/nav.js` | Mobile hamburger menu toggle | ✅ Done |
| `favicon.ico` | Site icon | ✅ Done |
| `.github/workflows/deploy.yml` | GitHub Pages deployment | ✅ Done |
| `.kilocode/` | AI context & recipes | ✅ Ready |

## Current Focus

Website is a static site for Curious Magpie ceramics atelier (Marjolein IJbema).

### To deploy on GitHub Pages:
1. Push to `main` branch
2. Go to GitHub repo Settings → Pages → Source: "GitHub Actions"
3. The workflow will automatically deploy on every push to main

Pending user actions:
1. Replace placeholder images with real product photos
2. Update email address in contact page (currently info@curiousmagpie.nl)
3. Update market dates in agenda page as needed
4. Enable GitHub Pages in repo settings (Source: GitHub Actions)

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
