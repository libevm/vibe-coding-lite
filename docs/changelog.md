# Changelog

## 2026-03-02 (ii)

### Changed
- Replaced "Parallel agents OK" with "Less jargon" in the landing page opinion section across all languages

### Why
- Simplifies the messaging — "less jargon" communicates the project's ethos more clearly than a technical statement about parallel agents

### Memory updates
- None

## 2026-03-02 (i)

### Added
- Korean (`/ko/`) and Japanese (`/ja/`) translations — all 3 pages each
- Spanish (`/es/`) and Chinese (`/zh/`) translations — all 3 pages each (created earlier, now complete)

### Changed
- Moved language switcher from footer to header (above title) on all 15 pages
- Updated `hreflang` tags on all 15 pages to cross-reference all 5 languages
- Fixed guide page footer being hidden behind fixed sidebar nav on desktop (added `padding-left` to footer at 960px+)
- Lang-switcher now uses `flex-wrap` to handle 5 languages gracefully
- Rewrote `README.md` — now just subtitle, language list, and quickstart
- Added Rule 9 (Internationalization) to `AGENTS.md` — every new English page must have translations in all languages
- Updated `AGENTS.md` intro, file structure, and rule numbering

### Why
- Site now serves 5 languages. The i18n rule ensures translations stay in sync as the site grows.

### Memory updates
- `.memory/tech-stack.md` (updated — explicit language directories)
- `docs/internal.md` (updated — current languages, switcher position, prompt convention)
- `AGENTS.md` (updated — i18n rule, file structure, intro)
- `README.md` (rewritten)

---

## 2026-03-02 (h)

### Added
- `hreflang` link tags (`en` + `x-default`) to all pages for SEO
- `.lang-switcher` nav in footer on all pages (currently English only)
- `.lang-switcher` CSS styles
- i18n conventions documented in `docs/internal.md` — directory-based approach, how to add a new language

### Why
- Making the site multi-language friendly. Infrastructure is in place so translations can be added by copying pages into `/{lang}/` directories without any build step.

### Memory updates
- `.memory/tech-stack.md` (updated — file structure includes `{lang}/` convention)
- `docs/internal.md` (updated — i18n section added)

---

## 2026-03-02 (g)

### Changed
- Integrations category: Gaskill is now a nested subpoint under gogcli
- Added `.tool-sublist` CSS for nested tool alternatives

### Why
- Gaskill is an alternative to gogcli, not a peer. The hierarchy should reflect that.

### Memory updates
- None

---

## 2026-03-02 (f)

### Changed
- Fixed tool name links on `tools.html` not looking like links — `strong` was overriding link color to heading-black
- Added `.tool-list a strong { color: inherit }` so the link accent color shows through

### Why
- Links should look like links.

### Memory updates
- None

---

## 2026-03-02 (e)

### Changed
- Rewrote `tools.html` — stripped verbose descriptions, organized tools by category
- Categories: Browser Automation (PinchTab), Documentation (qmd)
- Each tool is now one line: name, link, one-sentence description
- Replaced `.tool-tagline` CSS with `.tool-list` (clean unstyled list)

### Why
- Too much text. A tools page should be scannable — name, what it does, link. Done.

### Memory updates
- None

---

## 2026-03-02 (d)

### Changed
- Shortened parallel agents line on landing page: "Parallel agents OK." (was "Parallel agents are fine — delegation chains are not.")

### Why
- Tighter copy. The stance is clearer when it's blunt.

### Memory updates
- None

---

## 2026-03-02 (c)

### Added
- Opinionated stance section on landing page (`index.html`) between header and quicklinks
- States: no MCP (links to [pi blog post](https://mariozechner.at/posts/2025-11-30-pi-coding-agent/#toc_16)), no sub-agents, parallel agents OK
- `.landing-opinion` CSS for the stance section

### Why
- The site has a clear point of view. Stating it upfront sets expectations and filters for the right audience — people who want simplicity and control, not tool sprawl.

### Memory updates
- None

---

## 2026-03-02 (b)

### Added
- `tools.html` — new subpage listing curated vibe coding tools
  - **PinchTab** — high-performance browser automation bridge
  - **qmd** — mini CLI search engine for docs
- "Tools" quicklink card on landing page (`index.html`)
- `.subpage` / `.subpage-header` / `.subpage-main` CSS for content subpages without sidebar nav
- `.tool-tagline` CSS for tool category labels

### Why
- The site is growing beyond a single quickstart guide. A dedicated tools page gives curated recommendations a permanent home without cluttering the guide itself.

### Memory updates
- `.memory/tech-stack.md` (updated — file structure)
- `docs/internal.md` (updated — new page pattern)

---

## 2026-03-02

### Changed
- Moved guide content from `index.html` → `quickstart.html`
- Created new `index.html` as a landing page with quicklink navigation
- First quicklink: "Quickstart" — links to the 8-step guide
- Added `body.landing` class and `.landing-*` CSS for landing page layout
- Added `.back-link` to quickstart page header for navigation back to home
- Scoped sidebar/topbar nav CSS with `:not(.landing-nav)` and `body:not(.landing)` so landing page layout is unaffected by guide nav styles
- Updated canonical URL and og:url on quickstart page to reflect new path

### Why
- The site is expanding from a single-page guide to a multi-page site with a landing page hub. The landing page will host quicklinks to different sections/resources, starting with the Quickstart guide.

### Memory updates
- `.memory/overview.md` (updated — multi-page structure)
- `.memory/tech-stack.md` (updated — file structure)
- `docs/internal.md` (updated — multi-page conventions)

---

## 2026-03-01 (d)

### Changed
- `.memory/implementation-plan.md` — rewrote to treat guide as inspiration, not verbatim source

### Why
- The guide is a raw markdown reference for practitioners. The website is a digestible experience for first-time visitors. Content should be adapted for the web medium — preserving ideas and sequence, but rewriting freely for scannability, pacing, and visual rhythm. Added Content Approach section and Content Map to make the relationship explicit.

### Memory updates
- `.memory/implementation-plan.md` (rewritten)

---

## 2026-03-01 (c)

### Added
- `.memory/implementation-plan.md` — 17-step build sequence from skeleton to ship

### Why
- Step 5 of the vibe coding guide: create the implementation plan before writing code

### Memory updates
- `.memory/implementation-plan.md` (created)

---

## 2026-03-01 (b)

### Added
- `README.md` — project map for humans (quickstart, structure, pointers)
- `AGENTS.md` — rules and conventions for AI agents working on this project

### Why
- Step 4 of the vibe coding guide: create human and AI entry points

### Memory updates
- None (no `.memory/` changes — these files reference existing memory)

---

## 2026-03-01

### Added
- `.memory/tech-stack.md` — stack selection based on project overview
- `docs/internal.md` — conventions and architecture notes
- `docs/changelog.md` — this file

### Why
- Step 3 of the vibe coding guide: choose the stack after structure is defined

### Memory updates
- `.memory/tech-stack.md` (created)
