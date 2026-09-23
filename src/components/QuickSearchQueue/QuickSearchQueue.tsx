import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { useState } from 'react'
import { CountBadge } from '@/components/CountBadge/CountBadge'
import { cssVars } from '@/tokens/cssVars'
import { spacing } from '@/tokens/spacing'
import { typography } from '@/tokens/typography'

export type QuickSearchQueueProps = {
  queueLabel?: string
  count?: number | string
  badge?: ReactNode
  selected?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export function QuickSearchQueue({
  queueLabel = 'Provider Name',
  count = 0,
  badge,
  selected = false,
  ...rest
}: QuickSearchQueueProps) {
  const [hovered, setHovered] = useState(false)
  const borderColor =
    selected || hovered ? cssVars.borderTeal : cssVars.borderLight

  return (
    <button
      type="button"
      aria-pressed={selected}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: '100%',
        boxSizing: 'border-box',
        minHeight: 32,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '6px 10px',
        borderRadius: spacing.sm,
        border: `${spacing.strokeXsm}px solid ${borderColor}`,
        background: selected ? cssVars.bkgFocus : cssVars.panelWhite,
        ...typography.fs12Medium,
        color: cssVars.navIconGray700,
        cursor: 'pointer',
        textAlign: 'left',
      }}
      {...rest}
    >
      <span>{queueLabel}</span>
      {badge ?? <CountBadge count={count} />}
    </button>
  )
}
