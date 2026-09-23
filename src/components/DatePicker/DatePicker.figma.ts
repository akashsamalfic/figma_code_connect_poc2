// url=https://www.figma.com/design/HmB3F0SSVnRfiYfbNr2qrS?node-id=8965-4125
// source=src/components/DatePicker/DatePicker.tsx
// component=DatePicker
import figma from "figma"

const instance = figma.selectedInstance

const placeholderText = instance.getString('Placeholder Text')
const titleText = instance.getString('Title Text')
const showTitle = instance.getBoolean('Show Title')
const isMandatory = instance.getBoolean('Is Mandatory')
const state = instance.getEnum('State', {
  Default: 'Default',
  Expanded: 'Focus',
  Selected: 'Default',
})
const type = instance.getEnum('Type', {
  Default: 'Default',
  Custom: 'Range',
})
const size = instance.getEnum('Size', { Small: 'Small', Medium: 'Medium' })
// Omitted: Change Icon (INSTANCE_SWAP) and nested picker chrome.
// DatePickerProps has no icon-node or calendar-panel slot.

export default {
  example: figma.code`<DatePicker
  placeholderText="${placeholderText}"
  titleText="${titleText}"
  ${showTitle ? 'showTitle' : ''}
  ${isMandatory ? 'isMandatory' : ''}
  state="${state}"
  type="${type}"
  size="${size}"
/>`,
  imports: ['import { DatePicker } from "@/components/DatePicker/DatePicker"'],
  id: 'date-picker',
  metadata: { nestable: true },
}
