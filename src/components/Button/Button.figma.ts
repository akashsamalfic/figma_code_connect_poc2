// url=https://www.figma.com/design/ikzzK2FEEsZJG3TmhcJ1mA/Code-Connect-POC?node-id=22431-1308
// source=src/components/Button/Button.tsx
// component=Button
import figma from 'figma'

const instance = figma.selectedInstance

const label = instance.getString('Label')
const btnType = instance.getEnum('BtnType', {
  PrimaryBtn: 'PrimaryBtn',
  SecondaryBtn: 'SecondaryBtn',
})
const state = instance.getEnum('State', {
  Default: 'Default',
  Hover: 'Hover',
  Disabled: 'Disabled',
})
const size = instance.getEnum('Size', {
  Small: 'Small',
  Medium: 'Medium',
})
const icon = instance.getEnum('Icon', {
  None: 'None',
  Leading: 'Leading',
  Trailing: 'Trailing',
})

export default {
  example: figma.code`<Button btnType="${btnType}" state="${state}" size="${size}" icon="${icon}" label="${label}" />`,
  imports: ['import { Button } from "@/components/Button/Button"'],
  id: 'button',
  metadata: { nestable: true },
}
