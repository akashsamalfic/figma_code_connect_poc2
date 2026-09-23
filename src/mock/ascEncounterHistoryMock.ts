import type { EncounterTableRow } from '@/components/Table/EncounterTable'

export const ascPatient = {
  headingText: 'Tyler Dowdall',
  subtitle1Value: '05/15/1985',
  subtitle2Value: '100000',
  subtitle3Value: 'Dr. Sarah Jones',
} as const

export const ascFilterSummary =
  'Enc Type: All; Enc Date Range: 01/01/2016 - 11/18/2016; Provider: All'

export const ascProviderQueues = [
  { queueLabel: 'Mary Smith', count: 3 },
  { queueLabel: 'Trevor Anderson', count: 3 },
  { queueLabel: 'Shandra C', count: 3 },
] as const

export const ascEncounterRows: EncounterTableRow[] = [
  {
    encounterId: '100570',
    date: '11/12/2023',
    encounterType: '2 Eye Exam Ophthalmology',
    provider: 'MS',
    chiefComplaint: 'Injury to left eye',
    soc: 'success',
    measures: 'success',
    isLocked: 'Yes',
  },
  {
    encounterId: '100568',
    date: '11/09/2023',
    encounterType: 'Annual Exam',
    provider: 'TDA',
    chiefComplaint: 'Sore Eyes',
    soc: 'success',
    measures: 'na',
    isLocked: 'No',
  },
  {
    encounterId: '100350',
    date: '08/10/2023',
    encounterType: 'Cataract Post Op',
    provider: 'SC',
    chiefComplaint: 'Cloudy Vision for past 2–3 days',
    soc: 'success',
    measures: 'na',
    isLocked: 'No',
  },
  {
    encounterId: '100266',
    date: '07/12/2023',
    encounterType: 'Eye Exam Ophthalmology with CL',
    provider: 'MS',
    chiefComplaint: 'Headache and double vision',
    soc: 'success',
    measures: 'success',
    isLocked: 'No',
  },
  {
    encounterId: '100240',
    date: '07/01/2023',
    encounterType: '2 Eye Exam Ophthalmology',
    provider: 'TDA',
    chiefComplaint: 'Various colors flashes or floaters of unusual shapes',
    soc: 'success',
    measures: 'success',
    isLocked: 'Yes',
  },
  {
    encounterId: '100128',
    date: '05/08/2023',
    encounterType: 'Cataract Post Op',
    provider: 'SC',
    chiefComplaint: 'Eyes are red but pain free, may be conjunctivitis',
    soc: 'success',
    measures: 'success',
    isLocked: 'No',
  },
  {
    encounterId: '100046',
    date: '04/06/2023',
    encounterType: 'Annual Exam',
    provider: 'MS',
    chiefComplaint: 'Pain with eye movement',
    soc: 'error',
    measures: 'success',
    isLocked: 'No',
  },
]
