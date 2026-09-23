// url=https://www.figma.com/design/HmB3F0SSVnRfiYfbNr2qrS?node-id=16981-2130
// source=src/components/LeftQuickSearchPanel/LeftQuickSearchPanel.tsx
// component=LeftQuickSearchPanel
import figma from "figma"

const instance = figma.selectedInstance
const type = instance.getEnum('Type', {
  'Double Tab': 'Card',
  'Single Tab': 'Card',
  'With Filter': 'Card',
  'Card+ Queue': 'Card+ Queue',
})
const titleLayer = instance.findText('Title')
const title =
  titleLayer.type === 'TEXT' ? titleLayer.textContent : 'Encounter History'

const patientDetailsBanner = instance.findConnectedInstance(
  'patient-details-banner',
)
let patientDetailsBannerCode
if (patientDetailsBanner && patientDetailsBanner.type === 'INSTANCE') {
  patientDetailsBannerCode = patientDetailsBanner.executeTemplate().example
}

const filterRows = instance.findConnectedInstances(
  (node) => node.codeConnectId() === 'filter-field-row',
)
const filterRow0 = filterRows[0]
const filterRow1 = filterRows[1]
let filterRow0Code
let filterRow1Code
if (filterRow0 && filterRow0.type === 'INSTANCE') {
  filterRow0Code = filterRow0.executeTemplate().example
}
if (filterRow1 && filterRow1.type === 'INSTANCE') {
  filterRow1Code = filterRow1.executeTemplate().example
}

const dropdowns = instance.findConnectedInstances(
  (node) => node.codeConnectId() === 'dropdown',
)
const dropdown0 = dropdowns[0]
const dropdown1 = dropdowns[1]
let dropdown0Code
let dropdown1Code
if (dropdown0 && dropdown0.type === 'INSTANCE') {
  dropdown0Code = dropdown0.executeTemplate().example
}
if (dropdown1 && dropdown1.type === 'INSTANCE') {
  dropdown1Code = dropdown1.executeTemplate().example
}

const queues = instance.findConnectedInstances(
  (node) => {
    const id = node.codeConnectId()
    return id === 'quick-search-queue' || id === 'quick-search-queue-poc'
  },
  { traverseInstances: true },
)
const queue = queues[0]
let queueCode
if (queue && queue.type === 'INSTANCE') {
  queueCode = queue.executeTemplate().example
}

export default {
  example: figma.code`<LeftQuickSearchPanel type="${type}" title="${title}">
  ${patientDetailsBannerCode}
  ${filterRow0Code}
  ${filterRow1Code}
  ${dropdown0Code}
  ${dropdown1Code}
  ${queueCode}
</LeftQuickSearchPanel>`,
  imports: ['import { LeftQuickSearchPanel } from "@/components/LeftQuickSearchPanel/LeftQuickSearchPanel"'],
  id: 'left-quick-search-panel',
  metadata: { nestable: false },
}
