/**
 * Local text styles matching ASC screen Typography/* names.
 * use_figma fileKey: d3ax0NwPJeQ0IM7x2qfsWF
 * https://www.figma.com/design/d3ax0NwPJeQ0IM7x2qfsWF/Code-Connect-POC--Copy-?node-id=0-1
 */
const STYLES = [
  { name: 'Typography/Sbh2Semibold', size: 16, style: 'SemiBold' },
  { name: 'Typography/Sbh3SemiBold', size: 14, style: 'SemiBold' },
  { name: 'Typography/Sbh3Regular', size: 14, style: 'Regular' },
  { name: 'Typography/Sbh3Medium', size: 14, style: 'Medium' },
  { name: 'Typography/Sbh3ExtraBold', size: 14, style: 'ExtraBold' },
  { name: 'Typography/fs-xm-12-Regular', size: 12, style: 'Regular' },
  { name: 'Typography/fs-xm-12Medium', size: 12, style: 'Medium' },
  { name: 'Typography/fs-xm-12Bold', size: 12, style: 'Medium' },
]

const FAMILY = 'DM Sans'
const LH = 1.455

async function ensureFont(style) {
  await figma.loadFontAsync({ family: FAMILY, style })
}

const created = []
for (const s of STYLES) {
  const existing = figma.getLocalTextStyles().find((t) => t.name === s.name)
  if (existing) {
    created.push({ name: s.name, id: existing.id, skipped: true })
    continue
  }
  await ensureFont(s.style)
  const ts = figma.createTextStyle()
  ts.name = s.name
  ts.fontName = { family: FAMILY, style: s.style }
  ts.fontSize = s.size
  ts.lineHeight = { unit: 'PERCENT', value: LH * 100 }
  ts.letterSpacing = { unit: 'PERCENT', value: 0 }
  created.push({ name: s.name, id: ts.id })
}

return created
