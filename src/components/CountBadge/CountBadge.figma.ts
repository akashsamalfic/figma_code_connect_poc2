// url=https://www.figma.com/design/ikzzK2FEEsZJG3TmhcJ1mA/Code-Connect-POC?node-id=22431-2694
// source=src/components/CountBadge/CountBadge.tsx
// component=CountBadge
import figma from 'figma'

const instance = figma.selectedInstance
const type = instance.getEnum('Type', { Default: 'Default', Active: 'Active' })
const countLayer = instance.findText('3', { traverseInstances: true })
const count =
  countLayer && 'textContent' in countLayer ? countLayer.textContent : '3'

export default {
  example: figma.code`<CountBadge type="${type}" count="${count}" />`,
  imports: ['import { CountBadge } from "@/components/CountBadge/CountBadge"'],
  id: 'count-badge',
  metadata: { nestable: true },
}
