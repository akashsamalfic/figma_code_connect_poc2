# Figma implementation plan — Code Connect POC (ASC)

**Figma:** [Code-Connect-POC](https://www.figma.com/design/ikzzK2FEEsZJG3TmhcJ1mA/Code-Connect-POC?node-id=0-1&p=f&m=dev)  
**File key:** `ikzzK2FEEsZJG3TmhcJ1mA`

## Project analysis (baseline)

| Area | Finding |
|------|---------|
| Stack | React 18 + TypeScript (strict), inline styles + `cssVars` tokens |
| Routing | None — component library; screens live under `src/pages/` |
| Styling | No Tailwind/CSS modules; `src/tokens/cssVars.ts` + MaximEyes tokens in `design-system/tokens.json` |
| Components | 9 Code Connect–mapped primitives (Button, EHRNavBar, LeftQuickSearchPanel, EncounterTable, etc.) |
| Icons | Inline SVG in screen/nav helpers (no icon package) |
| Design system | Evaa / MaximEyes variables documented in repo; Figma canvas `#f6f6f1` |

## Code Connect mappings (repo)

| Figma component | Node ID | Code |
|-----------------|---------|------|
| Button | `22431:1308` | `src/components/Button/Button.tsx` |
| PatientDetailsBanner | `22431:1882` | `src/components/PatientDetailsBanner/PatientDetailsBanner.tsx` |
| DropDown | `22445:651` | `src/components/DropDown/DropDown.tsx` |
| Date Picker | `22431:2552` | `src/components/DatePicker/DatePicker.tsx` |
| CountBadge | `22431:2694` | `src/components/CountBadge/CountBadge.tsx` |
| _QuickSearchQueue/State3 | `22431:2709` | `src/components/QuickSearchQueue/QuickSearchQueue.tsx` |
| Simple Table | `22431:3751` | `src/components/Table/EncounterTable.tsx` |
| Left_QuickSearchPanel | `22431:2723` | `src/components/LeftQuickSearchPanel/LeftQuickSearchPanel.tsx` |
| EHRNavBar | `22431:3223` | `src/components/EHRNavBar/EHRNavBar.tsx` |

MCP `get_code_connect_map` at page `0:1` returned empty (mappings live in published library + local `.figma.ts`); implementation follows repo `design-system/CODE_CONNECT.md`.

## Screens in file (Phase 1 scope)

| Screen | Figma node | Description |
|--------|------------|-------------|
| ASC — Encounter History | `1:1954` | Full EHR shell + left quick search + encounters table |
| *(none on canvas)* | — | Only one top-level frame on page `0:1`; Phase 1 = this screen |

---

| Phase | Task | Description | Status |
|-------|------|-------------|--------|
| 0 | Project analysis | Structure, tokens, components, no router | Done |
| 0 | Figma MCP inspect | Metadata `0:1`, design context `1:1954`, table `22431:4486` | Done |
| 0 | Code Connect review | Local `.figma.ts` + `design-system-state.json` | Done |
| 0 | Plan document | This file | Done |
| 1 | Tokens | Extend `cssVars` for canvas, nav, table, section text | Done |
| 1 | EncounterTable | Full column set, zebra rows, status icons, mock rows | Done |
| 1 | EHRNavBar | `preset="encounter-history"` matching ASC nav | Done |
| 1 | Button / DropDown | Icon-only `Alone` size; field labels on DropDown | Done |
| 1 | ASCScreen | Compose mapped components + static mock data | Done |
| 1 | Export | `src/index.ts` exports `ASCScreen` | Done |
| 2 | Figma parity pass | MCP variables + assets; inline filters; nav/icons; interactions | Done |
| 2 | Visual QA vs Figma | Layout, tokens, 7-row table, nav preset vs MCP screenshot | Done |
| 2 | typecheck | `npm run typecheck` | Done |
| 2 | lint/build | No ESLint/Vite in repo; typecheck only | Done (N/A build) |
| 2 | Update plan | Mark verification tasks complete | Done |
| 3 | Additional screens | TBD when new frames added in Figma | Not started |
| 3 | Backend / API | Out of scope per requirements | Not started |
