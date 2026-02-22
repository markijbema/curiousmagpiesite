# System Patterns: Curious Magpie Static Site

## Architecture Overview

```
/
├── index.html              # Home page
├── producten/index.html    # Products page
├── agenda/index.html       # Markets agenda page
├── contact/index.html      # Contact page
├── css/styles.css          # All styles (design tokens, components, utilities)
├── js/nav.js               # Mobile hamburger menu toggle
├── images/                 # SVG stub illustrations (8 files)
├── ekster.svg              # Full logo (magpie with disco ball + text)
├── favicon.svg             # Cropped favicon (head + disco ball only)
├── .gitignore              # Git ignore rules
├── AGENTS.md               # AI agent instructions
├── README.md               # Project readme
└── .kilocode/              # AI context & recipes
```

## Key Design Patterns

### 1. Directory-Based Routing (Static)

Each page is an `index.html` inside its own directory for clean URLs:
```
/                    → index.html
/producten/          → producten/index.html
/agenda/             → agenda/index.html
/contact/            → contact/index.html
```

### 2. Shared Header/Footer Pattern

Every page includes the same header and footer HTML. When adding a new page, copy from an existing page and update the active nav link.

### 3. CSS-Only Design System

All styling is in a single `css/styles.css` file with:
- **Custom properties** (CSS variables) for brand colors, fonts
- **Component classes** (`.card`, `.badge`, `.btn`, `.market-card`, etc.)
- **Utility classes** (`.text-blue`, `.bg-blush`, `.mb-lg`, `.section-pad`, etc.)
- **Typography classes** (`.page-title`, `.section-title`, `.body-text`, `.lead`, etc.)

### 4. No Build Step

- Plain HTML, CSS, and vanilla JS
- Google Fonts loaded via CDN
- No bundler, no transpiler, no framework
- GitHub Pages serves files directly from `main` branch

## Styling Conventions

### CSS Custom Properties
```css
--color-primary: #5C8001;       /* Olive green */
--color-secondary: #2C3D01;     /* Dark olive */
--color-accent-blue: #00679A;   /* Deep blue — used for headers */
--color-accent-gold: #FFB30F;   /* Bright yellow */
--color-ink: #4C2E05;           /* Dark brown — body text */
```

### Color Strategy
- **Headers/titles**: Accent blue (`--color-accent-blue`, #00679A)
- **Backgrounds**: Greens (`--color-primary`, `--color-blush`, `--color-mint`)
- **CTA sections**: Dark green (`--color-secondary`)
- **Body text**: Brown ink (`--color-ink`, `--color-ink-soft`)
- **Badges**: Green or gold variants

### Common Patterns
```html
<!-- Page title -->
<h1 class="page-title">Producten</h1>

<!-- Section title -->
<h2 class="section-title">Natuur als inspiratie</h2>

<!-- Badge -->
<div class="badge badge-green tilt-left mb-md">✦ Handgemaakt keramiek ✦</div>

<!-- Card -->
<div class="card">
  <div class="card-img-wrapper aspect-square">...</div>
  <div class="card-body">
    <h3 class="card-title">Product Name</h3>
    <p class="body-text">Description</p>
  </div>
</div>
```

## File Naming Conventions

- HTML pages: `index.html` inside named directories
- CSS: single file `css/styles.css`
- JS: single file `js/nav.js`
- Images: descriptive kebab-case (`product-slakjes.svg`, `hero.svg`)
- SVG assets: descriptive names (`ekster.svg`, `favicon.svg`)

## Fonts

- **Display**: Playfair Display (headings) — loaded via Google Fonts CDN
- **Body**: Lato (body text) — loaded via Google Fonts CDN
