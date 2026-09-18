import type { SelectHTMLAttributes } from 'react'
import { cssVars } from '@/tokens/cssVars'

export type DropDownState = 'Default' | 'Hover' | 'Disabled' | 'Error'
export type DropDownSize = 'Small' | 'Medium'

export type DropDownProps = {
  placeholderText?: string
  fieldLabel?: string
  state?: DropDownState
  size?: DropDownSize
  hasInputIcon?: boolean
  mandatoryField?: boolean
  helperText?: boolean
  textAreaLabel?: boolean
} & Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'>

export function DropDown({
  placeholderText = 'All',
  fieldLabel,
  state = 'Default',
  size = 'Small',
  hasInputIcon = true,
  mandatoryField = false,
  helperText = false,
  textAreaLabel = false,
  disabled,
  ...rest
}: DropDownProps) {
  const showLabel = textAreaLabel || Boolean(fieldLabel)
  const height = size === 'Small' ? 27 : 32
  const isDisabled = disabled || state === 'Disabled'

  return (
    <div
      data-state={state}
      data-size={size}
      style={{ display: 'flex', flexDirection: 'column', gap: 4, width: '100%' }}
    >
      {showLabel && (
        <span style={{ fontSize: 12, fontWeight: 500, color: cssVars.labelDefault }}>
          {fieldLabel ?? 'TextLabel'}
        </span>
      )}
      <div
        style={{
          position: 'relative',
          height,
          borderRadius: 13,
          border: `1px solid ${state === 'Error' ? '#e73d36' : cssVars.borderDefault}`,
          background: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          padding: '4px 12px',
          opacity: isDisabled ? 0.6 : 1,
        }}
      >
        <select
          disabled={isDisabled}
          defaultValue=""
          aria-required={mandatoryField}
          style={{
            appearance: 'none',
            border: 'none',
            background: 'transparent',
            width: '100%',
            fontFamily: '"DM Sans", sans-serif',
            fontSize: 12,
            color: cssVars.placeholder,
          }}
          {...rest}
        >
          <option value="">{placeholderText}</option>
        </select>
        {hasInputIcon && (
          <span
            aria-hidden
            style={{
              position: 'absolute',
              right: 11,
              width: 16,
              height: 16,
              pointerEvents: 'none',
              color: cssVars.labelDefault,
            }}
          >
            ▾
          </span>
        )}
      </div>
      {helperText && (
        <span style={{ fontSize: 11, color: cssVars.placeholder }}>Helper Text</span>
      )}
    </div>
  )
}
