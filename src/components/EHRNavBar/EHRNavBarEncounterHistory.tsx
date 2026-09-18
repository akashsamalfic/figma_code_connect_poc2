import { cssVars } from '@/tokens/cssVars'
import { CountBadge } from '@/components/CountBadge/CountBadge'

const navFont = '"DM Sans", sans-serif'

const primaryItems = [
  { label: 'Home', badge: '99+' },
  { label: 'Patient' },
  { label: 'Schedule' },
  { label: 'Encounters', active: true },
  { label: 'Optical' },
  { label: 'Billing' },
] as const

const secondaryItems = [
  { label: 'Facesheet' },
  { label: 'Flowsheet' },
  { label: 'Encounter Hx', active: true },
  { label: 'Encounter Details' },
  { label: 'Clinical Tasks/Notes' },
] as const

function NavIconPlaceholder({ label }: { label: string }) {
  return (
    <span
      aria-hidden
      style={{
        width: 16,
        height: 16,
        borderRadius: 4,
        background: 'rgba(255,255,255,0.25)',
        display: 'inline-block',
      }}
      title={label}
    />
  )
}

function PrimaryNavItem({
  label,
  active,
  badge,
}: {
  label: string
  active?: boolean
  badge?: string
}) {
  return (
    <button
      type="button"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: '6px 12px',
        borderRadius: 8,
        border: 'none',
        background: active ? cssVars.navSelection : 'transparent',
        color: cssVars.panelWhite,
        fontFamily: navFont,
        fontSize: 14,
        fontWeight: active ? 600 : 500,
        cursor: 'pointer',
        position: 'relative',
      }}
    >
      <NavIconPlaceholder label={label} />
      {label}
      {badge ? (
        <span
          style={{
            marginLeft: 2,
            padding: '0 6px',
            borderRadius: 999,
            background: cssVars.alertRed,
            color: cssVars.panelWhite,
            fontSize: 10,
            fontWeight: 700,
            lineHeight: '16px',
          }}
        >
          {badge}
        </span>
      ) : null}
    </button>
  )
}

function SecondaryNavItem({ label, active }: { label: string; active?: boolean }) {
  return (
    <button
      type="button"
      style={{
        border: 'none',
        background: 'transparent',
        color: cssVars.panelWhite,
        fontFamily: navFont,
        fontSize: 14,
        fontWeight: active ? 600 : 500,
        padding: '10px 14px',
        cursor: 'pointer',
        borderBottom: active ? `3px solid ${cssVars.iconSuccess}` : '3px solid transparent',
        marginBottom: active ? 0 : 0,
      }}
    >
      {label}
    </button>
  )
}

export function EHRNavBarEncounterHistoryPrimary() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: 48,
        padding: '4px 8px',
        gap: 16,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 24, flex: 1 }}>
        <span
          style={{
            fontFamily: navFont,
            fontSize: 18,
            fontWeight: 800,
            color: cssVars.panelWhite,
            letterSpacing: '-0.02em',
          }}
        >
          MaximEyesAI
        </span>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 4, flexWrap: 'wrap' }}>
          {primaryItems.map((item) => (
            <PrimaryNavItem
              key={item.label}
              label={item.label}
              active={'active' in item ? item.active : false}
              badge={'badge' in item ? item.badge : undefined}
            />
          ))}
        </nav>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <button
          type="button"
          aria-label="Search"
          style={{
            width: 36,
            height: 36,
            borderRadius: 999,
            border: 'none',
            background: cssVars.panelWhite,
            cursor: 'pointer',
          }}
        />
        <button
          type="button"
          aria-label="Notifications"
          style={{
            position: 'relative',
            width: 32,
            height: 32,
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
          }}
        >
          <NavIconPlaceholder label="Notifications" />
          <span style={{ position: 'absolute', top: -2, right: -4 }}>
            <CountBadge count={3} />
          </span>
        </button>
        <button type="button" aria-label="Help" style={{ border: 'none', background: 'transparent' }}>
          <NavIconPlaceholder label="Help" />
        </button>
        <button type="button" aria-label="Settings" style={{ border: 'none', background: 'transparent' }}>
          <NavIconPlaceholder label="Settings" />
        </button>
        <span
          style={{
            width: 36,
            height: 36,
            borderRadius: 999,
            background: cssVars.primaryBtnBkg,
            color: cssVars.panelWhite,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: navFont,
            fontSize: 14,
            fontWeight: 700,
          }}
        >
          AD
        </span>
      </div>
    </div>
  )
}

export function EHRNavBarEncounterHistorySecondary() {
  return (
    <nav style={{ display: 'flex', alignItems: 'stretch', gap: 4, minHeight: 40 }}>
      {secondaryItems.map((item) => (
        <SecondaryNavItem
          key={item.label}
          label={item.label}
          active={'active' in item ? item.active : false}
        />
      ))}
    </nav>
  )
}
