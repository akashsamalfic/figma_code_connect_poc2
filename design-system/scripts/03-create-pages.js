/**
 * Library page skeleton. Does not move the existing ASC screen page.
 * use_figma fileKey: d3ax0NwPJeQ0IM7x2qfsWF
 * https://www.figma.com/design/d3ax0NwPJeQ0IM7x2qfsWF/Code-Connect-POC--Copy-?node-id=0-1
 */
const PAGE_NAMES = [
  'Cover',
  'Foundations',
  '---',
  'Components / Button',
  'Components / PatientDetailsBanner',
  'Components / DropDown',
  'Components / CountBadge',
  'Components / QuickSearchQueue',
]

const ids = {}
for (const name of PAGE_NAMES) {
  let page = figma.root.children.find((p) => p.name === name)
  if (!page) {
    page = figma.createPage()
    page.name = name
  }
  ids[name] = page.id
}

const foundations = figma.root.children.find((p) => p.name === 'Foundations')
await figma.setCurrentPageAsync(foundations)

let doc = foundations.findOne((n) => n.name === 'Foundations / Tokens')
if (!doc) {
  doc = $fig.autoLayout(
    {
      name: 'Foundations / Tokens',
      layoutMode: 'VERTICAL',
      width: 720,
      x: 40,
      y: 40,
      paddingTop: 32,
      paddingBottom: 32,
      paddingLeft: 32,
      paddingRight: 32,
      itemSpacing: 16,
      fills: [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }],
    },
    [
      $fig.text({
        characters: 'MaximEyes — Foundations',
        fontName: { family: 'Inter', style: 'Bold' },
        fontSize: 28,
      }),
      $fig.text({
        characters:
          'Variables: MaximEyes — Primitives, Colors, Spacing, Radius, Stroke. Text styles: Typography/*. See design-system/tokens.json in repo.',
        fontName: { family: 'Inter', style: 'Regular' },
        fontSize: 14,
      }),
    ],
  ).node
}

await $fig.done()
return { pages: ids, foundationsDocId: doc.id }
