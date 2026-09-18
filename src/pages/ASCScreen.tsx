import { useCallback, useMemo, useState } from 'react'
import { figmaAssets } from '@/assets/figma'
import { Button } from '@/components/Button/Button'
import { DatePicker } from '@/components/DatePicker/DatePicker'
import { DropDown } from '@/components/DropDown/DropDown'
import type { EHRNavPrimaryId, EHRNavSecondaryId } from '@/components/EHRNavBar/EHRNavBarEncounterHistory'
import { EHRNavBar } from '@/components/EHRNavBar/EHRNavBar'
import { FilterFieldRow } from '@/components/FilterFieldRow/FilterFieldRow'
import { LeftQuickSearchPanel } from '@/components/LeftQuickSearchPanel/LeftQuickSearchPanel'
import { PatientDetailsBanner } from '@/components/PatientDetailsBanner/PatientDetailsBanner'
import { QuickSearchQueue } from '@/components/QuickSearchQueue/QuickSearchQueue'
import { EncounterTable } from '@/components/Table/EncounterTable'
import {
  ascEncounterRows,
  ascPatient,
  ascProviderQueues,
} from '@/mock/ascEncounterHistoryMock'
import { cssVars } from '@/tokens/cssVars'
import { spacing } from '@/tokens/spacing'
import { typography } from '@/tokens/typography'

const encTypeOptions = [
  { value: '', label: 'All' },
  { value: 'eye-exam', label: '2 Eye Exam Ophthalmology' },
  { value: 'annual', label: 'Annual Exam' },
  { value: 'follow-up', label: 'Follow-up' },
] as const

const providerOptions = [
  { value: '', label: 'All' },
  { value: 'MS', label: 'Mary Smith' },
  { value: 'TDA', label: 'Trevor Anderson' },
  { value: 'SC', label: 'Shandra C' },
] as const

function buildFilterSummary(encType: string, encDate: string, provider: string): string {
  const typeLabel =
    encTypeOptions.find((o) => o.value === encType)?.label ?? 'All'
  const providerLabel =
    providerOptions.find((o) => o.value === provider)?.label ?? 'All'
  const dateLabel = encDate
    ? (() => {
        const [y, m, d] = encDate.split('-')
        return `${m}/${d}/${y}`
      })()
    : 'All'
  const range = encDate ? `${dateLabel} - ${dateLabel}` : '01/01/2016 - 11/18/2016'
  return `Enc Type: ${typeLabel}; Enc Date Range: ${range}; Provider: ${providerLabel}`
}

