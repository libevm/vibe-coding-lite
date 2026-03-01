# Implementation Plan

This is the build sequence for Vibe Coding Lite. Each step has one goal. No step contains code. Every step has a way to verify it worked.

Steps are executed in order. Do not skip ahead.

---

## Content Approach

The website content is **inspired by** `.memory/vibe-coding-guide.md` — not a verbatim copy of it.

The guide is a raw markdown reference written for someone sitting in a terminal. The website is a **navigable, digestible experience** for someone in a browser (see `.memory/overview.md`).

This means:

- **Preserve** the guide's core ideas, sequence, and philosophy — nothing is invented, nothing contradicts
- **Adapt freely** for the web — rewrite for scannability, tighten phrasing, restructure for visual rhythm
- **Enrich** with the medium — code blocks become highlighted, diagrams become interactive SVGs, dense lists become visual groups with breathing room
- **Drop or condense** anything that doesn't serve a first-time reader scanning in a browser — the guide has depth aimed at practitioners; the website is the on-ramp
- **Follow the overview's design intent** — cognitive pacing, radical clarity, calm interface, knowledge scaffolding

The guide provides the *what*. The overview provides the *how*. The website is the synthesis.

### Content Map

These are the conceptual beats from the guide. Each becomes a section on the website. The section IDs, headings, and exact phrasing are flexible — what matters is that every idea has a home:

| Guide Concept | Website Section | Core Idea to Convey |
|---|---|---|
| Recommended Tools | `#tools` | What you need to get started (LLM + agent toolkit) |
| What You're Learning | `#intro` | Vibe coding = AI as execution partner, you keep control |
| The Mindset | `#mindset` | Why AI projects fail — and the fix (shape first, fill second) |
| The System | `#system` | Your project needs a memory — the `.memory/` folder |
| Step 1 | `#step-1` | Describe what you're building in plain language, no tech |
| Step 2 | `#step-2` | Define states and transitions — your app is a state machine |
| Step 3 | `#step-3` | Now pick the stack — simplest viable, with observability |
| Step 4 | `#step-4` | Create entry points for humans (README) and AI (AGENTS) |
| Step 5 | `#step-5` | Plan in small steps with validation — human or machine |
| Step 6 | `#step-6` | Review for ambiguity — execution without interpretation |
| Step 7 | `#step-7` | Stress-test security and assumptions before shipping |
| How to Think | `#thinking` | Shape → Rules → Stack → Execution |
| What Success Looks Like | `#success` | Understand, modify, onboard, control — that's it |

---

## Step 1 — HTML skeleton

**Goal:** Create `index.html` with the bare document structure. No content, no styling, no scripts.

Include:

- `<!DOCTYPE html>`, `<html lang="en">`, `<head>`, `<body>`
- `<meta charset>`, `<meta viewport>`
- `<title>`
- Skip-to-content link
- `<header>` with site title
- `<nav>` with placeholder links for each section from the Content Map
- `<main id="content">` with one empty `<section id="...">` per Content Map row
- `<footer>`
- Links to `css/style.css` and `js/main.js` (files don't exist yet — that's fine)

**Validation:**

Open `index.html` in a browser. You see unstyled text: a title, nav links, empty section headings, a footer. The skip-to-content link is visible on focus. Count the sections — one per Content Map row. Valid HTML — W3C validator, zero errors.

---

## Step 2 — CSS foundation

**Goal:** Create `css/style.css` with design tokens and base typography. No layout, no components.

Include:

- `:root` custom properties for colors, font sizes, spacing scale, max-width
- `prefers-reduced-motion` media query disabling transitions
- Base reset (box-sizing, margin, padding)
- `body` font-family, line-height, color, background
- Heading styles (`h1`, `h2`, `h3`) with clear visual weight hierarchy
- `a` styles
- `code` and `pre` base styles

**Validation:**

Reload the page. Text is readable. Headings are visually distinct from body text. The page feels calm — generous whitespace, quiet typography. Resize to mobile width: nothing overflows, nothing breaks.

---

## Step 3 — Page layout

**Goal:** Add layout rules to `css/style.css`. Position the nav, main content, and footer.

Include:

