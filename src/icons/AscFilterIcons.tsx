import { cssVars } from '@/tokens/cssVars'

export function IconClear() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path
        d="M3 3l8 8M11 3L3 11"
        stroke={cssVars.secondaryBtnLabel}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function IconStar() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path
        d="M7 1.5l1.76 3.57 3.94.57-2.85 2.78.67 3.92L7 10.4l-3.52 1.94.67-3.92-2.85-2.78 3.94-.57L7 1.5z"
        stroke={cssVars.secondaryBtnLabel}
        strokeWidth="1.2"
        fill="none"
      />
    </svg>
  )
}

export function IconPin() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path
        d="M7 1.5v3M4.5 4.5h5l-1 4.5H5.5l-1-4.5zM5.5 9v3.5h3V9"
        stroke={cssVars.secondaryBtnLabel}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