export function ASCScreen() {
  const [panelCollapsed, setPanelCollapsed] = useState(false)
  const [encType, setEncType] = useState('')
  const [encDate, setEncDate] = useState('')
  const [provider, setProvider] = useState('')
  const [appliedSummary, setAppliedSummary] = useState(buildFilterSummary('', '', ''))
  const [favoriteFilters, setFavoriteFilters] = useState(false)
  const [pinFilters, setPinFilters] = useState(false)
  const [selectedQueue, setSelectedQueue] = useState<string | null>(null)
  const [activePrimary, setActivePrimary] = useState<EHRNavPrimaryId>('encounters')
  const [activeSecondary, setActiveSecondary] = useState<EHRNavSecondaryId>('encounter-hx')
  const [rows, setRows] = useState(ascEncounterRows)

  const filteredRows = useMemo(() => {
    return rows.filter((row) => {
      if (provider && row.provider !== provider) return false
      if (encType === 'annual' && !row.encounterType.toLowerCase().includes('annual')) return false
      if (encType === 'follow-up' && !row.encounterType.toLowerCase().includes('follow')) return false
      if (encType === 'eye-exam' && !row.encounterType.toLowerCase().includes('eye exam')) return false
      return true
    })
  }, [rows, provider, encType])

  const applyFilters = useCallback(() => {
    setAppliedSummary(buildFilterSummary(encType, encDate, provider))
  }, [encType, encDate, provider])

  const clearFilters = useCallback(() => {
    setEncType('')
    setEncDate('')
    setProvider('')
    setAppliedSummary(buildFilterSummary('', '', ''))
    setFavoriteFilters(false)
    setPinFilters(false)
  }, [])

  return (
    <div
      data-name="ASC"
      style={{
        minHeight: '100vh',
        width: '100%',
        background: cssVars.canvas,
        display: 'flex',
        flexDirection: 'column',
        fontFamily: typography.sbh3Regular.fontFamily,
      }}
    >
      <EHRNavBar
        preset="encounter-history"
        encounterHistoryNav={{
          activePrimary,
          activeSecondary,
          onPrimaryChange: setActivePrimary,
          onSecondaryChange: setActiveSecondary,
        }}
      />

      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'flex-start',
          width: '100%',
          minHeight: 834,
          background: cssVars.canvas,
        }}
      >
        <div style={{ padding: spacing.sm, flexShrink: 0 }}>
          <LeftQuickSearchPanel
            type="Card+ Queue"
            collapsed={panelCollapsed}
            onToggleCollapse={() => setPanelCollapsed((c) => !c)}
          >
            <PatientDetailsBanner
              color="Teal"
              size="Small"
              headingText={ascPatient.headingText}
              subtitle1="DOB"
              subtitle1Value="05/15/1985"
              dobAgeSuffix="(38)"
              subtitle2="ID:"
              subtitle2Value={ascPatient.subtitle2Value}
              subtitle3="Prov:"
              subtitle3Value="Dr.Sarah Jones"
            />

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: spacing.sm,
                padding: `${spacing.sm}px 0`,
              }}
            >
              <FilterFieldRow label="Enc Type">
                <DropDown
                  layout="inline"
                  controlWidth={218}
                  value={encType}
                  onChange={(e) => setEncType(e.target.value)}
                  options={[...encTypeOptions]}
                />
              </FilterFieldRow>
              <FilterFieldRow label="Enc Date">
                <DatePicker
                  layout="inline"
                  controlWidth={141}
                  value={encDate}
                  onValueChange={setEncDate}
                  placeholderText="All"
                />
              </FilterFieldRow>
              <FilterFieldRow label="Provider">
                <DropDown
                  layout="inline"
                  controlWidth={218}
                  value={provider}
                  onChange={(e) => setProvider(e.target.value)}
                  options={[...providerOptions]}
                />
              </FilterFieldRow>
            </div>

            <div
              style={{
                borderTop: `${spacing.strokeXsm}px solid ${cssVars.borderDefault}`,
                padding: `0 ${spacing.md}px`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: spacing.sm,
                minHeight: 51,
              }}
            >
              <Button btnType="PrimaryBtn" size="Small" label="GO" onClick={applyFilters} />
              <div style={{ display: 'flex', alignItems: 'center', gap: spacing.sm }}>
                <Button
                  btnType="SecondaryBtn"
                  size="Small"
                  icon="Alone"
                  label="Clear filters"
                  onClick={clearFilters}
                  iconNode={<img src={figmaAssets.iconClear16} alt="" width={16} height={16} />}
                />
                <Button
                  btnType="SecondaryBtn"
                  size="Small"
                  icon="Alone"
                  label="Favorite filters"
                  pressed={favoriteFilters}
                  onClick={() => setFavoriteFilters((f) => !f)}
                  iconNode={<img src={figmaAssets.iconStar16} alt="" width={16} height={16} />}
                />
                <Button
                  btnType="SecondaryBtn"
                  size="Small"
                  icon="Alone"
                  label="Pin filters"
                  pressed={pinFilters}
                  onClick={() => setPinFilters((p) => !p)}
                  iconNode={<img src={figmaAssets.iconPin16} alt="" width={16} height={16} />}
                />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.xs }}>
              <span style={typography.sbh3ExtraBold}>Per Provider</span>
              {ascProviderQueues.map((queue) => (
                <QuickSearchQueue
                  key={queue.queueLabel}
                  queueLabel={queue.queueLabel}
                  count={queue.count}
                  selected={selectedQueue === queue.queueLabel}
                  onClick={() => {
                    setSelectedQueue(queue.queueLabel)
                    const map: Record<string, string> = {
                      'Mary Smith': 'MS',
                      'Trevor Anderson': 'TDA',
                      'Shandra C': 'SC',
                    }
                    const code = map[queue.queueLabel] ?? ''
                    setProvider(code)
                    setAppliedSummary(buildFilterSummary(encType, encDate, code))
                  }}
                />
              ))}
            </div>
          </LeftQuickSearchPanel>
        </div>

        <div
          style={{
            flex: 1,
            minWidth: 0,
            display: 'flex',
            flexDirection: 'column',
            padding: `0 ${spacing.lg}px ${spacing.xs}px`,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.md, width: '100%' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                gap: spacing.md,
                padding: `${spacing.fullPadding}px ${spacing.lg}px 0`,
              }}
            >
              <Button btnType="SecondaryBtn" size="Small" label="View eHealth Info" />
              <Button btnType="PrimaryBtn" size="Small" label="Add Encounter" />
            </div>

            <div
              style={{
                background: cssVars.panelWhite,
                borderRadius: spacing.inputRadius,
                padding: spacing.sm,
                display: 'flex',
                flexDirection: 'column',
                gap: spacing.md,
                width: '100%',
                boxSizing: 'border-box',
              }}
            >
              <div style={{ padding: `0 ${spacing.sm}px` }}>
                <h2 style={{ ...typography.h6, margin: 0 }}>
                  ALL ENCOUNTERS ({filteredRows.length})
                </h2>
                <p style={{ ...typography.sbh2Regular16, margin: `${spacing.xs}px 0 0` }}>
                  {appliedSummary}
                </p>
              </div>

              <div style={{ borderRadius: spacing.inputRadius, overflow: 'hidden', width: '100%' }}>
                <EncounterTable
                  rows={filteredRows}
                  onDeleteRow={(encounterId) =>
                    setRows((prev) => prev.filter((r) => r.encounterId !== encounterId))
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
