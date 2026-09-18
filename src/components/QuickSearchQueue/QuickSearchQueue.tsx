import type { HTMLAttributes, ReactNode } from 'react'
import { cssVars } from '@/tokens/cssVars'
import { CountBadge } from '@/components/CountBadge/CountBadge'

export type QuickSearchQueueProps = {
  queueLabel?: string
  count?: number | string
  badge?: ReactNode
} & HTMLAttributes<HTMLDivElement>

export function QuickSearchQueue({
  queueLabel = 'Provider Name',
  count = 0,
  badge,
  ...rest
}: QuickSearchQueueProps) {
  return (
    <div
      style={{
        width: 232,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '6px 10px',
        borderRadius: 8,
        border: `0.533px solid ${cssVars.borderDefault}`,
        background: '#ffffff',
        fontFamily: '"DM Sans", sans-serif',
        fontSize: 12,
        fontWeight: 500,
        color: cssVars.labelDefault,
      }}
      {...rest}
    >
      <span>{queueLabel}</span>
      {badge ?? <CountBadge count={count} />}
    </div>
  )
}
