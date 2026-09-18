import type { HTMLAttributes } from 'react'
import { cssVars } from '@/tokens/cssVars'

export type CountBadgeType = 'Default' | 'Active'

export type CountBadgeProps = {
  count?: number | string
  type?: CountBadgeType
} & HTMLAttributes<HTMLSpanElement>

export function CountBadge({ count = 0, type = 'Default', children, ...rest }: CountBadgeProps) {
  const value = children ?? count
  return (
    <span
      data-type={type}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 18,
        height: 18,
        borderRadius: 999,
        background: cssVars.statusBadgeBg,
        color: cssVars.statusBadgeText,
        fontFamily: '"DM Sans", sans-serif',
        fontSize: 12,
        fontWeight: 500,
        lineHeight: 1,
      }}
      {...rest}
    >
      {value}
    </span>
  )
}
