# Technical Context: Curious Magpie Static Site

## Technology Stack

| Technology      | Purpose                              |
| --------------- | ------------------------------------ |
| HTML5           | Page structure                       |
| CSS3            | Styling (custom properties, flexbox, grid) |
| Vanilla JS      | Mobile menu toggle only              |
| Google Fonts    | Playfair Display + Lato via CDN      |
| GitHub Pages    | Static hosting from `main` branch    |

## Development Environment

### Prerequisites

- Any text editor
- A web browser for previewing
- Git for version control

### Commands

```bash
# Preview locally
python3 -m http.server 8000
# or just open index.html in a browser

# Deploy
git add -A && git commit -m "message" && git push
```

## Project Structure

```
/
├── index.html              # Home page
├── producten/index.html    # Products page
├── agenda/index.html       # Markets agenda page
├── contact/index.html      # Contact page
├── css/styles.css          # All styles (single file)
├── js/nav.js               # Mobile hamburger menu toggle
├── images/                 # SVG stub illustrations (8 files)
│   ├── hero.svg
│   ├── atelier.svg
│   ├── product-vrouwenfiguur.svg
│   ├── product-slakjes.svg
│   ├── product-kaartjeshouder.svg
│   ├── product-paddestoelen.svg
│   ├── product-groentestekers.svg
│   └── product-bloemetjeskaartjes.svg
├── ekster.svg              # Full logo (magpie + disco ball + text)
├── favicon.svg             # Cropped favicon (head + disco ball)
├── .gitignore              # Git ignore rules
├── AGENTS.md               # AI agent instructions
├── README.md               # Project readme
└── .kilocode/              # AI context & recipes
```

## CSS Architecture

Single file `css/styles.css` organized as:

1. **Custom Properties** — brand colors, fonts, semantic aliases
2. **Base styles** — reset, body, headings, links
3. **Layout helpers** — containers, grids, stacks
4. **Navigation** — header, nav links, hamburger, mobile menu
5. **Footer** — footer grid, brand, nav, social
6. **Buttons** — `.btn`, `.btn-primary`, `.btn-yellow`, etc.
7. **Badges** — `.badge`, `.badge-sm`, color variants
8. **Cards** — `.card`, `.card-body`, `.card-img-wrapper`
9. **Market cards** — `.market-card`, `.date-badge`, `.time-badge`
10. **Contact cards** — `.contact-card`, `.info-box`
11. **Color utilities** — `.text-blue`, `.bg-blush`, `.bg-mint`, etc.
12. **Typography classes** — `.page-title`, `.section-title`, `.body-text`, `.lead`
13. **Spacing utilities** — `.mb-md`, `.mb-lg`, `.section-pad`

## Key Design Tokens

```css
--color-primary: #5C8001;       /* Olive green */
--color-secondary: #2C3D01;     /* Dark olive */
--color-accent-blue: #00679A;   /* Deep blue — headers */
--color-accent-gold: #FFB30F;   /* Bright yellow */
--color-ink: #4C2E05;           /* Dark brown — body text */
--color-ink-soft: #6B4A1A;      /* Lighter brown */
--color-cream: #f7f5ee;         /* Page background */
--color-blush: #d8e4a8;         /* Light olive */
--color-mint: #e4ecc8;          /* Lighter olive */
--color-butter: #faecc0;        /* Light gold */
--color-powder: #c0e0f0;        /* Light blue */
```

## Technical Constraints

- **No build step** — files served as-is
- **No JavaScript framework** — vanilla JS only (for hamburger menu)
- **No package manager** — no npm, no bun, no dependencies
- **No server-side logic** — pure static files
- **Modern browsers only** — uses CSS custom properties, grid, flexbox

## Deployment

- **Host**: GitHub Pages
- **Source**: `main` branch, root directory
- **URL**: Set in GitHub repo Settings → Pages
- **Deploy**: Push to `main` — GitHub Pages auto-deploys

## Performance

- No JavaScript bundles to load
- Single CSS file (~1000 lines)
- SVG illustrations (small file sizes)
- Google Fonts loaded via CDN with `preconnect`
- No images to optimize yet (using SVG stubs)
