// url=https://www.figma.com/design/HmB3F0SSVnRfiYfbNr2qrS?node-id=8908-2498
// source=src/components/Button/Button.tsx
// component=Button
import figma from "figma"

const instance = figma.selectedInstance

const label = instance.getString('Label')
const btnType = instance.getEnum('BtnType', {
  PrimaryBtn: 'PrimaryBtn',
  SecondaryBtn: 'SecondaryBtn',
  BrandBtn: 'PrimaryBtn',
  SuccessBtn: 'PrimaryBtn',
  DangerBtn: 'SecondaryBtn',
})
const state = instance.getEnum('State', {
  Default: 'Default',
  Hover: 'Hover',
  Disable: 'Disabled',
})
const size = instance.getEnum('Size', {
  Small: 'Small',
  Medium: 'Medium',
  Large: 'Medium',
  True: 'Medium',
})
const icon = instance.getEnum('Icon', {
  None: 'None',
  LeftIcon: 'Leading',
  RightIcon: 'Trailing',
  Alone: 'Alone',
})
const iconSwap = instance.getInstanceSwap('IconSwap')
let iconCode
if (iconSwap && iconSwap.type === 'INSTANCE') {
  iconCode = iconSwap.executeTemplate().example
}

export default {
  example: figma.code`<Button
  btnType="${btnType}"
  state="${state}"
  size="${size}"
  icon="${icon}"
  label="${label}"
  ${iconCode ? figma.code`iconNode={${iconCode}}` : ''}
/>`,
  imports: ['import { Button } from "@/components/Button/Button"'],
  id: 'button',
  metadata: { nestable: true },
}
