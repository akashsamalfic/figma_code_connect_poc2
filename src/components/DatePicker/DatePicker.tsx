import type { InputHTMLAttributes } from 'react'
import { cssVars } from '@/tokens/cssVars'

export type DatePickerState = 'Default' | 'Hover' | 'Disabled' | 'Error'
export type DatePickerType = 'Default' | 'Range'
export type DatePickerSize = 'Small' | 'Medium'

export type DatePickerProps = {
  placeholderText?: string
  titleText?: string
  fieldLabel?: string
  showTitle?: boolean
  isMandatory?: boolean
  state?: DatePickerState
  type?: DatePickerType
  size?: DatePickerSize
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'>

/** rds_DatePicker-aligned surface for Encounter Hx filters. */
export function DatePicker({
  placeholderText = 'All',
  titleText = 'Label',
  fieldLabel,
  showTitle = false,
  isMandatory = false,
  state = 'Default',
  type = 'Default',
  size = 'Small',
  disabled,
  ...rest
}: DatePickerProps) {
  const height = size === 'Small' ? 27 : 32
  const isDisabled = disabled || state === 'Disabled'

  return (
    <label
      data-state={state}
      data-type={type}
      style={{ display: 'flex', flexDirection: 'column', gap: 4, width: '100%' }}
    >
      {(showTitle || fieldLabel) && (
        <span style={{ fontSize: 12, fontWeight: 500, color: cssVars.labelDefault }}>
          {fieldLabel ?? titleText}
          {isMandatory ? ' *' : ''}
        </span>
      )}
      <div
        style={{
          height,
          borderRadius: 13,
          border: `1px solid ${cssVars.borderDefault}`,
          background: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          padding: '0 12px',
          gap: 8,
          opacity: isDisabled ? 0.6 : 1,
        }}
      >
        <input
          type="text"
          placeholder={placeholderText}
          disabled={isDisabled}
          aria-required={isMandatory}
          style={{
            border: 'none',
            background: 'transparent',
            flex: 1,
            fontFamily: '"DM Sans", sans-serif',
            fontSize: 14,
            fontWeight: 500,
            color: cssVars.borderDefault,
          }}
          {...rest}
        />
        <span aria-hidden style={{ width: 16, height: 16 }}>
          📅
        </span>
      </div>
    </label>
  )
}
