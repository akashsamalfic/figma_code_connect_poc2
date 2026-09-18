import { useCallback, useState } from 'react'
import type { FocusEvent, MouseEvent } from 'react'

export type FieldVisualState = 'Default' | 'Hover' | 'Focus' | 'Disabled' | 'Error'

export function useFieldInteractionState(disabled = false, errored = false) {
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)

  const onMouseEnter = useCallback(
    (e: MouseEvent) => {
      if (!disabled) setHovered(true)
      return e
    },
    [disabled],
  )

  const onMouseLeave = useCallback(() => {
    setHovered(false)
  }, [])

  const onFocus = useCallback(
    (e: FocusEvent) => {
      if (!disabled) setFocused(true)
      return e
    },
    [disabled],
  )

  const onBlur = useCallback(() => {
    setFocused(false)
  }, [])

  let visualState: FieldVisualState = 'Default'
  if (disabled) visualState = 'Disabled'
  else if (errored) visualState = 'Error'
  else if (focused) visualState = 'Focus'
  else if (hovered) visualState = 'Hover'

  return {
    visualState,
    interactionHandlers: {
      onMouseEnter,
      onMouseLeave,
      onFocus,
      onBlur,
    },
  }
}
