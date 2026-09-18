import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cssVars } from '@/tokens/cssVars'

export type BtnType = 'PrimaryBtn' | 'SecondaryBtn'
export type BtnState = 'Default' | 'Hover' | 'Disabled'
export type BtnSize = 'Small' | 'Medium'
export type BtnIcon = 'None' | 'Leading' | 'Trailing' | 'Alone'

export type ButtonProps = {
  btnType?: BtnType
  state?: BtnState
  size?: BtnSize
  icon?: BtnIcon
  label?: string
  /** Shown when `icon` is `Alone`, or as leading/trailing adornment. */
  iconNode?: ReactNode
  children?: ReactNode
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>

const sizeStyles: Record<BtnSize, { height: number; paddingX: number; fontSize: number }> = {
  Small: { height: 35, paddingX: 12, fontSize: 14 },
  Medium: { height: 40, paddingX: 16, fontSize: 14 },
}

export function Button({
  btnType = 'PrimaryBtn',
  state = 'Default',
  size = 'Medium',
  icon = 'None',
  label,
  iconNode,
  children,
  disabled,
  style,
  ...rest
}: ButtonProps) {
  const isPrimary = btnType === 'PrimaryBtn'
  const dims = sizeStyles[size]
  const isDisabled = disabled || state === 'Disabled'
  const isIconAlone = icon === 'Alone'
  const textContent = children ?? (isIconAlone ? null : label ?? 'Label')

  return (
    <button
      type="button"
      disabled={isDisabled}
      data-btn-type={btnType}
      data-size={size}
      data-icon={icon}
      aria-label={isIconAlone ? label : undefined}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
        height: dims.height,
        width: isIconAlone ? dims.height : undefined,
        minWidth: isIconAlone ? dims.height : undefined,
        paddingLeft: isIconAlone ? 0 : dims.paddingX,
        paddingRight: isIconAlone ? 0 : dims.paddingX,
        borderRadius: 999,
        border: isPrimary ? 'none' : `1px solid ${cssVars.secondaryBtnBorder}`,
        background: isPrimary ? cssVars.primaryBtnBkg : '#ffffff',
        color: isPrimary ? cssVars.primaryBtnLabel : cssVars.secondaryBtnLabel,
        fontFamily: '"DM Sans", sans-serif',
        fontWeight: 800,
        fontSize: dims.fontSize,
        lineHeight: 1.455,
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        opacity: isDisabled ? 0.6 : 1,
        ...style,
      }}
      {...rest}
    >
      {icon === 'Leading' && iconNode}
      {textContent}
      {icon === 'Trailing' && iconNode}
      {isIconAlone && (iconNode ?? textContent)}
    </button>
  )
}
