// url=https://www.figma.com/design/HmB3F0SSVnRfiYfbNr2qrS?node-id=16074-647
// source=src/components/EHRNavBar/EHRNavBar.tsx
// component=EHRNavBar
import figma from "figma"

const instance = figma.selectedInstance
const preset = instance.getEnum('Type', {
  'Without Practice Logo': 'encounter-history',
  'With Practice Logo': 'encounter-history',
})
// Omitted: HasSecondaryTopNav, Show Icon Menus, Show Profile menu,
// Has SearchBar, and nested menu/logo/icon instances. Those are internal
// to EHRNavBarEncounterHistory; EHRNavBarProps has no matching slots.

export default {
  example: figma.code`<EHRNavBar preset="${preset}" />`,
  imports: ['import { EHRNavBar } from "@/components/EHRNavBar/EHRNavBar"'],
  id: 'ehr-nav-bar',
  metadata: { nestable: false },
}
