# Tech Stack

## Decision Basis

This is a **single-page static website**. It displays text, diagrams, and code snippets. There is no user auth, no database, no API, no backend logic. The content is the product.

The stack must reflect that reality — nothing more.

---

## Stack

| Layer | Choice | Why |
|-------|--------|-----|
| **Markup** | HTML | One page. No routing. No generation step. |
| **Styling** | CSS (single file) | Custom properties for theming. No utility classes. No preprocessor. |
| **Interactivity** | Vanilla JS (single file) | Smooth scroll, section navigation, copy-to-clipboard. No framework. |
| **Diagrams** | Mermaid.js (CDN) | Renders state diagrams from markdown in the guide. Single `<script>` tag. |
| **Code highlighting** | Prism.js (CDN) | Lightweight syntax highlighting for JSON/bash/markdown examples. Single `<script>` + `<link>`. |
| **Hosting** | Static file server (Netlify / Vercel / GitHub Pages) | Zero config. Push to deploy. Free tier. |
| **Dev server** | `python3 -m http.server` or `npx serve` | No build step. Open the HTML file. |

---

## Total Dependencies

| Type | Count |
|------|-------|
| CDN scripts | 2 (Mermaid, Prism) |
| npm packages | 0 |
| Build tools | 0 |
| Bundlers | 0 |
| Frameworks | 0 |

---

## File Structure

```
/
├── index.html              # The entire site
├── css/
│   └── style.css           # All styles
├── js/
│   └── main.js             # All interactivity
├── assets/                  # Fonts, images, favicons
├── docs/
│   ├── internal.md          # Design decisions, conventions, rationale
│   └── changelog.md         # What changed, when, why
├── .memory/                 # Project intent (existing)
│   ├── overview.md
│   ├── vibe-coding-guide.md
│   ├── tech-stack.md
│   └── ...
├── README.md
└── AGENTS.md
```

---

## What Was Rejected (and Why)

| Option | Rejection Reason |
|--------|-----------------|
| React / Vue / Svelte | This is a single page of text. A component framework solves a problem that doesn't exist here. |
| Tailwind CSS | Utility classes obscure intent in markup. A single CSS file with custom properties is clearer and smaller. |
| Next.js / Astro / Gatsby | Static site generators add build steps, config files, and node_modules for a site that is one HTML file. |
| Markdown-to-HTML pipeline | Adds a build step. The content is fixed — write it directly in semantic HTML. |
| TypeScript | No application logic complex enough to benefit from type checking. |
| npm / package.json | Nothing to install. Nothing to build. Nothing to bundle. |
| Sass / Less | CSS custom properties handle theming. No nesting depth justifies a preprocessor. |
| Animation libraries | CSS transitions and `scroll-behavior: smooth` cover every interaction in the design intent. |

---

## Logging & Observability

The overview defines this as a **read-only static site**. There is no server, no state machine, no transitions to log.

Observability is handled at the hosting layer:

- **Analytics** — optional, privacy-respecting (Plausible or Fathom via single `<script>` tag, or none)
- **Error tracking** — `window.onerror` handler in `main.js` that logs to console in dev. No external service needed.
- **Performance** — Lighthouse CI in deployment pipeline if/when a CI pipeline exists. Until then, manual Lighthouse runs.

Structured logging, correlation IDs, and trace spans from the vibe coding guide apply to **application backends** — not to this project. They are part of the content being taught, not the infrastructure serving it.

---

## `docs/` Folder

### `docs/internal.md`

Contains:

- Why each stack decision was made (points back to this file)
- CSS architecture notes (naming, custom properties, responsive breakpoints)
- Content structure conventions (how sections are organized in HTML)
- Accessibility standards being followed
- Browser support targets

### `docs/changelog.md`

Contains:

- Date-stamped entries
- What changed
- Why it changed
- Which `.memory/` files were updated (if any)

Format:

```markdown
## YYYY-MM-DD

### Changed
- What was modified

### Why
- Reason for the change

### Memory updates
- List of `.memory/` files touched
```

---

## Guiding Principle

> If you can't explain why a dependency exists in one sentence that references the overview, remove it.

This site is **words on a screen, arranged with care**. The stack exists to get out of the way.
