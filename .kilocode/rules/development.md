# Development Rules

## Critical Rules

- **No build step** — this is a plain static HTML/CSS/JS site
- **No package manager** — no npm, bun, or yarn needed
- **Always commit and push** after completing changes:
  ```bash
  git add -A && git commit -m "descriptive message" && git push
  ```

## Commands

| Command | Purpose |
|---------|---------|
| `python3 -m http.server 8000` | Preview locally at http://localhost:8000 |
| `git add -A && git commit -m "msg" && git push` | Deploy to GitHub Pages |

## Best Practices

### HTML
- Use semantic HTML elements (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Use CSS classes instead of inline styles for colors and layout
- Keep all pages consistent with the same header/footer structure

### CSS
- All styles in a single file: `css/styles.css`
- Use CSS custom properties (variables) for brand colors
- Use utility classes for common patterns (`.text-blue`, `.bg-blush`, `.mb-lg`)
- Use component classes for complex elements (`.card`, `.badge`, `.market-card`)

### Content
- All content is in Dutch (Nederlands)
- Write descriptive commit messages
- Update memory bank after significant changes