- Centered content column with `max-width` and horizontal padding
- Nav positioning (sticky top or sidebar — decide based on overview's "referenceable" requirement)
- Section spacing (generous vertical rhythm between guide steps)
- Footer positioning

**Validation:**

Reload. Content sits in a readable column. Nav is visible and sticky so you always know where you are. Sections breathe. Scroll top to bottom — the rhythm feels even. Test at 320px, 768px, and 1440px widths.

---

## Step 4 — Guide content: introduction

**Goal:** Add the introductory content to `index.html` — the sections before the numbered steps.

Sections to populate:

- `#tools` — What you need to get started
- `#intro` — What vibe coding actually is
- `#mindset` — Why AI projects fail and how this fixes it
- `#system` — The `.memory/` concept

Inspired by the guide's opening sections. Adapt freely — what matters is that a reader finishes this stretch understanding: vibe coding is about controlling direction while AI handles execution, and the mechanism is a `.memory/` folder that holds project intent.

**Validation:**

Reload. Read the introduction top to bottom as a first-time visitor. You understand what vibe coding is, why it exists, and what `.memory/` does — without needing to read the raw guide. The pacing feels natural. No walls of text.

---

## Step 5 — Guide content: steps 1–3

**Goal:** Add the first three steps of the guide to their `<section>` elements.

Sections to populate:

- `#step-1` — Describe the system in plain language
- `#step-2` — Define states, transitions, and logging
- `#step-3` — Choose the stack with observability in mind

Inspired by the guide's Steps 1–3. Key ideas to convey:

- Step 1: Write an overview a non-technical person could understand. No frameworks, no APIs.
- Step 2: Your app is a state machine. Define states, transitions, and what's invalid. Log every transition. Include a representative example of a structured log entry and a Mermaid diagram placeholder.
- Step 3: Pick tech after structure exists. Simplest viable stack. Include logging and tracing from day one. Show what log levels mean.

Adapt the presentation. The guide's tables, JSON blocks, and lists are starting points — restructure for visual clarity on the web.

**Validation:**

Reload. Read Steps 1–3. The core advice is clear: describe without tech, model as states, then pick tools. Code examples are in `<pre><code>` blocks. A log example is visible. A Mermaid placeholder exists (will render later). If the guide mentions a concept (correlation IDs, log levels, invalid transitions), it has a home somewhere in these sections — even if condensed.

---

## Step 6 — Guide content: steps 4–5

**Goal:** Add steps 4 and 5 of the guide.

Sections to populate:

- `#step-4` — Create entry points for humans and AI
- `#step-5` — Build an implementation plan with validation

Inspired by the guide's Steps 4–5. Key ideas to convey:

- Step 4: README is a map for humans. AGENTS.md is a contract for AI. Changes must propagate to docs. No silent evolution.
- Step 5: Each implementation step should be small, single-goal, and verifiable — by a human checking behavior or by the system reporting back to AI. Trace everything during development.

The guide's Step 5 is the longest section — condense for the web. The reader needs to understand the principle (small steps + proof of execution), not memorize every trace format.

**Validation:**

Reload. Read Steps 4–5. The purpose of README vs. AGENTS.md is clear. The implementation plan philosophy is clear: small steps, validation, observable proof. The section feels actionable, not overwhelming.

---

## Step 7 — Guide content: steps 6–7 and closing

**Goal:** Add the final steps and closing sections.

Sections to populate:

- `#step-6` — Review for ambiguity
- `#step-7` — Security stress test
- `#thinking` — The mental model
- `#success` — The closing statement

Inspired by the guide's Steps 6–7 and closing sections. Key ideas to convey:

- Step 6: Before building, have AI find everything unclear, assumed, or ambiguous. Goal is execution without interpretation.
- Step 7: Treat security as an architectural stress test. Break assumptions, test boundaries, verify audit logging.
- Thinking: You manage intent, not code. Shape → Rules → Stack → Execution. When this order holds, velocity stays.
- Success: Understand at a glance, modify without fear, onboard fast, let AI build without losing control.

The closing should land with weight. Minimal words. "That's vibe coding." or equivalent.

**Validation:**

Reload. Scroll the entire page top to bottom. Every section from the Content Map exists. The closing feels conclusive — not abrupt, not rambling. The page is complete in content. All that remains is polish.

---

## Step 8 — Navigation links

**Goal:** Wire up `<nav>` links to point to each section's `id`. Add `scroll-behavior: smooth` to CSS.

**Validation:**

Click every nav link. The page scrolls smoothly to the correct section. The URL hash updates. Back button returns to previous position. Keyboard: Tab to a nav link, press Enter — same behavior. With `prefers-reduced-motion: reduce` — scroll is instant, not animated.

---

## Step 9 — Syntax highlighting

**Goal:** Add Prism.js via CDN. Apply language classes to all `<code>` blocks.

Include:

- Prism core CSS (`<link>` in `<head>`)
- Prism core JS (`<script>` before `</body>`)
- Language modules: `json`, `bash`, `markdown`
- Theme: subdued, matching the calm aesthetic

**Validation:**

Reload. All code blocks are syntax-highlighted. JSON keys, strings, and values have distinct colors. The colors feel integrated, not pasted on. Network tab: only Prism CDN files load.

---

## Step 10 — Mermaid diagrams

**Goal:** Add Mermaid.js via CDN. Convert diagram placeholders to rendered SVGs.

Include:

- Mermaid JS (`<script>` before `</body>`)
- `mermaid.initialize({ startOnLoad: true, theme: 'neutral' })` or similar calm theme
- Diagram source in `<pre class="mermaid">` blocks

**Validation:**

Reload. The state diagram renders as an SVG. Legible at desktop and mobile widths. Visual style doesn't clash. If Mermaid fails to load (disable network), the raw text is still readable as fallback.

---

## Step 11 — Copy-to-clipboard

**Goal:** Add a copy button to code blocks in `js/main.js`.

Behavior:

- Small "Copy" button appears on hover/focus of each `<pre>` block
- Click copies text content to clipboard
- Button text changes to "Copied" for 2 seconds, then reverts
- Keyboard accessible

**Validation:**

Hover over a code block — copy button appears. Click — paste elsewhere — correct text. Tab to button, Enter — same. Doesn't disrupt reading when inactive. On mobile: button is accessible without hover.

---

## Step 12 — Active section indicator

**Goal:** In `js/main.js`, highlight the current section in the nav as the user scrolls.

Use `IntersectionObserver` to detect which section is in the viewport. Add an active class to the corresponding nav link.

**Validation:**

Scroll slowly through the page. The nav link for the visible section is visually distinct. Only one link active at a time. Top of page — first link active. Bottom — last link active.

---

## Step 13 — Error handler

**Goal:** Add a `window.onerror` handler in `js/main.js` that logs errors to the console with context.

Include: error message, source file, line number, column number, error object.

**Validation:**

Open DevTools. Temporarily introduce a JS error. Reload. Console shows a structured error log with all fields. Remove the intentional error.

---

## Step 14 — Responsive polish

**Goal:** Test and fix layout at all target widths.

Test at: 320px, 375px, 768px, 1024px, 1440px.

Fix: text overflow, nav usability on small screens, table horizontal scroll, code block overflow, touch targets ≥ 44px.

**Validation:**

Page at each width. Nothing overflows. Nothing illegible. Nav usable. Code blocks scroll horizontally. The page feels intentional at every size.

---

## Step 15 — Favicon and meta

**Goal:** Add favicon, Open Graph tags, and meta description to `<head>`.

Include: `<meta name="description">`, `<meta property="og:title">`, `<meta property="og:description">`, `<meta property="og:type" content="website">`, `<link rel="icon">`.

**Validation:**

Browser tab shows favicon and title. URL pasted into a messaging app shows correct preview card. Lighthouse SEO score is green.

---

## Step 16 — Performance check

**Goal:** Run Lighthouse audit. Fix anything below 90 on Performance, Accessibility, Best Practices, or SEO.

**Validation:**

All four Lighthouse scores ≥ 90. Document exact scores in `docs/changelog.md`.

---

## Step 17 — Final read-through

**Goal:** Read the entire site as a first-time visitor. No code changes — only content and spacing adjustments.

Check:

- Does the introduction make sense without prior knowledge?
- Does each step build on the last?
- Is any section too long or too dense?
- Does the closing land?

**Validation:**

A human can read the site in under 10 minutes and explain to someone else how to start vibe coding. If not, identify where the flow breaks and adjust. Log adjustments in `docs/changelog.md`.

---

## Completion

After Step 17, the site is shippable. Deploy to the static host chosen in `.memory/tech-stack.md`.

Everything after this is iteration — not construction.
