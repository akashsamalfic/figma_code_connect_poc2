import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react'
import { useState } from 'react'
import { cssVars } from '@/tokens/cssVars'
import { spacing } from '@/tokens/spacing'
import { typography } from '@/tokens/typography'

export type BtnType = 'PrimaryBtn' | 'SecondaryBtn'
export type BtnState = 'Default' | 'Hover' | 'Disabled' | 'Active'
export type BtnSize = 'Small' | 'Medium'
export type BtnIcon = 'None' | 'Leading' | 'Trailing' | 'Alone'

export type ButtonProps = {
  btnType?: BtnType
  state?: BtnState
  size?: BtnSize
  icon?: BtnIcon
  label?: string
  iconNode?: ReactNode
  pressed?: boolean
  children?: ReactNode
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>

/** Icons must keep their intrinsic size inside the fixed-width icon-only button. */
const iconSlot: CSSProperties = { display: 'inline-flex', flexShrink: 0 }

const sizeStyles: Record<BtnSize, { height: number; paddingX: number; fontSize: number }> = {
  Small: { height: 35, paddingX: 12, fontSize: 14 },
  Medium: { height: 40, paddingX: 16, fontSize: 14 },
}

function resolveColors(
  btnType: BtnType,
  isDisabled: boolean,
  hovered: boolean,
  pressed: boolean,
): CSSProperties {
  const isPrimary = btnType === 'PrimaryBtn'
  if (isDisabled) {
    return {
      background: isPrimary ? cssVars.fillDisabled : cssVars.panelWhite,
      color: isPrimary ? cssVars.primaryBtnLabel : cssVars.secondaryBtnLabel,
      border: isPrimary ? 'none' : `${spacing.stroke1}px solid ${cssVars.borderDefault}`,
    }
  }
  if (isPrimary) {
    return {
      background: cssVars.primaryBtnBkg,
      filter: pressed ? 'brightness(0.92)' : hovered ? 'brightness(1.05)' : undefined,
      color: cssVars.primaryBtnLabel,
      border: 'none',
    }
  }
  return {
    background: pressed ? cssVars.bkgFocus : cssVars.panelWhite,
    color: cssVars.secondaryBtnLabel,
    border: `${spacing.stroke1}px solid ${cssVars.secondaryBtnBorder}`,
  }
}

export function Button({
  btnType = 'PrimaryBtn',
  state = 'Default',
  size = 'Medium',
  icon = 'None',
  label,
  iconNode,
  pressed: pressedProp,
  children,
  disabled,
  style,
  onMouseEnter,
  onMouseLeave,
  onMouseDown,
  onMouseUp,
  ...rest
}: ButtonProps) {
  const isPrimary = btnType === 'PrimaryBtn'
  const dims = sizeStyles[size]
  const isDisabled = disabled || state === 'Disabled'
  const isIconAlone = icon === 'Alone'
  const textContent = children ?? (isIconAlone ? null : label ?? 'Label')
  const [hovered, setHovered] = useState(false)
  const [pressedLocal, setPressedLocal] = useState(false)
  const pressed = pressedProp ?? pressedLocal
  const colors = resolveColors(btnType, isDisabled, hovered, pressed)

  return (
    <button
      type="button"
      disabled={isDisabled}
      data-btn-type={btnType}
      data-size={size}
      data-icon={icon}
      aria-label={isIconAlone ? label : undefined}
      aria-pressed={pressedProp !== undefined ? pressed : undefined}
      onMouseEnter={(e) => {
        if (!isDisabled) setHovered(true)
        onMouseEnter?.(e)
      }}
      onMouseLeave={(e) => {
        setHovered(false)
        setPressedLocal(false)
        onMouseLeave?.(e)
      }}
      onMouseDown={(e) => {
        if (!isDisabled) setPressedLocal(true)
        onMouseDown?.(e)
      }}
      onMouseUp={(e) => {
        setPressedLocal(false)
        onMouseUp?.(e)
      }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: spacing.xs,
        boxSizing: 'border-box',
        height: dims.height,
        width: isIconAlone ? dims.height : undefined,
        minWidth: isIconAlone ? dims.height : undefined,
        paddingLeft: isIconAlone ? 0 : dims.paddingX,
        paddingRight: isIconAlone ? 0 : dims.paddingX,
        borderRadius: spacing.pillRadius,
        ...colors,
        ...typography.sbh3ExtraBold,
        fontSize: dims.fontSize,
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        opacity: isDisabled ? 0.6 : 1,
        transition: 'background 0.12s ease, border-color 0.12s ease',
        ...style,
      }}
      {...rest}
    >
      {icon === 'Leading' && <span style={iconSlot}>{iconNode}</span>}
      {textContent}
      {icon === 'Trailing' && <span style={iconSlot}>{iconNode}</span>}
      {isIconAlone &&
        (iconNode ? <span style={iconSlot}>{iconNode}</span> : textContent)}
    </button>
  )
}
