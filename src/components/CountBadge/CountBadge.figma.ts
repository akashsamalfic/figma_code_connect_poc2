// url=https://www.figma.com/design/HmB3F0SSVnRfiYfbNr2qrS?node-id=15864-642
// source=src/components/CountBadge/CountBadge.tsx
// component=CountBadge
import figma from "figma"

const instance = figma.selectedInstance
const type = instance.getEnum('Type', {
  ActiveStatus: 'Active',
  Default: 'Default',
  New: 'Default',
  NoticeStatus: 'Default',
  Pending: 'Default',
  Closed: 'Default',
  Inactive: 'Default',
})
const countLayer = instance.findText('5', { traverseInstances: true })
const count =
  countLayer.type === 'TEXT' ? countLayer.textContent : '5'

export default {
  example: figma.code`<CountBadge type="${type}" count="${count}" />`,
  imports: ['import { CountBadge } from "@/components/CountBadge/CountBadge"'],
  id: 'count-badge',
  metadata: { nestable: true },
}
