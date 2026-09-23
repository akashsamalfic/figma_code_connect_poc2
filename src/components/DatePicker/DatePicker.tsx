import type { InputHTMLAttributes } from 'react'
import { useId, useRef } from 'react'
import { figmaAssets } from '@/assets/figma'
import { useFieldInteractionState } from '@/hooks/useFieldInteractionState'
import { cssVars } from '@/tokens/cssVars'
import { spacing } from '@/tokens/spacing'
import { typography } from '@/tokens/typography'

export type DatePickerState = 'Default' | 'Hover' | 'Disabled' | 'Error' | 'Focus'
export type DatePickerType = 'Default' | 'Range'
export type DatePickerSize = 'Small' | 'Medium'
export type DatePickerLayout = 'stacked' | 'inline'

export type DatePickerProps = {
  placeholderText?: string
  titleText?: string
  fieldLabel?: string
  layout?: DatePickerLayout
  controlWidth?: number
  showTitle?: boolean
  isMandatory?: boolean
  state?: DatePickerState
  type?: DatePickerType
  size?: DatePickerSize
  /** ISO `YYYY-MM-DD` or empty string for “All”. */
  value?: string
  onValueChange?: (value: string) => void
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type' | 'value' | 'onChange'>

function borderForState(visual: DatePickerState): string {
  if (visual === 'Error') return cssVars.borderError
  if (visual === 'Focus' || visual === 'Hover') return cssVars.borderTeal
  return cssVars.borderDefault
}

function formatDisplayDate(iso: string): string {
  const [y, m, d] = iso.split('-')
  if (!y || !m || !d) return iso
  return `${m}/${d}/${y}`
}

/** rds_DatePicker-aligned surface for Encounter Hx filters. */
export function DatePicker({
  placeholderText = 'All',
  titleText = 'Label',
  fieldLabel,
  layout = 'stacked',
  controlWidth = 141,
  showTitle = false,
  isMandatory = false,
  state: stateProp,
  type = 'Default',
  size = 'Small',
  disabled,
  value = '',
  onValueChange,
  ...rest
}: DatePickerProps) {
  const height = size === 'Small' ? 27 : 32
  const isDisabled = disabled || stateProp === 'Disabled'
  const pickerRef = useRef<HTMLInputElement>(null)
  const pickerId = useId()
  const { visualState, interactionHandlers } = useFieldInteractionState(
    isDisabled,
    stateProp === 'Error',
  )
  const resolvedState = stateProp ?? visualState
  const showLabel = layout === 'stacked' && (showTitle || Boolean(fieldLabel))
  const hasValue = Boolean(value)
  const displayText = hasValue ? formatDisplayDate(value) : placeholderText

  return (
    <div
      data-state={resolvedState}
      data-type={type}
      data-layout={layout}
      style={{
        display: 'flex',
        flexDirection: layout === 'stacked' ? 'column' : 'row',
        gap: spacing.xs,
        width: layout === 'stacked' ? '100%' : controlWidth,
      }}
    >
      {showLabel && (
        <span style={typography.fs12Medium}>
          {fieldLabel ?? titleText}
          {isMandatory ? ' *' : ''}
        </span>
      )}
      <div
        {...interactionHandlers}
        style={{
          position: 'relative',
          height,
          width: controlWidth,
          borderRadius: spacing.inputRadius,
          border: `${spacing.stroke1}px solid ${borderForState(resolvedState)}`,
          background: cssVars.panelWhite,
          display: 'flex',
          alignItems: 'center',
          padding: `0 ${spacing.md}px`,
          gap: spacing.sm,
          opacity: isDisabled ? 0.6 : 1,
          boxSizing: 'border-box',
        }}
      >
        <span
          style={{
            ...typography.fs12Medium,
            flex: 1,
            color: hasValue ? cssVars.txtDefault : cssVars.placeholder,
          }}
        >
          {displayText}
        </span>
        <input
          ref={pickerRef}
          id={pickerId}
          type="date"
          value={value}
          disabled={isDisabled}
          aria-required={isMandatory}
          onChange={(e) => onValueChange?.(e.target.value)}
          style={{
            position: 'absolute',
            opacity: 0,
            width: 1,
            height: 1,
            pointerEvents: 'none',
          }}
          {...rest}
        />
        <button
          type="button"
          aria-label="Open calendar"
          disabled={isDisabled}
          onClick={() => pickerRef.current?.showPicker?.()}
          style={{
            border: 'none',
            background: 'transparent',
            padding: 0,
            cursor: isDisabled ? 'not-allowed' : 'pointer',
            display: 'inline-flex',
            flexShrink: 0,
          }}
        >
          <img src={figmaAssets.iconCalendar16} alt="" width={16} height={16} />
        </button>
      </div>
    </div>
  )
}
