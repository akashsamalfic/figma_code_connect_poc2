import type { SelectHTMLAttributes } from 'react'
import { figmaAssets } from '@/assets/figma'
import { useFieldInteractionState } from '@/hooks/useFieldInteractionState'
import { cssVars } from '@/tokens/cssVars'
import { spacing } from '@/tokens/spacing'
import { typography } from '@/tokens/typography'

export type DropDownState = 'Default' | 'Hover' | 'Disabled' | 'Error' | 'Focus'
export type DropDownSize = 'Small' | 'Medium'
export type DropDownLayout = 'stacked' | 'inline'

export type DropDownProps = {
  placeholderText?: string
  fieldLabel?: string
  layout?: DropDownLayout
  controlWidth?: number
  state?: DropDownState
  size?: DropDownSize
  hasInputIcon?: boolean
  mandatoryField?: boolean
  helperText?: boolean
  textAreaLabel?: boolean
  options?: readonly { value: string; label: string }[]
} & Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'>

function borderForState(visual: DropDownState): string {
  if (visual === 'Error') return cssVars.borderError
  if (visual === 'Focus' || visual === 'Hover') return cssVars.borderTeal
  return cssVars.borderDefault
}

export function DropDown({
  placeholderText = 'All',
  fieldLabel,
  layout = 'stacked',
  controlWidth = 218,
  state: stateProp,
  size = 'Small',
  hasInputIcon = true,
  mandatoryField = false,
  helperText = false,
  textAreaLabel = false,
  disabled,
  options,
  value,
  onChange,
  ...rest
}: DropDownProps) {
  const height = size === 'Small' ? 27 : 32
  const isDisabled = disabled || stateProp === 'Disabled'
  const { visualState, interactionHandlers } = useFieldInteractionState(
    isDisabled,
    stateProp === 'Error',
  )
  const resolvedState = stateProp ?? visualState
  const showLabel = layout === 'stacked' && (textAreaLabel || Boolean(fieldLabel))

  const selectOptions = options ?? [{ value: '', label: placeholderText }]

  return (
    <div
      data-state={resolvedState}
      data-size={size}
      data-layout={layout}
      style={{
        display: 'flex',
        flexDirection: layout === 'stacked' ? 'column' : 'row',
        gap: spacing.xs,
        width: layout === 'stacked' ? '100%' : controlWidth,
      }}
    >
      {showLabel && (
        <span style={typography.fs12Medium}>{fieldLabel ?? 'TextLabel'}</span>
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
          padding: `${spacing.xs}px ${spacing.md}px`,
          opacity: isDisabled ? 0.6 : 1,
          boxSizing: 'border-box',
        }}
      >
        <select
          disabled={isDisabled}
          value={value}
          onChange={onChange}
          aria-required={mandatoryField}
          style={{
            appearance: 'none',
            border: 'none',
            background: 'transparent',
            width: '100%',
            paddingRight: hasInputIcon ? 20 : 0,
            ...typography.fs12Regular,
            color: value ? cssVars.txtDefault : cssVars.placeholder,
            cursor: isDisabled ? 'not-allowed' : 'pointer',
          }}
          {...rest}
        >
          {selectOptions.map((opt) => (
            <option key={opt.value || '__placeholder'} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {hasInputIcon && (
          <img
            alt=""
            aria-hidden
            src={figmaAssets.iconCollapse16}
            width={16}
            height={16}
            style={{
              position: 'absolute',
              right: 11,
              top: '50%',
              transform: 'translateY(-50%)',
              pointerEvents: 'none',
            }}
          />
        )}
      </div>
      {helperText && (
        <span style={{ ...typography.fs12Regular, fontSize: 11 }}>Helper Text</span>
      )}
    </div>
  )
}
