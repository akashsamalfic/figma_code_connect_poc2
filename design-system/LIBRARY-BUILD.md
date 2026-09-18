# MaximEyes ASC — Figma library build

Build target (First Insight, MCP write verified): see `figma-file.json`.

| Link | URL |
|------|-----|
| File | [Code-Connect-POC (Copy)](https://www.figma.com/design/d3ax0NwPJeQ0IM7x2qfsWF/Code-Connect-POC--Copy-) |
| ASC page | [node 0-1](https://www.figma.com/design/d3ax0NwPJeQ0IM7x2qfsWF/Code-Connect-POC--Copy-?node-id=0-1) |
| App frame | [node 1-1956](https://www.figma.com/design/d3ax0NwPJeQ0IM7x2qfsWF/Code-Connect-POC--Copy-?node-id=1-1956) |

`fileKey`: `d3ax0NwPJeQ0IM7x2qfsWF`. MCP account: **akashs@first-insight.com**, Full on **First Insight**.

## Build order

| Step | Script | Output |
|------|--------|--------|
| 1 | `scripts/01-create-variables.js` | Variable collections + semantic colors, spacing, radius, stroke |
| 2 | `scripts/02-create-text-styles.js` | Local text styles (`Typography/*`) |
| 3 | `scripts/03-create-pages.js` | Cover, Foundations, Components pages |
| 4 | `scripts/04-create-button.js` | `Button` component set (BtnType × Size × State × Icon) |
| 5 | `scripts/05-create-atoms.js` | `PatientDetailsBanner`, `DropDown`, `CountBadge` |

## Naming (match existing ASC screen)

- **Variables:** `Colors/Functional/...`, `spacing/sm`, `XSmall/xs_8`, `Radius/L`, `2's/Full`
- **Text styles:** `Typography/Sbh3ExtraBold`, `Typography/fs-xm-12-Regular`, etc.
- **Variants:** `BtnType=PrimaryBtn, State=Default, Size=Small, Icon=None`
- **Pages:** `Cover` → `Foundations` → `---` → `Components / Button`, etc.

## v1 component scope (no new patterns)

Aligned to the Encounter Hx screen only:

- `Button` (PrimaryBtn / SecondaryBtn; Small + Medium; Default state; Icon=None first)
- `DropDown` (default + placeholder)
- `Date Picker` — document link to Raaghu; defer full build or import from **MaximEyes Components** library
- `PatientDetailsBanner` (Teal + Gray)
- `CountBadge`
- `_QuickSearchQueue/State3` (queue row)
- Keep existing `Table` symbol; rebind to local variables in a follow-up pass

## Subscribed libraries

The POC file already uses team libraries **MaximEyes Components** and **Encounter Components**. This local library **mirrors tokens and core atoms** for Code Connect in-file; prefer **instances** from team libraries for complex organisms (`EHRNavBar`, `Left_QuickSearchPanel`) unless you own and publish from those libraries.

## State ledger

Update `../design-system-state.json` with returned IDs after each script.
