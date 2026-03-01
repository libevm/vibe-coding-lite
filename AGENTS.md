# AGENTS.md

You are working on **Vibe Coding Lite** — a multi-page static website that teaches people how to vibe code.

Available in 5 languages: English (root), Spanish (`/es/`), Chinese (`/zh/`), Korean (`/ko/`), Japanese (`/ja/`).

Read `.memory/overview.md` before doing anything.

---

## Rules

### 1. No silent changes

Every change you make must be reflected in:

- **`docs/changelog.md`** — what changed, why, and which files were touched
- **`docs/internal.md`** — if the change affects conventions, architecture, or standards
- **`.memory/`** — if the change affects intent, scope, stack, or structure
- **`README.md`** — if the change affects project structure, quickstart, or public-facing info

If you change code but not documentation, the change is incomplete.

### 2. Read before writing

Before modifying any file, read:

- `.memory/overview.md` — to understand what this project is
- `.memory/tech-stack.md` — to understand what is and isn't allowed
- `docs/internal.md` — to understand current conventions

Do not guess. Do not assume. Read.

### 3. Respect the stack

The stack is: HTML, CSS, vanilla JS, Mermaid.js (CDN), Prism.js (CDN).

Do not introduce:

- Frameworks (React, Vue, Svelte, etc.)
- Build tools (Webpack, Vite, Rollup, etc.)
- CSS preprocessors (Sass, Less, PostCSS, etc.)
- Package managers (npm, yarn, pnpm)
- TypeScript
- Any new dependency without explicit approval

If you believe a new dependency is needed, state the case in plain language. Do not add it.

### 4. Follow the file structure

```
index.html          — Landing page
quickstart.html     — 8-step guide
tools.html          — Curated tools
css/style.css       — All styles (shared)
js/main.js          — All interactivity (guide page)
es/                 — Spanish translations (mirrors root)
zh/                 — Chinese translations (mirrors root)
ko/                 — Korean translations (mirrors root)
ja/                 — Japanese translations (mirrors root)
assets/             — Static assets only
docs/               — Internal docs and changelog
.memory/            — Project intent and decisions
```

Do not create new top-level files or directories without explicit approval.

### 5. Maintain semantic HTML

- Use `<section>`, `<nav>`, `<main>`, `<article>`, `<header>`, `<footer>`
- Each guide step is a `<section>` with an `id`
- Heading hierarchy: `<h1>` → `<h2>` → `<h3>` — no skipping levels
- Code examples: `<pre><code class="language-*">`

### 6. Maintain accessibility

- All interactive elements must be keyboard accessible
- Color contrast must meet WCAG AA
- Respect `prefers-reduced-motion`
- Respect `prefers-color-scheme` if dark mode exists
- Include `alt` text on all images
- Maintain skip-to-content link

### 7. CSS conventions

- All theming values in `:root` custom properties
- No inline styles
- No utility classes
- Mobile-first with `min-width` breakpoints
- One file: `css/style.css`

### 8. JS conventions

- No frameworks, no libraries (beyond CDN scripts listed in stack)
- Event delegation where practical
- One file: `js/main.js`
- `window.onerror` handler for dev error visibility

### 9. Internationalization

When adding or modifying an English page:

- Create or update the corresponding page in **all** language directories: `es/`, `zh/`, `ko/`, `ja/`
- Update `hreflang` link tags on **all** pages (all languages) to include the new page
- Update the `.lang-switcher` nav on **all** pages to link to the new page in each language
- CSS and JS paths from language directories use `../css/style.css`, `../js/main.js`
- Back-links point to the language-specific landing page (e.g., `/es/`, `/ko/`)
- Prompts (code blocks meant for AI agents) stay in English; surrounding text is translated

If you add a new English page but not the translations, the change is incomplete.

### 10. Content integrity

The guide content in `.memory/vibe-coding-guide.md` is the source of truth.

If you modify how content is presented in `index.html`, do not alter the meaning, sequence, or structure of the guide itself without explicit approval.

### 11. Changelog format

Every entry in `docs/changelog.md` must follow:

```markdown
## YYYY-MM-DD

### Added / Changed / Removed
- What was modified

### Why
- Reason for the change

### Memory updates
- List of `.memory/` or `docs/` files touched (or "None")
```

---

## Summary

Read first. Change with care. Document everything. Keep it simple.
