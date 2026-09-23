// url=https://www.figma.com/design/HmB3F0SSVnRfiYfbNr2qrS?node-id=12615-2790
// source=src/components/PatientDetailsBanner/PatientDetailsBanner.tsx
// component=PatientDetailsBanner
import figma from "figma"

const instance = figma.selectedInstance

const headingText = instance.getString('HeadingText')
const subtitle1 = instance.getString('SubTitle1')
const subtitle1Value = instance.getString('Subtitle1Value')
const subtitle2 = instance.getString('Subtitle2')
const subtitle2Value = instance.getString('Subtitle2Value')
const subtitle3 = instance.getString('SubTitle3')
const subtitle3Value = instance.getString('Subtitle3Value')
const showSubtitle1 = instance.getBoolean('Show_SubTitle1')
const showSubtitle2 = instance.getBoolean('Show_SubTitle2')
const showSubtitle3 = instance.getBoolean('Show_SubTitle3')
const time = instance.getBoolean('Time')
const color = instance.getEnum('Color', { Teal: 'Teal', Gray: 'Gray' })
const size = instance.getEnum('Size', { Small: 'Small', Medium: 'Medium' })
const styleVariant = instance.getEnum('Style', {
  PatientDetails: 'PatientDetails_WithOptionButton',
  PatientDetails_WithoutOptionButton: 'PatientDetails_WithoutOptionButton',
})
const state = instance.getEnum('State', {
  Default: 'Default',
  'Active/Selected/Hover': 'Hover',
})
// Nested Figma Button is encoded by styleVariant; PatientDetailsBannerProps
// has no button or children slot.

export default {
  example: figma.code`<PatientDetailsBanner
  headingText="${headingText}"
  subtitle1="${subtitle1}"
  subtitle1Value="${subtitle1Value}"
  subtitle2="${subtitle2}"
  subtitle2Value="${subtitle2Value}"
  subtitle3="${subtitle3}"
  subtitle3Value="${subtitle3Value}"
  showSubtitle1={${showSubtitle1}}
  showSubtitle2={${showSubtitle2}}
  showSubtitle3={${showSubtitle3}}
  time={${time}}
  color="${color}"
  size="${size}"
  styleVariant="${styleVariant}"
  state="${state}"
/>`,
  imports: ['import { PatientDetailsBanner } from "@/components/PatientDetailsBanner/PatientDetailsBanner"'],
  id: 'patient-details-banner',
  metadata: { nestable: true },
}
