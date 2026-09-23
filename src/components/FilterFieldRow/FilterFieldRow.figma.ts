// url=https://www.figma.com/design/HmB3F0SSVnRfiYfbNr2qrS?node-id=18011-1395
// source=src/components/FilterFieldRow/FilterFieldRow.tsx
// component=FilterFieldRow
import figma from "figma"

const instance = figma.selectedInstance

const property1 = instance.getEnum('Property 1', {
  'Dropdown Label': 'dropdown',
  'With Check Box': 'checkbox',
})
const hasDropDown = instance.getBoolean('Has Drop Down')
const menuName = instance.getString('Menu Name')

const favoritesLayer = instance.findText('Favorites')
const genderLayer = instance.findText('Gender')
const addOnLayer = instance.findText('Add-On')
const favoritesLabel =
  favoritesLayer.type === 'TEXT' ? favoritesLayer.textContent : 'Favorites'
const genderLabel =
  genderLayer.type === 'TEXT' ? genderLayer.textContent : 'Gender'
const addOnLabel =
  addOnLayer.type === 'TEXT' ? addOnLayer.textContent : 'Add-On'

const dropdowns = instance.findConnectedInstances(
  (node) => node.codeConnectId() === 'dropdown',
)
const dropdown0 = dropdowns[0]
const dropdown1 = dropdowns[1]
const dropdown2 = dropdowns[2]
let dropdown0Code
let dropdown1Code
let dropdown2Code
if (hasDropDown && dropdown0 && dropdown0.type === 'INSTANCE') {
  dropdown0Code = dropdown0.executeTemplate().example
}
if (hasDropDown && dropdown1 && dropdown1.type === 'INSTANCE') {
  dropdown1Code = dropdown1.executeTemplate().example
}
if (hasDropDown && dropdown2 && dropdown2.type === 'INSTANCE') {
  dropdown2Code = dropdown2.executeTemplate().example
}

export default {
  example:
    property1 === 'dropdown'
      ? figma.code`
  <FilterFieldRow label="${favoritesLabel}">${dropdown0Code}</FilterFieldRow>
  <FilterFieldRow label="${genderLabel}">${dropdown1Code}</FilterFieldRow>
  <FilterFieldRow label="${addOnLabel}">${dropdown2Code}</FilterFieldRow>`
      : figma.code`<FilterFieldRow label="${menuName}">{null}</FilterFieldRow>`,
  imports: ['import { FilterFieldRow } from "@/components/FilterFieldRow/FilterFieldRow"'],
  id: 'filter-field-row',
  metadata: { nestable: true },
}
