# Vibe Coding Lite

An opinionated guide on how to vibe code.

Available in English, Español, 中文, 한국어, and 日本語.

## Quickstart

```bash
git clone <repo-url>
cd vibe-coding-lite
python3 -m http.server 8000
open http://localhost:8000
```

## Guide note

Step 3 recommends using VitePress for JavaScript projects or Zensical for Python projects when setting up the documentation site in `docs/`.

## Commit workflow

Every change goes through a review-before-commit loop:

1. **Summarize** — after making changes, write a summary with rationale and a source-code-only `git diff` into `.memory/last-commit.md`
2. **Review** — spawn a code-reviewer (via `pi-tmux-manager`) to review the summary and diff
3. **Iterate** — fix anything the reviewer flags, update the summary, re-review
4. **Commit** — once approved, use the summary as the commit message, then delete `.memory/last-commit.md`

Only source code files (`.html`, `.css`, `.js`, `.md`) appear in the diff — never binary, JSON, XML, images, or lock files.

See Step 7 in the [Quickstart guide](quickstart.html) for full details.
