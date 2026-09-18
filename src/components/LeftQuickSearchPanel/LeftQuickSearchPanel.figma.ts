// url=https://www.figma.com/design/ikzzK2FEEsZJG3TmhcJ1mA/Code-Connect-POC?node-id=22431-2723
// source=src/components/LeftQuickSearchPanel/LeftQuickSearchPanel.tsx
// component=LeftQuickSearchPanel
import figma from 'figma'

const instance = figma.selectedInstance
const type = instance.getEnum('Type', { 'Card+ Queue': 'Card+ Queue', Card: 'Card' })

export default {
  example: figma.code`<LeftQuickSearchPanel type="${type}" />`,
  imports: ['import { LeftQuickSearchPanel } from "@/components/LeftQuickSearchPanel/LeftQuickSearchPanel"'],
  id: 'left-quick-search-panel',
  metadata: { nestable: false },
}
