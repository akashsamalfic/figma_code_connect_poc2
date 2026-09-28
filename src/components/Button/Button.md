# Button

Primary design-system button (CSS module `Button.css`, DM Sans via token).

## Import

```tsx
import { Button, type ButtonProps } from 'fic-designsystem-components';
```

## Props

Extends `React.ButtonHTMLAttributes<HTMLButtonElement>`.

| Prop | Type | Default | Notes |
|------|------|---------|--------|
| `variant` | `'primary' \| 'secondary' \| 'brand' \| 'success' \| 'danger'` | `'primary'` | Maps to `button--{variant}` |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | |
| `isLoading` | `boolean` | `false` | Shows spinner; hides icons; disables button |
| `leftIcon` / `rightIcon` | `React.ReactNode` | — | String values resolve against the `Icons` map (SVG string or component) |
| `asChild` | `boolean` | — | Reserved (Radix slot); not used in current implementation |

Native `disabled` is combined with loading (`disabled || isLoading`).

## Example

```tsx
<Button variant="primary" size="md" onClick={save}>
  Save
</Button>

<Button variant="secondary" leftIcon="Plus" isLoading={saving}>
  Save
</Button>
```

## Related

- `SimpleTable.md` / `Table.md` — header CTA and row actions use `Button`
- Agent skill: `.cursor/skills/Button.skill.md`
