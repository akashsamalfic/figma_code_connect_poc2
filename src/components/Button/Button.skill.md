---
name: button
description: >-
  Implements Figma text buttons (primary, secondary, brand, success) with sm/md/lg sizes and Icons map support.
  Use when adding CTAs, table actions, modals, or any clickable control — prefer Button over raw HTML button.
disable-model-invocation: true
---

# Button

## When to use

- Primary/secondary actions, header CTAs (e.g. Table “Create New Token”), modal actions.
- Table row actions via `SimpleTableActionButton` (wraps `Button`).

## Source files

| File | Path |
|------|------|
| Component | `src/components/Button/Button.tsx` |
| Styles | `src/components/Button/Button.css` |
| Icons | `src/components/Icons/Icons.tsx` |

## Import

```tsx
import { Button, type ButtonProps } from 'fic-designsystem-components';
```

## API

| Prop | Values | Default |
|------|--------|---------|
| `variant` | `primary` \| `secondary` \| `brand` \| `success` | `primary` |
| `size` | `sm` \| `md` \| `lg` | `md` |
| `leftIcon` / `rightIcon` | React node or **icon name** string from `Icons` | — |
| `isLoading` | boolean | `false` |

Icon names: pass string keys like `"Colored_Edit"`, `"Cross"` — resolved via `Icons` map.

## Implementation rules

1. Styling lives in `Button.css` (BEM: `button`, `button--{variant}`, `button--{size}`) — not Tailwind for core look.
2. Use design tokens (`var(--Colors-Buttons-...`, `--FontFamily-Family`).
3. For table PAY variant, use `SimpleTableActionButton` with `emphasis` — do not fork Button styles in table CSS except overrides in `SimpleTable.css`.

## Figma reference

Check `Design System- Figma Make Component code files/completed/` for button-related exports.

## Related

- `SimpleTable.skill.md` — row action buttons
- `Table.skill.md` — header primary CTA
