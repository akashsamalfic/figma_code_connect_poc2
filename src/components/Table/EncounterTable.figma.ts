// url=https://www.figma.com/design/ikzzK2FEEsZJG3TmhcJ1mA/Code-Connect-POC?node-id=22431-3751
// source=src/components/Table/EncounterTable.tsx
// component=EncounterTable
import figma from 'figma'

const instance = figma.selectedInstance

export default {
  example: figma.code`<EncounterTable />`,
  imports: ['import { EncounterTable } from "@/components/Table/EncounterTable"'],
  id: 'encounter-table',
  metadata: { nestable: false },
}
