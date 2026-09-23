// url=https://www.figma.com/design/HmB3F0SSVnRfiYfbNr2qrS?node-id=18942-4787
// source=src/components/DropDown/DropDown.tsx
// component=DropDown
import figma from "figma"

const instance = figma.selectedInstance

const showPlaceholder = instance.getBoolean('Placeholder Text2')
const placeholderText = showPlaceholder
  ? instance.getString('Placeholder Text')
  : ''
const fieldLabel = instance.getString('TextAreaLabel2')
const state = instance.getEnum('State', {
  Default: 'Default',
  Multiselected: 'Default',
  SingleSelected: 'Default',
  Hover: 'Hover',
  Error: 'Error',
  Disable: 'Disabled',
  ReadOnly: 'Disabled',
})
const size = instance.getEnum('Size', {
  Small: 'Small',
  Medium: 'Medium',
  Large: 'Medium',
})
const hasInputIcon = instance.getBoolean('HasInputIcon')
const mandatoryField = instance.getBoolean('Mandatory Field')
const helperText = instance.getBoolean('Helper Text')
const textAreaLabel = instance.getBoolean('TextAreaLabel')
// Omitted: Right Icon (INSTANCE_SWAP), Error Message2 (TEXT), Warning Icon
// (BOOLEAN). DropDownProps has no icon, error-message, or warning-icon slot.

export default {
  example: figma.code`<DropDown
  placeholderText="${placeholderText}"
  fieldLabel="${fieldLabel}"
  state="${state}"
  size="${size}"
  ${hasInputIcon ? 'hasInputIcon' : 'hasInputIcon={false}'}
  ${mandatoryField ? 'mandatoryField' : ''}
  ${helperText ? 'helperText' : ''}
  ${textAreaLabel ? 'textAreaLabel' : ''}
/>`,
  imports: ['import { DropDown } from "@/components/DropDown/DropDown"'],
  id: 'dropdown',
  metadata: { nestable: true },
}
