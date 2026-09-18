import type { HTMLAttributes, ReactNode } from 'react'
import { cssVars } from '@/tokens/cssVars'
import {
  EHRNavBarEncounterHistoryPrimary,
  EHRNavBarEncounterHistorySecondary,
} from '@/components/EHRNavBar/EHRNavBarEncounterHistory'

export type EHRNavBarPreset = 'encounter-history' | 'custom'

export type EHRNavBarProps = {
  preset?: EHRNavBarPreset
  primaryNav?: ReactNode
  secondaryNav?: ReactNode
} & HTMLAttributes<HTMLElement>

export function EHRNavBar({
  preset = 'custom',
  primaryNav,
  secondaryNav,
  ...rest
}: EHRNavBarProps) {
  const resolvedPrimary =
    preset === 'encounter-history' ? <EHRNavBarEncounterHistoryPrimary /> : primaryNav
  const resolvedSecondary =
    preset === 'encounter-history' ? <EHRNavBarEncounterHistorySecondary /> : secondaryNav

  return (
    <header
      style={{
        width: '100%',
        background: cssVars.navPrimary,
        color: cssVars.panelWhite,
        fontFamily: '"DM Sans", sans-serif',
      }}
      {...rest}
    >
      <div style={{ minHeight: 48 }}>{resolvedPrimary}</div>
      <div style={{ background: cssVars.navSecondary, padding: '0 8px' }}>{resolvedSecondary}</div>
    </header>
  )
}
