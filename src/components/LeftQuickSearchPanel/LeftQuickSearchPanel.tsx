import type { HTMLAttributes, ReactNode } from 'react'
import { figmaAssets } from '@/assets/figma'
import { cssVars } from '@/tokens/cssVars'
import { spacing } from '@/tokens/spacing'
import { typography } from '@/tokens/typography'

export type LeftQuickSearchPanelType = 'Card+ Queue' | 'Card'

export type LeftQuickSearchPanelProps = {
  type?: LeftQuickSearchPanelType
  title?: string
  collapsed?: boolean
  onToggleCollapse?: () => void
  children?: ReactNode
} & HTMLAttributes<HTMLElement>

export function LeftQuickSearchPanel({
  type = 'Card+ Queue',
  title = 'Encounter History',
  collapsed = false,
  onToggleCollapse,
  children,
  ...rest
}: LeftQuickSearchPanelProps) {
  if (collapsed) {
    return (
      <aside
        data-type={type}
        data-collapsed
        style={{
          width: 48,
          minHeight: 826,
          borderRadius: spacing.panelRadius,
          borderRight: `${spacing.strokeXsm}px solid ${cssVars.borderDefault}`,
          background: cssVars.panelWhite,
          boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
          padding: spacing.sm,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        {...rest}
      >
        <button
          type="button"
          aria-label="Expand Encounter History panel"
          onClick={onToggleCollapse}
          style={{
            width: 25,
            height: 25,
            borderRadius: 30,
            border: `${spacing.strokeXsm}px solid ${cssVars.borderDefault}`,
            background: cssVars.panelWhite,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            padding: 10,
            boxSizing: 'border-box',
          }}
        >
          <img src={figmaAssets.iconPanelBack16} alt="" width={16} height={16} />
        </button>
      </aside>
    )
  }

  return (
    <aside
      data-type={type}
      style={{
        width: 256,
        minHeight: 826,
        borderRadius: spacing.panelRadius,
        borderRight: `${spacing.strokeXsm}px solid ${cssVars.borderDefault}`,
        background: cssVars.panelWhite,
        boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
        padding: spacing.sm,
        display: 'flex',
        flexDirection: 'column',
        gap: spacing.xs,
        fontFamily: typography.sbh3Regular.fontFamily,
        boxSizing: 'border-box',
      }}
      {...rest}
    >
      <header
        style={{
          borderBottom: `${spacing.strokeXsm}px solid ${cssVars.borderDefault}`,
          padding: '1px 12px 0.8px',
          minHeight: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            maxWidth: 215,
          }}
        >
          <span style={typography.sbh3SemiBold}>{title}</span>
          <button
            type="button"
            aria-label="Collapse Encounter History panel"
            onClick={onToggleCollapse}
            style={{
              width: 25,
              height: 25,
              borderRadius: 30,
              border: `${spacing.strokeXsm}px solid ${cssVars.borderDefault}`,
              background: cssVars.panelWhite,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              padding: 10,
              boxSizing: 'border-box',
            }}
          >
            <img src={figmaAssets.iconPanelBack16} alt="" width={16} height={16} />
          </button>
        </div>
      </header>
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: spacing.sm,
          padding: spacing.sm,
        }}
      >
        {children}
      </div>
    </aside>
  )
}
