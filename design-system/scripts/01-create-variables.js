/**
 * Paste body into use_figma (fileKey: d3ax0NwPJeQ0IM7x2qfsWF).
 * https://www.figma.com/design/d3ax0NwPJeQ0IM7x2qfsWF/Code-Connect-POC--Copy-?node-id=0-1
 * Idempotent: skips collections that already exist.
 */
async function findColl(name) {
  const cols = await figma.variables.getLocalVariableCollectionsAsync()
  return cols.find((c) => c.name === name)
}
async function findVar(coll, name) {
  const vars = await Promise.all(
    coll.variableIds.map((id) => figma.variables.getVariableByIdAsync(id)),
  )
  return vars.find((v) => v && v.name === name)
}

const created = { collections: {}, variables: {} }

let prims = await findColl('MaximEyes — Primitives')
if (!prims) {
  const tokens = $fig.varCollection({ name: 'MaximEyes — Primitives', modes: ['Value'] })
  const primDefs = [
    ['white', '#ffffff'],
    ['teal/600', '#118082'],
    ['gray/900', '#303030'],
    ['gray/700', '#4b4b4a'],
    ['gray/500', '#71706c'],
    ['gray/400', '#959490'],
    ['gray/300', '#c3c1b5'],
    ['gray/200', '#e5e4dd'],
    ['gray/100', '#f6f6f1'],
    ['focus/teal', '#d6fffb'],
    ['info/50', '#edf8ff'],
    ['nav/primary', '#002515'],
    ['nav/secondary', '#325b04'],
    ['nav/status-bg', '#2c3a4a'],
    ['nav/status-text', '#eef2f6'],
    ['red/500', '#e73d36'],
    ['red/700', '#9a1712'],
    ['green/success', '#92d03d'],
  ]
  for (const [n, hex] of primDefs) {
    const v = tokens.colorVar({ name: n, values: { Value: hex }, scopes: [] })
    created.variables['prim/' + n] = v.id
  }
  created.collections.primitives = tokens.id
}

await $fig.done()

prims = await findColl('MaximEyes — Primitives')
if (!prims) throw new Error('Primitives collection missing')

