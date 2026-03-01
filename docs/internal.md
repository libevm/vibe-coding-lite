# Internal Documentation

## Stack Rationale

All decisions documented in `.memory/tech-stack.md`. This file covers conventions.

---

## CSS Architecture

- Single file: `css/style.css`
- Custom properties for all colors, spacing, and typography values — defined in `:root`
- No class naming methodology (BEM, etc.) — semantic HTML elements with minimal classes
- Mobile-first responsive design via `min-width` media queries
- Breakpoints: TBD during implementation

## Content Structure

- Each guide step is a `<section>` with an `id`
- Navigation targets section IDs via anchor links
- Heading hierarchy: `<h1>` site title → `<h2>` per step → `<h3>` substeps
- Code examples use `<pre><code>` with Prism.js language classes

## Accessibility

- Semantic HTML throughout (`<nav>`, `<main>`, `<section>`, `<article>`)
- Skip-to-content link
- Sufficient color contrast (WCAG AA minimum)
- Keyboard navigable
- `prefers-reduced-motion` respected for all transitions
- `prefers-color-scheme` respected if dark mode is implemented

## Browser Support

- Modern evergreen browsers (Chrome, Firefox, Safari, Edge — latest 2 versions)
- No IE11
- No polyfills
