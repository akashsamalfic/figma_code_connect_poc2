// url=https://www.figma.com/design/ikzzK2FEEsZJG3TmhcJ1mA/Code-Connect-POC?node-id=22431-2709
// source=src/components/QuickSearchQueue/QuickSearchQueue.tsx
// component=QuickSearchQueue
import figma from 'figma'

const instance = figma.selectedInstance
const queueLabel = instance.getString('QueueLabel')
const badge = instance.findInstance('CountBadge', { traverseInstances: true })
let badgeCode
if (badge && badge.type === 'INSTANCE') {
  badgeCode = badge.executeTemplate().example
}

export default {
  example: figma.code`<QuickSearchQueue queueLabel="${queueLabel}"${badgeCode ? figma.code` badge={${badgeCode}}` : ''} />`,
  imports: ['import { QuickSearchQueue } from "@/components/QuickSearchQueue/QuickSearchQueue"'],
  id: 'quick-search-queue',
  metadata: { nestable: true },
}
