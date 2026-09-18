import { cssVars } from '@/tokens/cssVars'

export const fontFamily = '"DM Sans", sans-serif'
export const lineHeight = 1.455
export const letterSpacing = 0

/** Figma text styles used on ASC / left panel (Typography/*). */
export const typography = {
  sbh3Regular: {
    fontFamily,
    fontSize: 14,
    fontWeight: 400,
    lineHeight,
    letterSpacing,
    color: cssVars.labelDefault,
  },
  sbh3SemiBold: {
    fontFamily,
    fontSize: 14,
    fontWeight: 600,
    lineHeight,
    letterSpacing,
    color: cssVars.labelDefault,
  },
  sbh3ExtraBold: {
    fontFamily,
    fontSize: 14,
    fontWeight: 800,
    lineHeight,
    letterSpacing,
    color: cssVars.navIconGray700,
  },
  sbh1ExtraBold: {
    fontFamily,
    fontSize: 18,
    fontWeight: 800,
    lineHeight,
    letterSpacing,
    color: cssVars.txtDefault,
  },
  fs12Regular: {
    fontFamily,
    fontSize: 12,
    fontWeight: 400,
    lineHeight,
    letterSpacing,
    color: cssVars.placeholder,
  },
  fs12Medium: {
    fontFamily,
    fontSize: 12,
    fontWeight: 500,
    lineHeight,
    letterSpacing,
    color: cssVars.labelDefault,
  },
  fs10ExtraBold: {
    fontFamily,
    fontSize: 10,
    fontWeight: 800,
    lineHeight,
    letterSpacing,
    color: cssVars.navLabel,
  },
  h6: {
    fontFamily,
    fontSize: 20,
    fontWeight: 600,
    lineHeight,
    letterSpacing,
    color: cssVars.labelDefault,
  },
  sbh2Regular16: {
    fontFamily,
    fontSize: 16,
    fontWeight: 400,
    lineHeight,
    letterSpacing,
    color: cssVars.txtSectionHeader,
  },
} as const
