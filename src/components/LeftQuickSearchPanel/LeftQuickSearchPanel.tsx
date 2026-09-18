import type { HTMLAttributes, ReactNode } from 'react'
import { cssVars } from '@/tokens/cssVars'

export type LeftQuickSearchPanelType = 'Card+ Queue' | 'Card'

export type LeftQuickSearchPanelProps = {
  type?: LeftQuickSearchPanelType
  title?: string
  children?: ReactNode
} & HTMLAttributes<HTMLElement>

export function LeftQuickSearchPanel({
  type = 'Card+ Queue',
  title = 'Encounter History',
  children,
  ...rest
}: LeftQuickSearchPanelProps) {
  return (
    <aside
      data-type={type}
      style={{
        width: 256,
        minHeight: 826,
        borderRadius: 12,
        borderRight: `0.8px solid ${cssVars.borderDefault}`,
        background: '#ffffff',
        boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
        padding: 8,
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        fontFamily: '"DM Sans", sans-serif',
      }}
      {...rest}
    >
      <header
        style={{
          borderBottom: `0.8px solid ${cssVars.borderDefault}`,
          padding: '8px 12px',
          fontWeight: 600,
          fontSize: 14,
          color: cssVars.labelDefault,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span>{title}</span>
        <span aria-hidden style={{ color: cssVars.placeholder, fontSize: 12 }}>
          ‹
        </span>
      </header>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8, padding: 8 }}>
        {children}
      </div>
    </aside>
  )
}
