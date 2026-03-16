# Vibe Coding Lite

# Recommended Tools

- LLM (Claude / GPT-5)
- Agent toolkit (ex: pi, claude-code, opencode, codex)

### Optional: Turbo-charge `.memory/` with qmd

[qmd](https://github.com/tobi/qmd) compresses markdown into a minimal, LLM-optimized format - stripping noise while preserving meaning. Running it over your `.memory/` files before feeding them as context can dramatically reduce token usage and speed up AI responses.

---

## What You're Learning

Vibe coding is not about letting AI "build your app".

It's about using AI as an execution partner - while you retain control over:

- Direction
- Structure
- Constraints

The goal is simple:

> Move fast without losing architectural clarity.

This guide teaches you how to do that.

---

# The Mindset

Most AI-driven projects fail because:

- The AI decides structure
- Planning is skipped
- Code grows faster than understanding

Vibe coding flips that.

You define the shape first.

AI helps fill it in.

---

# The System

Everything revolves around a single idea:

Your project must have a memory.

Create a folder:

```

.memory/

```

This is where your project's intent lives.

Not the codebase.

Not the docs.

The intent.

---

# Step 1 - Describe the System (Without Tech)

Create:

```

.memory/overview.md

```

This answers:

- What is this?
- Who is it for?
- What does it do?
- What does it NOT do?

Do **not** include:

- Frameworks
- APIs
- Databases
- Infra
- Technical details

Think of this as describing a product to a smart investor.

Use AI to draft it.
Refine it yourself until it feels simple and obvious.

If it sounds technical - simplify it.

---

# Step 2 - Define the States

Now the system needs rules.

Ask AI to generate:

```

.memory/state-transitions.md

```

From your overview.

This should define:

- Possible system states
- What causes movement between them
- Invalid transitions
- Terminal states

Also include:

A Mermaid diagram visualizing the flow.

At this point, your app becomes a state machine.

This is where chaos prevention starts.

### Log every transition

Every state transition must produce a structured log entry.

At minimum, each log should include:

- Timestamp
- Previous state
- New state
- Trigger (what caused the transition)
- Actor (user, system, external event)
- Correlation ID (to trace a request across boundaries)

Example format:

```json
{
  "ts": "2026-03-01T09:34:00Z",
  "correlation_id": "abc-123",
  "actor": "user:42",
  "from": "pending",
  "to": "active",
  "trigger": "payment_confirmed",
  "metadata": {}
}
```

If a transition is rejected (invalid), log that too - with the reason.

These logs become your ground truth.
They are how you debug, how you audit, and how you prove correctness.

---

# Step 3 - Choose the Stack (After Structure)

Only now should tech enter the conversation.

Ask AI to review `.memory/`.

Have it recommend:

- The simplest yet most robust viable stack
- Minimal dependencies (unless necessary)
- Maximum clarity

Avoid:

- Fancy frameworks
- Heavy abstraction
- Premature scale tools

Also require:

A `docs/` folder — a documentation site built with:

- VitePress for JavaScript projects
- Zensical for Python projects
- Pick the option that matches the main project language
- Internal documentation
- Changelog

### Include logging and tracing from day one

When selecting the stack, include:

- A **structured logging** library (JSON output, not plaintext)
- A **tracing / correlation ID** mechanism
- A **log level** strategy

Recommended log levels:

| Level | Use |
|-------|-----|
| `TRACE` | Fine-grained execution path (function entry/exit, variable values) |
| `DEBUG` | Internal logic decisions, branching, cache hits/misses |
| `INFO` | State transitions, lifecycle events, request/response summaries |
| `WARN` | Recoverable issues, fallback paths taken, retries |
| `ERROR` | Failures, unhandled states, broken invariants |

Default to **verbose in development** (`TRACE` or `DEBUG`).

Default to **structured and queryable in production** (`INFO` and above).

Every inbound request or event should generate a **correlation ID** that propagates through all downstream calls, logs, and errors. This is non-negotiable - without it, debugging distributed behavior is guesswork.

Tracing should be a first-class citizen, not bolted on later.

---

# Step 4 - Create Human & AI Entry Points

Generate:

```

README.md
AGENTS.md

```

---

## README.md (For Humans)

This should:

- Explain what the project is
- Point to `.memory/`
- Point to `docs/`
- Provide quickstart steps

It should NOT repeat planning content.

Think of it as a map, not a book.

---

## AGENTS.md (For AI)

This defines:

- How the AI should behave
- What it must maintain
- What it must update

It must require that any change triggers updates to:

- `.memory/`
- `docs/`
- `README.md`

No silent evolution allowed.

### Logging conventions for AI

AGENTS.md should also define logging rules the AI must follow:

- Every new function or handler must include logging at `DEBUG` level or above
- State-changing operations must log at `INFO` with before/after values
- Error paths must log at `ERROR` with full context (input, state, reason)
- No swallowed exceptions - if it's caught, it's logged
- Correlation IDs must be propagated, never dropped
- Log messages must be **structured** (key-value), not interpolated strings

This prevents the AI from generating "clean" code that is impossible to debug.

---

# Step 5 - Create the Implementation Plan

Generate:

```

.memory/implementation-plan.md

```

This is where building actually begins.

Each step must:

- Be small
- Have a single goal
- Contain no code
- Include a validation test

Validation must include **at least one of the following**:

### Human-in-the-loop verification

A manual way for an operator to confirm the feature works.

Examples:

- Debug endpoint
- UI state visibility
- Logged transition
- Observable system behavior

---

### AI feedback loop verification

A mechanism where the system's output can be evaluated and fed back into the AI.

Examples:

- Structured logs
- Evaluation outputs
- State reports
- Machine-readable result signals

The goal is:

> Either a human can confirm correctness
> OR the system can report correctness back to the AI

---

### Verbose tracing per implementation step

Each step in the implementation plan should produce **observable proof of execution**.

This means:

- Wrap the step's logic in trace spans (start/end with timing)
- Log all inputs at `DEBUG` on entry
- Log all outputs and side effects at `DEBUG` on exit
- Log decision branches at `TRACE` (which path was taken and why)
- On failure, log at `ERROR` with full context: inputs, state, stack trace

Example trace for a single step:

```
[TRACE] step=create_user | phase=start | input={"email":"a@b.com"}
[DEBUG] step=create_user | check=email_unique | result=true
[DEBUG] step=create_user | check=rate_limit | remaining=47
[TRACE] step=create_user | phase=db_insert | duration_ms=23
[INFO]  step=create_user | phase=complete | user_id=42 | duration_ms=31
```

On failure:

```
[ERROR] step=create_user | phase=db_insert | error="unique constraint" | input={"email":"a@b.com"} | state=pending
```

This level of verbosity is **required during development**. It can be dialed back later via log levels — but the instrumentation must exist from the start.

---

Optional but recommended:

```

/debug/*

```

Expose debug endpoints or views that surface:

- Recent log entries (filterable by correlation ID)
- Current system state
- Active trace spans
- Transition history

So behavior can be verified easily — by humans or by AI.

---

# Step 6 - Remove Ambiguity

Now ask AI to review everything in:

```

.memory/

```

Have it answer:

- Is anything unclear?
- What assumptions exist?
- Where could implementations diverge?

You want:

Execution without interpretation.

---

### Commit workflow

After every change, before committing, summarize what changed and why into:

```
.memory/last-commit.md
```

This file should contain:

- **What changed** — a brief list of modifications
- **Why** — the rationale behind the changes
- **Diff** — a `git diff` of source code files only (`.html`, `.css`, `.js`, `.md`). Never include binary files, JSON, XML, images, fonts, or lock files

Then spawn a separate agent (e.g. via tmux) to act as a **code reviewer**. The reviewer reads `.memory/last-commit.md` and checks correctness, completeness, and whether the rationale holds up.

If the reviewer flags issues — fix them, regenerate the diff, update the file, and re-submit. Once the reviewer is satisfied, use the summary as your git commit message, commit, then **delete `.memory/last-commit.md`**. It is a transient file — it must not persist after the commit.

This creates a review gate on every commit: no change lands without a second pair of eyes (even if those eyes are an AI). The diff stays readable because it only contains source code, and the rationale is captured alongside the code — not buried in a commit message you'll never re-read.

---

# Step 7 - Security Pass

Before considering the system stable, ask the AI to perform a penetration test of the application.

This should include:

- Attempting to break state assumptions
- Testing invalid transitions
- Input misuse scenarios
- Prompt injection vectors (if applicable)
- Authorization boundary checks
- Output manipulation attempts

The goal is to surface:

- Hidden failure modes
- Trust boundary violations
- Unexpected state transitions

Treat this as an architectural stress test, not just a vulnerability scan.

### Audit logging for security events

During the security pass, verify that the following are logged at `WARN` or `ERROR`:

- Authentication failures (with source IP / actor)
- Authorization denials (what was attempted, by whom)
- Invalid state transitions (with full context)
- Input validation rejections (what was received, what was expected)
- Rate limit triggers
- Any request that touches a trust boundary

These logs must:

- Be tamper-resistant (append-only, or shipped to an external sink)
- Include correlation IDs for traceability
- Never contain secrets, tokens, or raw passwords
- Be retained long enough for incident response

If the security pass reveals scenarios that aren't logged — add logging before moving on.

---

# How to Think While Using This

You are not managing code.

You are managing intent.

Follow this order:

1. Shape
2. Rules
3. Stack
4. Execution

When this order breaks - complexity grows.

When this order holds - velocity stays high.

---

# What Success Looks Like

You should be able to:

- Understand your system at a glance
- Modify it without fear
- Onboard new contributors quickly
- Let AI build without losing control

That's vibe coding.
