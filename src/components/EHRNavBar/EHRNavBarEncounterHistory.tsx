import { figmaAssets } from '@/assets/figma'
import { cssVars } from '@/tokens/cssVars'
import { spacing } from '@/tokens/spacing'
import { typography } from '@/tokens/typography'

const primaryItems = [
  { id: 'home', label: 'Home', icon: figmaAssets.navIconHome, badge: '99+' },
  { id: 'patient', label: 'Patient', icon: figmaAssets.navIconPatient },
  { id: 'schedule', label: 'Schedule', icon: figmaAssets.navIconHome },
  { id: 'encounters', label: 'Encounters', icon: figmaAssets.navIconEncounters },
  { id: 'optical', label: 'Optical', icon: figmaAssets.navIconOptical },
  { id: 'billing', label: 'Billing', icon: figmaAssets.navIconBilling },
] as const

const secondaryItems = [
  { id: 'facesheet', label: 'Facesheet' },
  { id: 'flowsheet', label: 'Flowsheet' },
  { id: 'encounter-hx', label: 'Encounter Hx' },
  { id: 'encounter-details', label: 'Encounter Details' },
  { id: 'clinical-tasks', label: 'Clinical Tasks/Notes' },
] as const

export type EHRNavPrimaryId = (typeof primaryItems)[number]['id']
export type EHRNavSecondaryId = (typeof secondaryItems)[number]['id']

export type EHRNavBarEncounterHistoryProps = {
  activePrimary?: EHRNavPrimaryId
  activeSecondary?: EHRNavSecondaryId
  onPrimaryChange?: (id: EHRNavPrimaryId) => void
  onSecondaryChange?: (id: EHRNavSecondaryId) => void
}

function NavLogoMark() {
  return (
    <div style={{ position: 'relative', width: 104, height: 26, flexShrink: 0 }}>
      <img
        alt="MaximEyesAI"
        src={figmaAssets.navLogoPart1}
        style={{ position: 'absolute', inset: '0 15.54% 18.78% 0.11%', width: 'auto', height: 'auto' }}
      />
      <img
        alt=""
        aria-hidden
        src={figmaAssets.navLogoPart2}
        style={{ position: 'absolute', inset: '76.2% 42.7% -0.01% 33.57%' }}
      />
      <img
        alt=""
        aria-hidden
        src={figmaAssets.navLogoPart3}
        style={{ position: 'absolute', inset: '77.09% 68.08% 0.63% 0' }}
      />
      <img
        alt=""
        aria-hidden
        src={figmaAssets.navLogoPart4}
        style={{ position: 'absolute', inset: '14.98% 0 31.09% 84.39%' }}
      />
    </div>
  )
}

export function EHRNavBarEncounterHistoryPrimary({
  activePrimary = 'encounters',
  onPrimaryChange,
}: Pick<EHRNavBarEncounterHistoryProps, 'activePrimary' | 'onPrimaryChange'>) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: 48,
        padding: `${spacing.xs}px ${spacing.sm}px`,
        background: cssVars.navPrimary,
        gap: spacing.md,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 64, flex: 1, minWidth: 0 }}>
        <NavLogoMark />
        <nav style={{ display: 'flex', alignItems: 'center', gap: spacing.md, flexWrap: 'wrap' }}>
          {primaryItems.map((item) => {
            const active = item.id === activePrimary
            return (
              <button
                key={item.id}
                type="button"
                aria-current={active ? 'page' : undefined}
                onClick={() => onPrimaryChange?.(item.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: spacing.sm,
                  padding: `${spacing.sm}px ${spacing.sm}px`,
                  borderRadius: spacing.inputRadius,
                  border: 'none',
                  background: active ? cssVars.navSelection : cssVars.navPrimary,
                  ...typography.sbh3Regular,
                  color: cssVars.navLabel,
                  fontWeight: active ? 800 : 400,
                  cursor: 'pointer',
                }}
              >
                <img src={item.icon} alt="" width={16} height={16} />
                {item.label}
                {'badge' in item && item.badge ? (
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minWidth: 20,
                      height: 20,
                      padding: `0 ${spacing.xs}px`,
                      borderRadius: spacing.pillRadius,
                      background: cssVars.navActiveCount,
                      ...typography.fs10ExtraBold,
                    }}
                  >
                    {item.badge}
                  </span>
                ) : null}
              </button>
            )
          })}
        </nav>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: spacing.md, flexShrink: 0 }}>
        <button type="button" aria-label="Search" style={{ border: 'none', background: 'transparent', padding: 0 }}>
          <img src={figmaAssets.navSearch36} alt="" width={36} height={36} />
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: spacing.sm }}>
          <div style={{ position: 'relative', width: 25, height: 22 }}>
            <img
              src={figmaAssets.navIconMessage}
              alt=""
              width={16}
              height={16}
              style={{ position: 'absolute', left: 0, top: 6 }}
            />
            <span
              style={{
                position: 'absolute',
                right: 0,
                top: 0,
                width: 17,
                height: 17,
                borderRadius: 13,
                background: cssVars.iconError,
                color: cssVars.navLabel,
                fontSize: 12,
                fontWeight: 600,
                lineHeight: '17px',
                textAlign: 'center',
              }}
            >
              3
            </span>
          </div>
          <button type="button" aria-label="Help" style={{ border: 'none', background: 'transparent', padding: 0 }}>
            <img src={figmaAssets.navIconHelp} alt="" width={32} height={32} />
          </button>
          <button type="button" aria-label="Settings" style={{ border: 'none', background: 'transparent', padding: 0 }}>
            <img src={figmaAssets.navIconSettings} alt="" width={16} height={16} />
          </button>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: spacing.sm,
            height: 40,
            padding: `0 ${spacing.sm}px`,
            borderLeft: `${spacing.stroke1}px solid ${cssVars.navBorderDivider}`,
          }}
        >
          <span
            style={{
              width: 32,
              height: 32,
              borderRadius: spacing.pillRadius,
              background: cssVars.navSelection,
              color: cssVars.navLabel,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            AD
          </span>
          <img src={figmaAssets.navIconCaret} alt="" width={16} height={16} />
        </div>
      </div>
    </div>
  )
}

export function EHRNavBarEncounterHistorySecondary({
  activeSecondary = 'encounter-hx',
  onSecondaryChange,
}: Pick<EHRNavBarEncounterHistoryProps, 'activeSecondary' | 'onSecondaryChange'>) {
  return (
    <nav
      style={{
        display: 'flex',
        alignItems: 'stretch',
        gap: spacing.md,
        minHeight: 39,
        padding: `0 ${spacing.sm}px`,
        background: cssVars.navSecondary,
      }}
    >
      {secondaryItems.map((item) => {
        const active = item.id === activeSecondary
        return (
          <button
            key={item.id}
            type="button"
            aria-current={active ? 'page' : undefined}
            onClick={() => onSecondaryChange?.(item.id)}
            style={{
              border: 'none',
              background: cssVars.navSelection,
              ...typography.sbh3ExtraBold,
              color: cssVars.navLabel,
              padding: '8px 12px',
              height: active ? 36 : 39,
              cursor: 'pointer',
              borderBottom: active
                ? `${spacing.stroke3}px solid ${cssVars.caretWhite}`
                : `${spacing.stroke3}px solid transparent`,
              boxSizing: 'border-box',
            }}
          >
            {item.label}
          </button>
        )
      })}
    </nav>
  )
}
