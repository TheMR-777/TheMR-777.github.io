# AGENTS.md — Project Rules for AI Assistants

This is **MyPortfolio-v3**: Muhammad Ammar Khan's personal portfolio (React 19 + Vite 7 + TypeScript + Tailwind 4, single-file build via `vite-plugin-singlefile`). The content in `src/data/portfolio.ts` is a living record of a real person's career. Treat it with the seriousness of production code and the care of someone's public identity.

---

## 1. Communication & Context Rules (CRITICAL)

**User messages are CONTEXT, not COPY.** When the user describes accomplishments, stories, or facts about their work, that is *source material to be translated* — never text to be transplanted verbatim into portfolio data files.

- ✅ **DO**: extract the facts (what was built, who did what, outcomes, recognition), then re-author them in the portfolio's established prose style.
- ❌ **DON'T**: paste conversational phrasing ("Alhamdulillah — I am the engineer behind it all…", "I told you", "bruh") into data files. Personal asides, gratitude, and chat voice belong in conversation, not on the public site.
- ❌ **DON'T** invent anything not explicitly stated: no quantifications ("hundreds of hours", "days to seconds", "100% auditable"), no metrics, no technical details (e.g. "role-based permissions", "sandboxing") unless the user stated them or confirms them. Embellishment on a public résumé is a factual risk.
- ✅ **DO** preserve the *credit split* exactly as given (e.g. "I led engineering and architecture; implementation workloads were steered by Claude Fable and GPT-6 Astra"). Never upgrade the user's stated role, and never erase AI collaborators' role.
- When in doubt about a factual claim, ask the user instead of assuming.

## 2. Portfolio Voice & Philosophy

Content must respect the portfolio's existing narrative philosophy:

- **Journey over goal** — milestones are framed as parts of an ongoing evolution, not endpoints.
- **The engineer as orchestrator** — AI is framed as commanded capacity ("specialist squads", "orchestrations"), with the human in the review/quality loop.
- **Concept-to-reality bridges** — theoretical visions (e.g. Intelligent Scaffolding) gain weight when connected to shipped production outcomes; make those connections where honest.
- Use the project's inline markup conventions: `[hi]…[/hi]` (highlight), `[ac]…[/ac]` (accent), `[em]…[/em]`, `[dim]…[/dim]` — rendered by `StyledText`. These work only in strings rendered through `StyledText` (e.g. `skills.ai.description`); plain strings must NOT contain markup tags.
- Match the tone of neighboring content: confident, factual, precise, first-person, no hype inflation.

## 3. Data & Code Conventions

- All content lives in `src/data/portfolio.ts` (entities in `src/types/portfolio.ts`, access layer in `src/lib/portfolioDAL.ts`, views in `src/views/`).
- Strings in `portfolio.ts` are single-quoted: **escape apostrophes as `\'`** (e.g. `Colab\'s`). An unescaped `'` terminates the string and breaks the build — this has bitten multiple agents. Double-quoted strings don't need this but exist mostly where `[hi]`/`[ac]` markup is used.
- Entity flags (`isFlagship`, `featured`, etc.) are optional booleans; coerce with `!!` when used in filter predicates.
- Don't leave unused imports/variables — `tsc --noEmit` treats them as errors (TS6133).
- Keep additions *cohesive*: prefer extending existing touchpoints (project entry, experience highlights, skills, achievements) over inventing new sections.

## 4. Build & Verification (bun)

Verify after every content change:

```powershell
bunx tsc --noEmit   # must exit 0 — vite build does NOT typecheck
bun run build       # must succeed
```

- Note: `vite build` alone hides type errors — always run `tsc` explicitly.
- `bun run dev` for live inspection.
- Deploy flow: `bun run deploy` (gh-pages; `predeploy` runs the build).

## 5. Repo Hygiene

- `src/data/portfolio.backup.ts` is a legacy snapshot — don't edit it, don't treat it as current content.
- Don't commit `dist/`, `tsconfig.tsbuildinfo`, or scratch files (`X___*` dirs are user's private sync/scratch areas — leave them alone).
- The user uses bun; don't introduce npm/yarn/pnpm commands or lockfile churn.
