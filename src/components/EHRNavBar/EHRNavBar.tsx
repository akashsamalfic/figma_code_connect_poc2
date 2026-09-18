import type { HTMLAttributes, ReactNode } from 'react'
import { cssVars } from '@/tokens/cssVars'
import {
  EHRNavBarEncounterHistoryPrimary,
  EHRNavBarEncounterHistorySecondary,
  type EHRNavBarEncounterHistoryProps,
} from '@/components/EHRNavBar/EHRNavBarEncounterHistory'

export type EHRNavBarPreset = 'encounter-history' | 'custom'

export type EHRNavBarProps = {
  preset?: EHRNavBarPreset
  primaryNav?: ReactNode
  secondaryNav?: ReactNode
  encounterHistoryNav?: EHRNavBarEncounterHistoryProps
} & HTMLAttributes<HTMLElement>

export function EHRNavBar({
  preset = 'custom',
  primaryNav,
  secondaryNav,
  encounterHistoryNav,
  ...rest
}: EHRNavBarProps) {
  const resolvedPrimary =
    preset === 'encounter-history' ? (
      <EHRNavBarEncounterHistoryPrimary {...encounterHistoryNav} />
    ) : (
      primaryNav
    )
  const resolvedSecondary =
    preset === 'encounter-history' ? (
      <EHRNavBarEncounterHistorySecondary {...encounterHistoryNav} />
    ) : (
      secondaryNav
    )

  return (
    <header
      style={{
        width: '100%',
        background: cssVars.navPrimary,
        color: cssVars.navLabel,
        fontFamily: '"DM Sans", sans-serif',
      }}
      {...rest}
    >
      {resolvedPrimary}
      {preset === 'encounter-history' ? resolvedSecondary : (
        <div style={{ background: cssVars.navSecondary, padding: '0 8px' }}>{resolvedSecondary}</div>
      )}
    </header>
  )
}
