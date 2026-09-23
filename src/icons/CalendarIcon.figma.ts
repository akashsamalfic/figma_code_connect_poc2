// url=https://www.figma.com/design/HmB3F0SSVnRfiYfbNr2qrS?node-id=8631-420
// source=src/assets/figma/index.ts
// component=figmaAssets.iconCalendar16
import figma from "figma"

export default {
  example: figma.code`<img src={figmaAssets.iconCalendar16} alt="" width={16} height={16} />`,
  imports: ['import { figmaAssets } from "@/assets/figma"'],
  id: 'icon-calendar-16',
  metadata: { nestable: true },
}
