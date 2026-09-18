/**
 * use_figma fileKey: d3ax0NwPJeQ0IM7x2qfsWF
 * https://www.figma.com/design/d3ax0NwPJeQ0IM7x2qfsWF/Code-Connect-POC--Copy-?node-id=0-1
 *
 * PatientDetailsBanner, DropDown, CountBadge, _QuickSearchQueue/State3
 */
async function colorVar(name) {
  const col = (await figma.variables.getLocalVariableCollectionsAsync()).find(
    (c) => c.name === 'MaximEyes — Colors',
  )
  const vars = await Promise.all(col.variableIds.map((id) => figma.variables.getVariableByIdAsync(id)))
  const v = vars.find((x) => x && x.name === name)
  if (!v) throw new Error(name)
  return v
}
async function numVar(coll, name) {
  const c = (await figma.variables.getLocalVariableCollectionsAsync()).find((x) => x.name === coll)
  const vars = await Promise.all(c.variableIds.map((id) => figma.variables.getVariableByIdAsync(id)))
  return vars.find((x) => x && x.name === name)
}

await figma.loadFontAsync({ family: 'DM Sans', style: 'SemiBold' })
await figma.loadFontAsync({ family: 'DM Sans', style: 'Medium' })
await figma.loadFontAsync({ family: 'DM Sans', style: 'Regular' })
await figma.loadFontAsync({ family: 'DM Sans', style: 'ExtraBold' })

const results = {}

// --- PatientDetailsBanner ---
let bannerPage = figma.root.children.find((p) => p.name === 'Components / PatientDetailsBanner')
await figma.setCurrentPageAsync(bannerPage)
if (!bannerPage.findOne((n) => n.name === 'PatientDetailsBanner' && n.type === 'COMPONENT_SET')) {
  const focusBg = await colorVar('Colors/Functional/Bkg/Bkg_Focus')
  const focusBorder = await colorVar('Colors/Functional/Border/Border_Teal-600')
  const grayBg = await colorVar('Colors/Functional/Bkg/Bkg_Default')
  const grayBorder = await colorVar('Colors/Functional/Border/Border_Light')
  const txtDefault = await colorVar('Colors/Functional/Txt/Txt_Default')
  const labelDefault = await colorVar('Colors/Functional/Label/Txt_Label_Default')
  const r13 = await numVar('MaximEyes — Radius', 'Radius/RadiusInputFeild/RadiusInputFeild')

  function bannerVariant(variantName, bg, border, desc) {
    const c = $fig.component(
      {
        name: variantName,
        layoutMode: 'VERTICAL',
        width: 232,
        paddingLeft: 9,
        paddingRight: 9,
        paddingTop: 5,
        paddingBottom: 5,
        itemSpacing: 4,
        cornerRadius: r13,
        fills: [{ type: 'SOLID', color: bg }],
        strokes: [{ type: 'SOLID', color: border }],
        strokeWeight: 1,
      },
      [
        $fig.text({
          characters: 'Patient Name',
          fontName: { family: 'DM Sans', style: 'SemiBold' },
          fontSize: 16,
          fills: [{ type: 'SOLID', color: txtDefault }],
        }),
        $fig.text({
          characters: 'DOB 01/01/1990',
          fontName: { family: 'DM Sans', style: 'Medium' },
          fontSize: 12,
          fills: [{ type: 'SOLID', color: labelDefault }],
        }),
      ],
    )
    c.node.description = desc
    return c
  }

  const set = $fig.variants(
    {
      name: 'PatientDetailsBanner',
      description: 'Teal: standalone/selected patient. Gray: repeated cards in quick search lists.',
    },
    [
      bannerVariant(
        'Variant=Teal',
        focusBg,
        focusBorder,
        'Teal variant for standalone screens and selected patient in quick search.',
      ),
      bannerVariant(
        'Variant=Gray',
        grayBg,
        grayBorder,
        'Gray variant when the card repeats on one screen.',
      ),
    ],
  )
  await $fig.done()
  set.node.x = 80
  set.node.y = 80
  results.PatientDetailsBanner = set.node.id
}

