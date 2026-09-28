// url=https://www.figma.com/design/HmB3F0SSVnRfiYfbNr2qrS?node-id=8908-2498
// source=src/components/Button/Button.tsx
// component=Button
import figma from "figma"

const instance = figma.selectedInstance

const label = instance.getString('Label')

const variant = instance.getEnum('BtnType', {
  PrimaryBtn: 'primary',
  SecondaryBtn: 'secondary',
  BrandBtn: 'brand',
  SuccessBtn: 'success',
  DangerBtn: 'danger',
})

const disabled = instance.getEnum('State', {
  Default: false,
  Hover: false,
  Disable: true,
})

const size = instance.getEnum('Size', {
  Large: 'lg',
  Medium: 'md',
  Small: 'sm',
  True: 'md',
})

const iconPlacement = instance.getEnum('Icon', {
  None: 'none',
  LeftIcon: 'left',
  RightIcon: 'right',
  Alone: 'alone',
})

const iconSwap = instance.getInstanceSwap('IconSwap')
let iconCode
if (iconPlacement !== 'none' && iconSwap && iconSwap.type === 'INSTANCE') {
  iconCode = iconSwap.executeTemplate().example
}

const disabledAttr = disabled ? figma.code` disabled` : figma.code``
const leftIconAttr =
  (iconPlacement === 'left' || iconPlacement === 'alone') && iconCode
    ? figma.code` leftIcon={${iconCode}}`
    : figma.code``
const rightIconAttr =
  iconPlacement === 'right' && iconCode
    ? figma.code` rightIcon={${iconCode}}`
    : figma.code``

export default {
  example:
    iconPlacement === 'alone'
      ? figma.code`<Button variant="${variant}" size="${size}"${disabledAttr} aria-label="${label}"${leftIconAttr} />`
      : figma.code`<Button variant="${variant}" size="${size}"${disabledAttr}${leftIconAttr}${rightIconAttr}>${label}</Button>`,
  imports: ['import { Button } from "@/components/Button/Button"'],
  id: 'button',
  metadata: { nestable: true },
}
