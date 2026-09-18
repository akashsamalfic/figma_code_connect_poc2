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
    encounterId: '100571',
    date: '10/28/2023',
    encounterType: 'Annual Exam',
    provider: 'TDA',
    chiefComplaint: 'Cloudy Vision for past 2–3 days',
    soc: 'success',
    measures: 'na',
    isLocked: 'No',
  },
  {
    encounterId: '100572',
    date: '09/15/2023',
    encounterType: 'Follow-up',
    provider: 'SC',
    chiefComplaint: 'Dry eyes',
    soc: 'success',
    measures: 'na',
    isLocked: 'Yes',
  },
  {
    encounterId: '100573',
    date: '08/02/2023',
    encounterType: '2 Eye Exam Ophthalmology',
    provider: 'MS',
    chiefComplaint: 'Blurred vision',
    soc: 'success',
    measures: 'success',
    isLocked: 'No',
  },
  {
    encounterId: '100574',
    date: '06/20/2023',
    encounterType: 'Contact Lens Fitting',
    provider: 'TDA',
    chiefComplaint: 'Sore Eyes',
    soc: 'success',
    measures: 'success',
    isLocked: 'Yes',
  },
  {
    encounterId: '100575',
    date: '05/10/2023',
    encounterType: 'Annual Exam',
    provider: 'SC',
    chiefComplaint: 'Routine check',
    soc: 'success',
    measures: 'success',
    isLocked: 'No',
  },
  {
    encounterId: '100576',
    date: '04/01/2023',
    encounterType: 'Follow-up',
    provider: 'MS',
    chiefComplaint: 'Post-op review',
    soc: 'error',
    measures: 'success',
    isLocked: 'No',
  },
]
