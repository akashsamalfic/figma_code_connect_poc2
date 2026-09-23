// url=https://www.figma.com/design/HmB3F0SSVnRfiYfbNr2qrS?node-id=9341-970
// source=src/assets/figma/index.ts
// component=figmaAssets.iconPanelBack16
import figma from "figma"

export default {
  example: figma.code`<img src={figmaAssets.iconPanelBack16} alt="" width={16} height={16} />`,
  imports: ['import { figmaAssets } from "@/assets/figma"'],
  id: 'icon-back-16',
  metadata: { nestable: true },
}
