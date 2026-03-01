# Vibe Coding Lite

A single-page website that teaches people how to start vibe coding.

Open it. Read for five minutes. Know exactly how to start.

---

## What This Is

A clear, calm, navigable reference for vibe coding — not a course, not a framework, not a rabbit hole.

The full project intent lives in `.memory/overview.md`.

---

## Project Structure

```
index.html          — The entire site
css/style.css       — All styles
js/main.js          — All interactivity
```

### Planning

```
.memory/            — Project intent, state, and decisions
  overview.md       — What this is, who it's for, what it does
  vibe-coding-guide.md — The guide content
  tech-stack.md     — Stack choices and rationale
```

### Documentation

```
docs/
  internal.md       — Conventions, architecture notes, standards
  changelog.md      — What changed, when, why
```

---

## Quickstart

```bash
# Clone
git clone <repo-url>
cd vibe-coding-lite

# Serve
python3 -m http.server 8000

# Open
open http://localhost:8000
```

No install. No build. No dependencies.

---

## Stack

HTML + CSS + vanilla JS. Two CDN scripts (Mermaid.js, Prism.js). Nothing else.

Full rationale in `.memory/tech-stack.md`.

---

## Contributing

1. Read `.memory/` first — understand the intent before touching code
2. Read `AGENTS.md` if working with AI
3. Log changes in `docs/changelog.md`