// --- DropDown ---
let ddPage = figma.root.children.find((p) => p.name === 'Components / DropDown')
await figma.setCurrentPageAsync(ddPage)
if (!ddPage.findOne((n) => n.name === 'DropDown' && n.type === 'COMPONENT')) {
  const bkg = await colorVar('Colors/Functional/Bkg/Bkg_Default')
  const border = await colorVar('Colors/Functional/Border/Border_Default')
  const placeholder = await colorVar('Colors/Functional/Placeholder/Txt_Placeholder_Default')
  const rInput = await numVar('MaximEyes — Radius', 'Radius/RadiusInputFeild/RadiusInputFeild')

  const dd = $fig.component(
    {
      name: 'DropDown',
      layoutMode: 'HORIZONTAL',
      width: 200,
      height: 27,
      paddingLeft: 12,
      paddingRight: 12,
      paddingTop: 4,
      paddingBottom: 4,
      cornerRadius: rInput,
      fills: [{ type: 'SOLID', color: bkg }],
      strokes: [{ type: 'SOLID', color: border }],
      strokeWeight: 1,
    },
    [
      $fig.text({
        name: 'Value',
        characters: 'All',
        fontName: { family: 'DM Sans', style: 'Regular' },
        fontSize: 12,
        fills: [{ type: 'SOLID', color: placeholder }],
      }),
    ],
  )
  dd.node.description = 'Standard filter dropdown; 27px height on Encounter Hx filters.'
  await $fig.done()
  dd.node.x = 80
  dd.node.y = 80
  results.DropDown = dd.node.id
}

// --- CountBadge ---
let badgePage = figma.root.children.find((p) => p.name === 'Components / CountBadge')
await figma.setCurrentPageAsync(badgePage)
if (!badgePage.findOne((n) => n.name === 'CountBadge' && n.type === 'COMPONENT')) {
  const bg = await colorVar('Colors/Navigation/Other/Bkg_DefaultStatus')
  const fg = await colorVar('Colors/Navigation/Other/Txt_DefaultStatus')
  const badge = $fig.component(
    {
      name: 'CountBadge',
      layoutMode: 'HORIZONTAL',
      width: 18,
      height: 18,
      primaryAxisAlignItems: 'CENTER',
      counterAxisAlignItems: 'CENTER',
      cornerRadius: 999,
      fills: [{ type: 'SOLID', color: bg }],
    },
    [
      $fig.text({
        characters: '3',
        fontName: { family: 'DM Sans', style: 'Medium' },
        fontSize: 12,
        fills: [{ type: 'SOLID', color: fg }],
      }),
    ],
  )
  await $fig.done()
  badge.node.x = 80
  badge.node.y = 80
  results.CountBadge = badge.node.id
}

// --- QuickSearchQueue ---
let qPage = figma.root.children.find((p) => p.name === 'Components / QuickSearchQueue')
await figma.setCurrentPageAsync(qPage)
if (!qPage.findOne((n) => n.name === '_QuickSearchQueue/State3' && n.type === 'COMPONENT')) {
  const rowBg = await colorVar('Colors/Functional/Bkg/Bkg_Default')
  const rowBorder = await colorVar('Colors/Functional/Border/Border_Light')
  const label = await colorVar('Colors/Functional/Label/Txt_Label_Default')

  const row = $fig.component(
    {
      name: '_QuickSearchQueue/State3',
      layoutMode: 'HORIZONTAL',
      width: 232,
      height: 32,
      paddingLeft: 10,
      paddingRight: 10,
      primaryAxisAlignItems: 'CENTER',
      counterAxisAlignItems: 'CENTER',
      cornerRadius: 8,
      fills: [{ type: 'SOLID', color: rowBg }],
      strokes: [{ type: 'SOLID', color: rowBorder }],
      strokeWeight: 0.533,
    },
    [
      $fig.text({
        name: 'queueLabel',
        characters: 'Provider Name',
        fontName: { family: 'DM Sans', style: 'Medium' },
        fontSize: 12,
        layoutSizingHorizontal: 'FILL',
        fills: [{ type: 'SOLID', color: label }],
      }),
    ],
  )
  row.node.description = 'Per-provider queue row; pair with CountBadge instance.'
  await $fig.done()
  row.node.x = 80
  row.node.y = 80
  results.QuickSearchQueue = row.node.id
}

return results
