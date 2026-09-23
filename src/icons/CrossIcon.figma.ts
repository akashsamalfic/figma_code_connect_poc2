// url=https://www.figma.com/design/HmB3F0SSVnRfiYfbNr2qrS?node-id=11272-1225
// source=src/assets/figma/index.ts
// component=figmaAssets.iconClear16
import figma from "figma"

export default {
  example: figma.code`<img src={figmaAssets.iconClear16} alt="" width={16} height={16} />`,
  imports: ['import { figmaAssets } from "@/assets/figma"'],
  id: 'icon-cross-16',
  metadata: { nestable: true },
}
