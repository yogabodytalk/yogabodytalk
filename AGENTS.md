# AGENTS.md

## Continuity Ledger
- At the start of every assistant turn, read `/Users/hafa/Documents/yoga_phong_thai/http:/CONTINUITY.md`, update it for the current goal/state, then proceed.
- Keep the ledger short and stable. Update it when goal, constraints, decisions, progress state, or important tool outcomes change.
- Begin replies with a brief Ledger Snapshot: Goal + Now/Next + Open Questions.

## AG Kit
- AG Kit is installed at `.agent/`.
- For implementation, debugging, review, planning, or UI/design tasks, first inspect `.agent/ARCHITECTURE.md`, then inspect the relevant `.agent/agents/<agent>.md`.
- Load only the relevant `.agent/skills/<skill>/SKILL.md` files referenced by the selected agent; do not bulk-load all skills.
- Prefer these mappings:
  - Web/React/Next UI: `.agent/agents/frontend-specialist.md`
  - Bug/root-cause debugging: `.agent/agents/debugger.md`
  - Verification/testing: `.agent/agents/test-engineer.md` and `.agent/workflows/verify.md`
  - Planning: `.agent/agents/project-planner.md` and `.agent/workflows/plan.md`
- Treat `.agent/workflows/*.md` as reusable prompt/procedure references for slash-style requests like `/verify`, `/status`, `/plan`, and `/debug`.
- Keep the normal Codex/tool hierarchy: system, developer, and user instructions take precedence over AG Kit.
- Do not auto-spawn subagents unless the user explicitly asks for subagents/delegation.
