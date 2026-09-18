// url=https://www.figma.com/design/ikzzK2FEEsZJG3TmhcJ1mA/Code-Connect-POC?node-id=22445-651
// source=src/components/DropDown/DropDown.tsx
// component=DropDown
import figma from 'figma'

const instance = figma.selectedInstance

const placeholderText = instance.getString('Placeholder Text')
const state = instance.getEnum('State', {
  Default: 'Default',
  Hover: 'Hover',
  Disabled: 'Disabled',
  Error: 'Error',
})
const size = instance.getEnum('Size', { Small: 'Small', Medium: 'Medium' })
const hasInputIcon = instance.getBoolean('HasInputIcon')
const mandatoryField = instance.getBoolean('Mandatory Field')
const helperText = instance.getBoolean('Helper Text')
const textAreaLabel = instance.getBoolean('TextAreaLabel')

export default {
  example: figma.code`<DropDown
  placeholderText="${placeholderText}"
  state="${state}"
  size="${size}"
  hasInputIcon={${hasInputIcon}}
  mandatoryField={${mandatoryField}}
  helperText={${helperText}}
  textAreaLabel={${textAreaLabel}}
/>`,
  imports: ['import { DropDown } from "@/components/DropDown/DropDown"'],
  id: 'dropdown',
  metadata: { nestable: true },
}
