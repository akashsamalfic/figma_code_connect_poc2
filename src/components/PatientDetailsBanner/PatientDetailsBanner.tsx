import type { HTMLAttributes } from 'react'
import { cssVars } from '@/tokens/cssVars'

export type PatientBannerColor = 'Teal' | 'Gray'
export type PatientBannerSize = 'Small' | 'Medium'
export type PatientBannerStyle = 'PatientDetails_WithoutOptionButton' | 'PatientDetails_WithOptionButton'
export type PatientBannerState = 'Default' | 'Hover'

export type PatientDetailsBannerProps = {
  headingText?: string
  subtitle1?: string
  subtitle1Value?: string
  subtitle2?: string
  subtitle2Value?: string
  subtitle3?: string
  subtitle3Value?: string
  showSubtitle1?: boolean
  showSubtitle2?: boolean
  showSubtitle3?: boolean
  showAge?: boolean
  ageValue?: string
  time?: boolean
  color?: PatientBannerColor
  size?: PatientBannerSize
  styleVariant?: PatientBannerStyle
  state?: PatientBannerState
} & HTMLAttributes<HTMLDivElement>

export function PatientDetailsBanner({
  headingText = 'Patient Name',
  subtitle1 = 'DOB',
  subtitle1Value = '',
  subtitle2 = 'ID:',
  subtitle2Value = '',
  subtitle3 = 'Prov:',
  subtitle3Value = '',
  showSubtitle1 = true,
  showSubtitle2 = true,
  showSubtitle3 = true,
  showAge = false,
  ageValue = '',
  color = 'Teal',
  size = 'Small',
  styleVariant = 'PatientDetails_WithoutOptionButton',
  state = 'Default',
  ...rest
}: PatientDetailsBannerProps) {
  const isTeal = color === 'Teal'
  return (
    <div
      data-color={color}
      data-size={size}
      data-style={styleVariant}
      data-state={state}
      style={{
        width: '100%',
        borderRadius: 13,
        border: `1px solid ${isTeal ? cssVars.borderTeal : cssVars.borderDefault}`,
        background: isTeal ? cssVars.bkgFocus : '#ffffff',
        padding: '5px 9px',
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        fontFamily: '"DM Sans", sans-serif',
      }}
      {...rest}
    >
      <div style={{ fontSize: size === 'Small' ? 16 : 18, fontWeight: 600, color: cssVars.txtDefault }}>
        {headingText}
      </div>
      {showSubtitle1 && (
        <div style={{ fontSize: 12, fontWeight: 500, color: cssVars.labelDefault }}>
          {subtitle1}{' '}
          <span style={{ color: cssVars.txtDefault }}>({subtitle1Value})</span>
          {showAge && ageValue ? (
            <>
              {' '}
              Age <span style={{ color: cssVars.txtDefault }}>({ageValue})</span>
            </>
          ) : null}
        </div>
      )}
      {(showSubtitle2 || showSubtitle3) && (
        <div style={{ display: 'flex', gap: 8, fontSize: 12, fontWeight: 500 }}>
          {showSubtitle2 && (
            <span>
              <span style={{ color: cssVars.labelDefault }}>{subtitle2}</span>{' '}
              <span style={{ color: cssVars.txtDefault }}>
                {subtitle2Value ? `(${subtitle2Value})` : subtitle2Value}
              </span>
            </span>
          )}
          {showSubtitle3 && (
            <span>
              <span style={{ color: cssVars.labelDefault }}>{subtitle3}</span>{' '}
              <span style={{ color: cssVars.txtDefault }}>
                {subtitle3Value ? `(${subtitle3Value})` : subtitle3Value}
              </span>
            </span>
          )}
        </div>
      )}
    </div>
  )
}