let colors = await findColl('MaximEyes — Colors')
if (!colors) {
  const sem = $fig.varCollection({ name: 'MaximEyes — Colors', modes: ['Value'] })
  const map = [
    ['Colors/Functional/Bkg/Bkg_Default', 'white'],
    ['Colors/Functional/Bkg/Bkg_Light', 'gray/100'],
    ['Colors/Functional/Bkg/Bkg_Focus', 'focus/teal'],
    ['Colors/Functional/Bkg/Bkg_Info50', 'info/50'],
    ['Colors/Functional/Border/Border_Default', 'gray/300'],
    ['Colors/Functional/Border/Border_Light', 'gray/200'],
    ['Colors/Functional/Border/Border_Teal-600', 'teal/600'],
    ['Colors/Functional/Txt/Txt_Default', 'gray/900'],
    ['Colors/Functional/Txt/Txt_Light', 'gray/500'],
    ['Colors/Functional/Txt/Txt_Teal', 'teal/600'],
    ['Colors/Functional/Label/Txt_Label_Default', 'gray/700'],
    ['Colors/Functional/Placeholder/Txt_Placeholder_Default', 'gray/500'],
    ['Colors/Buttons/PrimaryBtn/PrimaryBtn_Bkg_Default', 'teal/600'],
    ['Colors/Buttons/PrimaryBtn/PrimaryBtn_Label_Default', 'white'],
    ['Colors/Buttons/SecondaryBtn/SecondaryBtn_Bkg_Default', 'white'],
    ['Colors/Buttons/SecondaryBtn/SecondaryBtn_Border_Default', 'teal/600'],
    ['Colors/Buttons/SecondaryBtn/SecondaryBtn_Label_Default', 'gray/700'],
    ['Colors/Navigation/EHR_TopNavigation/Bkg_PrimaryTopNav', 'nav/primary'],
    ['Colors/Navigation/EHR_TopNavigation/Bkg_SecondaryTopNav', 'nav/secondary'],
    ['Colors/Navigation/EHR_TopNavigation/Bkg_Menu_Selection', 'nav/secondary'],
    ['Colors/Navigation/Other/Bkg_DefaultStatus', 'nav/status-bg'],
    ['Colors/Navigation/Other/Txt_DefaultStatus', 'nav/status-text'],
    ['Colors/Navigation/Icons/Alert-High-Red500', 'red/500'],
    ['Colors/Navigation/Icons/Red700', 'red/700'],
    ['Colors/Functional/Input-Icons/Icon_Success', 'green/success'],
    ['Colors/Functional/Input-Icons/Icon_Error', 'red/500'],
    ['Colors/Functional/Input-Icons/Icon_MidGray', 'gray/400'],
    ['Colors/Functional/Input-Icons/Icon_DarkGray', 'gray/700'],
  ]
  for (const [semName, primName] of map) {
    const p = await findVar(prims, primName)
    if (!p) throw new Error('Missing primitive ' + primName)
    const css =
      '--' +
      semName
        .replace(/\//g, '-')
        .replace(/\(/g, '')
        .replace(/\)/g, '')
        .toLowerCase()
    const v = sem.colorVar({
      name: semName,
      values: { Value: p },
      scopes: ['SHAPE_FILL', 'FRAME_FILL', 'TEXT_FILL', 'STROKE_COLOR'],
      codeSyntax: { WEB: 'var(' + css + ')' },
    })
    created.variables[semName] = v.id
  }
  created.collections.colors = sem.id
}

let spacing = await findColl('MaximEyes — Spacing')
if (!spacing) {
  const sp = $fig.varCollection({ name: 'MaximEyes — Spacing', modes: ['Value'] })
  const nums = [
    ['Base/Zero', 0],
    ['spacing/xs', 4],
    ['spacing/sm', 8],
    ['spacing/md', 12],
    ['Spacing', 8],
    ['Gap/10', 10],
    ['H-padding', 10],
    ['Hpadding/10', 10],
    ['V- Padding', 16],
    ['Full Padding', 12],
    ['XSmall/xs_4', 4],
    ['XSmall/xs_8', 8],
    ['XSmall/xs_12', 12],
    ['XSmall/xs_20', 20],
    ['XSmall/xs_40', 40],
    ["2's/4", 4],
    ["2's/8", 8],
    ["2's/13", 13],
    ["2's/30", 30],
    ["2's/Full", 999],
    ['Icon', 16],
  ]
  for (const [n, val] of nums) {
    sp.numVar({ name: n, values: { Value: val }, scopes: ['GAP', 'WIDTH_HEIGHT'] })
  }
  created.collections.spacing = sp.id
}

let radius = await findColl('MaximEyes — Radius')
if (!radius) {
  const rad = $fig.varCollection({ name: 'MaximEyes — Radius', modes: ['Value'] })
  for (const [n, val] of [
    ['Radius/RadiusInputFeild/RadiusInputFeild', 13],
    ['Radius/L', 12],
    ['Radius/Full', 999],
  ]) {
    rad.numVar({ name: n, values: { Value: val }, scopes: ['CORNER_RADIUS'] })
  }
  created.collections.radius = rad.id
}

let strokeColl = await findColl('MaximEyes — Stroke')
if (!strokeColl) {
  const st = $fig.varCollection({ name: 'MaximEyes — Stroke', modes: ['Value'] })
  st.numVar({ name: 'Stroke1', values: { Value: 1 }, scopes: ['STROKE_FLOAT'] })
  st.numVar({ name: 'StrokeXsm', values: { Value: 0.5 }, scopes: ['STROKE_FLOAT'] })
  created.collections.stroke = st.id
}

await $fig.done()
return created
