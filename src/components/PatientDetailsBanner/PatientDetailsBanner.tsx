import type { HTMLAttributes } from 'react'
import { cssVars } from '@/tokens/cssVars'
import { spacing } from '@/tokens/spacing'
import { typography } from '@/tokens/typography'

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
  /** Figma panel format: `05/15/1985(38)` appended to DOB value. */
  dobAgeSuffix?: string
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
  dobAgeSuffix,
  color = 'Teal',
  size = 'Small',
  styleVariant = 'PatientDetails_WithoutOptionButton',
  state = 'Default',
  ...rest
}: PatientDetailsBannerProps) {
  const isTeal = color === 'Teal'
  const isHovered = state === 'Hover'

  return (
    <div
      data-color={color}
      data-size={size}
      data-style={styleVariant}
      data-state={state}
      style={{
        width: '100%',
        boxSizing: 'border-box',
        borderRadius: spacing.inputRadius,
        border: `${spacing.stroke1}px solid ${isTeal ? cssVars.borderTeal : cssVars.borderDefault}`,
        background: isTeal ? cssVars.bkgFocus : cssVars.panelWhite,
        padding: 9,
        display: 'flex',
        flexDirection: 'column',
        gap: spacing.xs,
        boxShadow: isHovered ? `0 0 0 1px ${cssVars.borderTeal}` : undefined,
      }}
      {...rest}
    >
      <div style={size === 'Small' ? typography.sbh1ExtraBold : { ...typography.sbh1ExtraBold, fontSize: 20 }}>
        {headingText}
      </div>
      {showSubtitle1 && (
        <div style={{ display: 'flex', gap: spacing.xs, ...typography.fs12Medium }}>
          <span style={{ color: cssVars.labelDefault }}>{subtitle1}</span>
          <span style={{ color: cssVars.txtDefault }}>
            {subtitle1Value}
            {dobAgeSuffix ?? ''}
          </span>
        </div>
      )}
      {(showSubtitle2 || showSubtitle3) && (
        <div style={{ display: 'flex', gap: spacing.sm, ...typography.fs12Medium }}>
          {showSubtitle2 && (
            <span style={{ display: 'inline-flex', gap: spacing.xs }}>
              <span style={{ color: cssVars.labelDefault }}>{subtitle2}</span>
              <span style={{ color: cssVars.txtDefault }}>{subtitle2Value}</span>
            </span>
          )}
          {showSubtitle3 && (
            <span style={{ display: 'inline-flex', gap: spacing.xs }}>
              <span style={{ color: cssVars.labelDefault }}>{subtitle3}</span>
              <span style={{ ...typography.fs12Regular, color: cssVars.txtDefault, fontWeight: 400 }}>
                {subtitle3Value}
              </span>
            </span>
          )}
        </div>
      )}
    </div>
  )
}
