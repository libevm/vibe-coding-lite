# Changelog

## 2026-03-23

### Added
- New `snippets.html` subpage — "Snippets" section for short, reusable vibe coding techniques
- First snippet: "Steal the Best Style Guide in Open Source" — use TigerBeetle's Tiger Style as a blueprint to generate a code style doc for any language via AI agent
- "Snippets" quicklink card on all 5 landing pages
- Translated snippets page in all 4 language directories: `es/`, `zh/`, `ko/`, `ja/`
- Prompts in code blocks stay in English across all translations (per i18n convention)

### Why
- A dedicated page for short, actionable techniques gives a home to tips that don't fit in the quickstart guide or tools list. The Tiger Style snippet demonstrates cross-pollinating best practices across languages using AI — a high-leverage technique worth sharing.

### Files touched
- `snippets.html` (created), `es/snippets.html` (created), `zh/snippets.html` (created), `ko/snippets.html` (created), `ja/snippets.html` (created)
- `index.html`, `es/index.html`, `zh/index.html`, `ko/index.html`, `ja/index.html` (quicklink added)
- `docs/changelog.md` (this entry)
- `docs/internal.md` (snippets page pattern documented)

### Memory updates
- `docs/internal.md`

## 2026-03-16

### Changed
- Updated Step 3 in the quickstart guide across all 5 languages to recommend VitePress for JavaScript projects or Zensical for Python projects for the `docs/` site, replacing the earlier static HTML docs instruction
- Rewrote the Step 3 explanatory paragraph on all quickstart pages to align the docs tool with the project's primary language
- Updated `.memory/vibe-coding-guide.md` and `README.md` to reflect the new documentation-site recommendation

### Why
- The guide should point people to ecosystem-native documentation tools instead of hand-written static HTML docs

### Files touched
- `quickstart.html`, `es/quickstart.html`, `zh/quickstart.html`, `ko/quickstart.html`, `ja/quickstart.html`
- `.memory/vibe-coding-guide.md`
- `README.md`
- `docs/changelog.md`

### Memory updates
- `.memory/vibe-coding-guide.md`

## 2026-03-15

### Added
- Step 9 "Innovate" prompt to quickstart guide — asks the AI to identify the single smartest, most radically innovative addition it could make to the project
- Added nav item, structured data (JSON-LD), and section for step 9 across all 5 languages
- Updated all "8 steps/prompts" references to "9" in meta tags, intro text, and landing page descriptions

### Why
- New prompt encourages creative, high-leverage thinking after the structured build-and-secure workflow

### Files touched
- `quickstart.html`, `es/quickstart.html`, `zh/quickstart.html`, `ko/quickstart.html`, `ja/quickstart.html`
- `index.html`, `es/index.html`, `zh/index.html`, `ko/index.html`, `ja/index.html`
- `docs/changelog.md`

### Memory updates
- None

## 2026-03-15

### Changed
- Replaced PinchTab with Agent Browser (https://github.com/vercel-labs/agent-browser) in the Browser Automation section of tools page
- Updated meta keywords from "pinchtab" to "agent-browser" on all tools pages

### Why
- Swapping to Agent Browser by Vercel Labs as the recommended browser automation tool

### Files touched
- `tools.html`, `es/tools.html`, `zh/tools.html`, `ko/tools.html`, `ja/tools.html`

### Memory updates
- None

## 2026-03-14

### Added
- New "Agent Extensions" section on the tools page with pi-extensions (https://github.com/tmustier/pi-extensions) — a collection of extensions and skills for the Pi coding agent
- Same section added to all 4 translations (es, zh, ko, ja)

### Why
- pi-extensions provides useful coding agent tooling (file browser, tab status, long-running task loops, usage dashboard, etc.) that earns its place on the recommended tools list

### Files touched
- `tools.html`, `es/tools.html`, `zh/tools.html`, `ko/tools.html`, `ja/tools.html`
- `docs/changelog.md` (this entry)

### Memory updates
- None

---

## 2026-03-08

### Added
- Commit workflow added to the Step 7 (Implement) copy-paste prompt in the quickstart guide — after every change, summarize changes + rationale + source-code-only git diff into `.memory/last-commit.md`, spawn a code-reviewer agent to review, iterate until approved, then commit and delete the transient file
- Same content added to all 4 translations (es, zh, ko, ja)
- Commit workflow section in `README.md` — public-facing summary of the process
- Commit workflow section in `.memory/vibe-coding-guide.md` — source of truth updated

### Why
- Adds a structured review gate before every commit. The diff is filtered to source code files only (no binary/JSON/XML), the rationale is captured alongside the diff, and a second agent validates before anything lands. Keeps commit history clean and intentional.

### Files touched
- `quickstart.html`, `es/quickstart.html`, `zh/quickstart.html`, `ko/quickstart.html`, `ja/quickstart.html`
- `README.md`
- `.memory/vibe-coding-guide.md`
- `docs/changelog.md` (this entry)

### Memory updates
- `.memory/vibe-coding-guide.md`

---

## 2026-03-02 (iv)

### Changed
- Step 3 prompt: expanded `docs/` folder requirement to specify a static HTML documentation site — no build step, no framework, no generator. Plain `.html` files with one shared `style.css` and simple client-side search
- Added explanatory paragraph after the Step 3 code block in all 5 languages reinforcing the static HTML docs approach

### Why
- The docs/ folder instruction was too vague — it didn't specify *how* the docs should be built. Now it explicitly requires the simplest possible approach (static HTML) consistent with the project's philosophy, and adds search so docs remain usable as they grow

### Files touched
- `quickstart.html`, `es/quickstart.html`, `zh/quickstart.html`, `ko/quickstart.html`, `ja/quickstart.html`
- `.memory/vibe-coding-guide.md` (source of truth updated)

### Memory updates
- `.memory/vibe-coding-guide.md`

## 2026-03-02 (iii)

### Changed
- Step 1: made it explicit that the four questions (What is this? / Who is it for? / What does it do? / What does it NOT do?) must be answered by the user, not delegated to the AI
- Added bullet list of the four questions before the code block, with bold callout text, across all 5 languages
- Strengthened the post-prompt paragraph to ask "Does it match your intent?"

### Why
- The previous text could be read as "paste the prompt and let the AI figure it out" — but these are questions only the human builder can answer. The AI can draft the writing, but the answers must come from the user

### Files touched
- `quickstart.html`, `es/quickstart.html`, `zh/quickstart.html`, `ko/quickstart.html`, `ja/quickstart.html`

### Memory updates
- None

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
