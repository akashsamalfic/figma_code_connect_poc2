import type { ReactNode } from 'react'
import { typography } from '@/tokens/typography'
import { spacing } from '@/tokens/spacing'

export type FilterFieldRowProps = {
  label: string
  children: ReactNode
}

/** Figma `_Menu Option` row: 70px label + control, gap 12. */
export function FilterFieldRow({ label, children }: FilterFieldRowProps) {
  return (
    <div
      style={{
        display: 'flex',
        gap: spacing.md,
        alignItems: 'flex-start',
        width: '100%',
      }}
    >
      <span
        style={{
          ...typography.sbh3Regular,
          width: 70,
          flexShrink: 0,
          paddingTop: 4,
        }}
      >
        {label}
      </span>
      <div style={{ flexShrink: 0 }}>{children}</div>
    </div>
  )
}
