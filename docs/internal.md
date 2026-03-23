# Internal Documentation

## Stack Rationale

All decisions documented in `.memory/tech-stack.md`. This file covers conventions.

---

## Site Structure

The site is multi-page:

- `index.html` — Landing page with quicklinks. Uses `body.landing` class. No CDN scripts (no Prism, no Mermaid). Minimal inline error handler.
- `quickstart.html` — The 8-step vibe coding guide. Uses sidebar/topbar nav, Prism.js, Mermaid.js, and `js/main.js`.
- `tools.html` — Curated tools page. Uses `body.subpage` class with `.subpage-header` / `.subpage-main`. No CDN scripts needed.
- `snippets.html` — Short, reusable vibe coding techniques. Uses `body.subpage` class. Each snippet is a `<section>` with an `id`, `<h2>`, explanation text, and a `<pre><code>` prompt block. No CDN scripts needed.

All pages share `css/style.css`. Guide-specific nav styles are scoped with `:not(.landing-nav)` and `body:not(.landing)` to avoid conflicts with landing page layout.

### Page patterns

There are three page types:

1. **Landing** (`body.landing`) — Centered hero + quicklink cards. No sidebar nav, no CDN scripts.
2. **Guide** (no body class) — Sidebar/topbar nav, Prism.js, Mermaid.js, `js/main.js`. Used by `quickstart.html`.
3. **Subpage** (`body.subpage`) — Simple centered content page with back-link. `.subpage-header` + `.subpage-main`. No sidebar nav, no CDN scripts unless needed. Used by `tools.html`.

All subpages include a `.back-link` in the header for navigation back to the landing page.

## CSS Architecture

- Single file: `css/style.css`
- Custom properties for all colors, spacing, and typography values — defined in `:root`
- No class naming methodology (BEM, etc.) — semantic HTML elements with minimal classes
- Mobile-first responsive design via `min-width` media queries
- Landing page styles use `.landing`, `.landing-*` class prefixes
- Guide nav styles scoped with `:not(.landing-nav)` to avoid landing page conflicts
- Breakpoints: 375px (small mobile), 960px (desktop sidebar), 1280px (large re-center)

## Content Structure

- Each guide step is a `<section>` with an `id` (in `quickstart.html`)
- Navigation targets section IDs via anchor links
- Heading hierarchy: `<h1>` site title → `<h2>` per step → `<h3>` substeps
- Code examples use `<pre><code>` with Prism.js language classes
- Landing page quicklinks use `.quicklink` cards with `.quicklink-label` and `.quicklink-desc`

## Internationalization (i18n)

The site uses a directory-based approach for translations:

- English (default) lives at root: `/index.html`, `/quickstart.html`, `/tools.html`
- Translations live in `/{lang}/` directories mirroring root: `/es/`, `/zh/`, `/ko/`, `/ja/`
- Each page includes `<link rel="alternate" hreflang="...">` tags for all available languages plus `x-default`
- A `.lang-switcher` nav in the footer shows available languages

### Adding a new language

1. Create a `/{lang}/` directory (e.g., `/es/`)
2. Copy all root HTML pages into it and translate the content
3. Keep `lang` attribute on `<html>` matching the language code (e.g., `lang="es"`)
4. Update `hreflang` link tags on **all pages in all languages** to cross-reference each other
5. Add the language to the `.lang-switcher` nav on **all pages**
6. CSS and JS paths use `../css/style.css`, `../js/main.js` from subdirectories

### Convention

- Language codes follow BCP 47 (e.g., `en`, `es`, `ja`, `zh-Hans`, `ko`)
- Current languages: English (root), Spanish (`/es/`), Chinese (`/zh/`), Korean (`/ko/`), Japanese (`/ja/`)
- Root always serves English and is the `x-default`
- Translation pages are full copies — no JS-based string swapping, no build step
- Language switcher is placed in the header (above the title), not the footer
- Prompts (code blocks for AI agents) stay in English across all translations

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
