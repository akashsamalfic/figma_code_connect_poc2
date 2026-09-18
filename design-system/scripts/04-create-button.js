/**
 * Button component set — matches BtnType × State × Size × Icon (Icon=None only in v1).
 * use_figma fileKey: d3ax0NwPJeQ0IM7x2qfsWF
 * https://www.figma.com/design/d3ax0NwPJeQ0IM7x2qfsWF/Code-Connect-POC--Copy-?node-id=0-1
 */
async function getColorVar(name) {
  const cols = await figma.variables.getLocalVariableCollectionsAsync()
  const colorColl = cols.find((c) => c.name === 'MaximEyes — Colors')
  if (!colorColl) throw new Error('Run 01-create-variables.js first')
  const vars = await Promise.all(
    colorColl.variableIds.map((id) => figma.variables.getVariableByIdAsync(id)),
  )
  const v = vars.find((x) => x && x.name === name)
  if (!v) throw new Error('Missing color var ' + name)
  return v
}

async function getNumVar(collName, name) {
  const cols = await figma.variables.getLocalVariableCollectionsAsync()
  const coll = cols.find((c) => c.name === collName)
  if (!coll) throw new Error('Missing collection ' + collName)
  const vars = await Promise.all(coll.variableIds.map((id) => figma.variables.getVariableByIdAsync(id)))
  const v = vars.find((x) => x && x.name === name)
  if (!v) throw new Error('Missing num var ' + name)
  return v
}

const page = figma.root.children.find((p) => p.name === 'Components / Button')
if (!page) throw new Error('Run 03-create-pages.js first')
await figma.setCurrentPageAsync(page)

if (page.findOne((n) => n.name === 'Button' && n.type === 'COMPONENT_SET')) {
  return { skipped: true, reason: 'Button set already exists' }
}

const primaryBg = await getColorVar('Colors/Buttons/PrimaryBtn/PrimaryBtn_Bkg_Default')
const primaryLabel = await getColorVar('Colors/Buttons/PrimaryBtn/PrimaryBtn_Label_Default')
const secBg = await getColorVar('Colors/Buttons/SecondaryBtn/SecondaryBtn_Bkg_Default')
const secBorder = await getColorVar('Colors/Buttons/SecondaryBtn/SecondaryBtn_Border_Default')
const secLabel = await getColorVar('Colors/Buttons/SecondaryBtn/SecondaryBtn_Label_Default')
const radiusFull = await getNumVar('MaximEyes — Radius', 'Radius/Full')
const gap4 = await getNumVar('MaximEyes — Spacing', 'XSmall/xs_4')

await figma.loadFontAsync({ family: 'DM Sans', style: 'ExtraBold' })

const SIZES = [
  { size: 'Small', height: 35, hPad: 12 },
  { size: 'Medium', height: 40, hPad: 16 },
]
const BTN_TYPES = [
  {
    btnType: 'PrimaryBtn',
    fills: primaryBg,
    labelColor: primaryLabel,
    stroke: null,
  },
  {
    btnType: 'SecondaryBtn',
    fills: secBg,
    labelColor: secLabel,
    stroke: secBorder,
  },
]

function makeVariant({ btnType, size, height, hPad, fills, labelColor, stroke }) {
  const name = `BtnType=${btnType}, State=Default, Size=${size}, Icon=None`
  const comp = $fig.component({
    name,
    layoutMode: 'HORIZONTAL',
    primaryAxisAlignItems: 'CENTER',
    counterAxisAlignItems: 'CENTER',
    height,
    paddingLeft: hPad,
    paddingRight: hPad,
    paddingTop: 0,
    paddingBottom: 0,
    itemSpacing: gap4,
    cornerRadius: radiusFull,
    fills: [{ type: 'SOLID', color: fills }],
    strokes: stroke ? [{ type: 'SOLID', color: secBorder }] : [],
    strokeWeight: stroke ? 1 : 0,
  }, [
    $fig.text({
      name: 'Label',
      characters: btnType === 'PrimaryBtn' ? 'Label' : 'Label',
      fontName: { family: 'DM Sans', style: 'ExtraBold' },
      fontSize: 14,
      fills: [{ type: 'SOLID', color: labelColor }],
    }),
  ])
  comp.node.description =
    btnType === 'PrimaryBtn'
      ? 'PrimaryBtn: default CTA. Size Medium is default in product; Small used in compact toolbars.'
      : 'SecondaryBtn: secondary actions (OK, Cancel).'
  return comp
}

const variantNodes = []
for (const t of BTN_TYPES) {
  for (const s of SIZES) {
    variantNodes.push(
      makeVariant({
        btnType: t.btnType,
        size: s.size,
        height: s.height,
        hPad: s.hPad,
        fills: t.fills,
        labelColor: t.labelColor,
        stroke: t.stroke,
      }),
    )
  }
}

const set = $fig.variants({ name: 'Button', description: 'Guide: MaximEyes button. Medium = default size.' }, variantNodes)

await $fig.done()

const setNode = set.node
const cols = 2
const gapX = 24
const gapY = 24
let x = 0
let y = 0
setNode.children.forEach((child, i) => {
  child.x = x
  child.y = y
  x += child.width + gapX
  if ((i + 1) % cols === 0) {
    x = 0
    y += child.height + gapY
  }
})
const maxW = Math.max(...setNode.children.map((c) => c.x + c.width))
const maxH = Math.max(...setNode.children.map((c) => c.y + c.height))
setNode.resizeWithoutConstraints(maxW, maxH)
setNode.x = 480
setNode.y = 80

return { componentSetId: setNode.id, variantCount: setNode.children.length }
