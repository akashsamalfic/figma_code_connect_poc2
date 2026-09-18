// url=https://www.figma.com/design/ikzzK2FEEsZJG3TmhcJ1mA/Code-Connect-POC?node-id=22431-2552
// source=src/components/DatePicker/DatePicker.tsx
// component=DatePicker
import figma from 'figma'

const instance = figma.selectedInstance

const placeholderText = instance.getString('Placeholder Text')
const titleText = instance.getString('Title Text')
const showTitle = instance.getBoolean('Show Title')
const isMandatory = instance.getBoolean('Is Mandatory')
const state = instance.getEnum('State', {
  Default: 'Default',
  Hover: 'Hover',
  Disabled: 'Disabled',
  Error: 'Error',
})
const type = instance.getEnum('Type', { Default: 'Default', Range: 'Range' })
const size = instance.getEnum('Size', { Small: 'Small', Medium: 'Medium' })

export default {
  example: figma.code`<DatePicker
  placeholderText="${placeholderText}"
  titleText="${titleText}"
  showTitle={${showTitle}}
  isMandatory={${isMandatory}}
  state="${state}"
  type="${type}"
  size="${size}"
/>`,
  imports: ['import { DatePicker } from "@/components/DatePicker/DatePicker"'],
  id: 'date-picker',
  metadata: { nestable: true },
}
