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
const filterRow2 = filterRows[2]
let filterRow0Code
let filterRow1Code
let filterRow2Code
if (filterRow0 && filterRow0.type === 'INSTANCE') {
  filterRow0Code = filterRow0.executeTemplate().example
}
if (filterRow1 && filterRow1.type === 'INSTANCE') {
  filterRow1Code = filterRow1.executeTemplate().example
}
if (filterRow2 && filterRow2.type === 'INSTANCE') {
  filterRow2Code = filterRow2.executeTemplate().example
}

const queues = instance.findConnectedInstances(
  (node) => {
    const id = node.codeConnectId()
    return id === 'quick-search-queue' || id === 'quick-search-queue-poc'
  },
  { traverseInstances: true },
)
const queue0 = queues[0]
const queue1 = queues[1]
const queue2 = queues[2]
let queue0Code
let queue1Code
let queue2Code
if (queue0 && queue0.type === 'INSTANCE') {
  queue0Code = queue0.executeTemplate().example
}
if (queue1 && queue1.type === 'INSTANCE') {
  queue1Code = queue1.executeTemplate().example
}
if (queue2 && queue2.type === 'INSTANCE') {
  queue2Code = queue2.executeTemplate().example
}

const buttons = instance.findConnectedInstances(
  (node) => node.codeConnectId() === 'button',
  { traverseInstances: true },
)
const button0 = buttons[0]
const button1 = buttons[1]
const button2 = buttons[2]
const button3 = buttons[3]
let button0Code
let button1Code
let button2Code
let button3Code
if (button0 && button0.type === 'INSTANCE') {
  button0Code = button0.executeTemplate().example
}
if (button1 && button1.type === 'INSTANCE') {
  button1Code = button1.executeTemplate().example
}
if (button2 && button2.type === 'INSTANCE') {
  button2Code = button2.executeTemplate().example
}
if (button3 && button3.type === 'INSTANCE') {
  button3Code = button3.executeTemplate().example
}

export default {
  example: figma.code`<LeftQuickSearchPanel type="${type}" title="${title}">
  ${patientDetailsBannerCode}
  ${filterRow0Code}
  ${filterRow1Code}
  ${filterRow2Code}
  ${queue0Code}
  ${queue1Code}
  ${queue2Code}
  ${button0Code}
  ${button1Code}
  ${button2Code}
  ${button3Code}
</LeftQuickSearchPanel>`,
  imports: ['import { LeftQuickSearchPanel } from "@/components/LeftQuickSearchPanel/LeftQuickSearchPanel"'],
  id: 'left-quick-search-panel',
  metadata: { nestable: false },
}
