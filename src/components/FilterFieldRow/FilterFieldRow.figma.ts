// url=https://www.figma.com/design/HmB3F0SSVnRfiYfbNr2qrS?node-id=18011-1395
// source=src/components/FilterFieldRow/FilterFieldRow.tsx
// component=FilterFieldRow
import figma from "figma"

const instance = figma.selectedInstance

const label = instance.getString('Menu Name')

const dropdown = instance.findConnectedInstance('dropdown', {
  traverseInstances: true,
})
const datePicker = instance.findConnectedInstance('date-picker', {
  traverseInstances: true,
})
let controlCode
if (dropdown && dropdown.type === 'INSTANCE') {
  controlCode = dropdown.executeTemplate().example
} else if (datePicker && datePicker.type === 'INSTANCE') {
  controlCode = datePicker.executeTemplate().example
}

export default {
  example: figma.code`<FilterFieldRow label="${label}">${controlCode}</FilterFieldRow>`,
  imports: ['import { FilterFieldRow } from "@/components/FilterFieldRow/FilterFieldRow"'],
  id: 'filter-field-row',
  metadata: { nestable: true },
}
