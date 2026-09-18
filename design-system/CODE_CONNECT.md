# Code Connect — Evaa / Code-Connect-POC

**Figma file:** [Code-Connect-POC (Dev Mode)](https://www.figma.com/design/ikzzK2FEEsZJG3TmhcJ1mA/Code-Connect-POC?node-id=0-1&p=f&m=dev)  
**Library:** Evaa Design System V.2 (Code Connect POC)

## Mappings (repo → Figma component set)

| Figma | Node ID | Code |
|-------|---------|------|
| Button | `22431:1308` | `src/components/Button/Button.tsx` |
| PatientDetailsBanner | `22431:1882` | `src/components/PatientDetailsBanner/PatientDetailsBanner.tsx` |
| DropDown | `22445:651` | `src/components/DropDown/DropDown.tsx` |
| Date Picker | `22431:2552` | `src/components/DatePicker/DatePicker.tsx` |
| CountBadge | `22431:2694` | `src/components/CountBadge/CountBadge.tsx` |
| _QuickSearchQueue/State3 | `22431:2709` | `src/components/QuickSearchQueue/QuickSearchQueue.tsx` |
| Simple Table | `22431:3751` | `src/components/Table/EncounterTable.tsx` |
| Left_QuickSearchPanel | `22431:2723` | `src/components/LeftQuickSearchPanel/LeftQuickSearchPanel.tsx` |
| EHRNavBar | `22431:3223` | `src/components/EHRNavBar/EHRNavBar.tsx` |

Templates: matching `*.figma.ts` next to each component (parserless `figma.code` format).

Machine-readable map: `design-system/evaa-code-connect-nodes.json`.

## Publish to Figma

From repo root (`poc1-asc`):

```powershell
$env:FIGMA_ACCESS_TOKEN = "<your-personal-access-token>"
npm run code-connect:publish
```

Or:

```powershell
npx figma connect publish -t $env:FIGMA_ACCESS_TOKEN
```

Dry-run (no token required for parse check):

```powershell
npx figma connect publish --dry-run
```

### MCP note

Figma MCP `send_code_connect_mappings` may return **Published component not found** when components live in a **team library**; the **CLI publish** (with token) is the supported path and uses the `// url=` lines in each `.figma.ts`.

### Prerequisites

- **First Insight** org access with Code Connect enabled
- **Dev or Full** seat on the team that owns Evaa library
- Library components **published** (Evaa Design System V.2)
