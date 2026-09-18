import { Button } from '@/components/Button/Button'
import { DatePicker } from '@/components/DatePicker/DatePicker'
import { DropDown } from '@/components/DropDown/DropDown'
import { EHRNavBar } from '@/components/EHRNavBar/EHRNavBar'
import { LeftQuickSearchPanel } from '@/components/LeftQuickSearchPanel/LeftQuickSearchPanel'
import { PatientDetailsBanner } from '@/components/PatientDetailsBanner/PatientDetailsBanner'
import { QuickSearchQueue } from '@/components/QuickSearchQueue/QuickSearchQueue'
import { EncounterTable } from '@/components/Table/EncounterTable'
import { IconClear, IconPin, IconStar } from '@/icons/AscFilterIcons'
import {
  ascEncounterRows,
  ascFilterSummary,
  ascPatient,
  ascProviderQueues,
} from '@/mock/ascEncounterHistoryMock'
import { cssVars } from '@/tokens/cssVars'

const screenFont = '"DM Sans", sans-serif'

export function ASCScreen() {
  return (
    <div
      data-name="ASC"
      style={{
        minHeight: '100vh',
        width: '100%',
        background: cssVars.canvas,
        display: 'flex',
        flexDirection: 'column',
        fontFamily: screenFont,
      }}
    >
      <EHRNavBar preset="encounter-history" />

      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          background: cssVars.canvas,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            width: '100%',
            minHeight: 834,
          }}
        >
          <div style={{ padding: 8, flexShrink: 0 }}>
            <LeftQuickSearchPanel type="Card+ Queue">
              <PatientDetailsBanner
                color="Teal"
                size="Small"
                headingText={ascPatient.headingText}
                subtitle1="DOB"
                subtitle1Value={ascPatient.subtitle1Value}
                showAge
                ageValue="38"
                subtitle2="Patient ID"
                subtitle2Value={ascPatient.subtitle2Value}
                subtitle3="Primary Provider"
                subtitle3Value={ascPatient.subtitle3Value}
              />

              <DropDown fieldLabel="Enc Type" textAreaLabel placeholderText="All" />
              <DatePicker fieldLabel="Enc Date" placeholderText="All" size="Small" />
              <DropDown fieldLabel="Provider" textAreaLabel placeholderText="All" />

              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 4 }}>
                <Button btnType="PrimaryBtn" size="Small" label="GO" />
                <Button
                  btnType="SecondaryBtn"
                  size="Small"
                  icon="Alone"
                  label="Clear filters"
                  iconNode={<IconClear />}
                />
                <Button
                  btnType="SecondaryBtn"
                  size="Small"
                  icon="Alone"
                  label="Favorite"
                  iconNode={<IconStar />}
                />
                <Button
                  btnType="SecondaryBtn"
                  size="Small"
                  icon="Alone"
                  label="Pin"
                  iconNode={<IconPin />}
                />
              </div>

              <div
                style={{
                  marginTop: 8,
                  fontSize: 12,
                  fontWeight: 600,
                  color: cssVars.labelDefault,
                }}
              >
                Per Provider
              </div>
              {ascProviderQueues.map((queue) => (
                <QuickSearchQueue
                  key={queue.queueLabel}
                  queueLabel={queue.queueLabel}
                  count={queue.count}
                />
              ))}
            </LeftQuickSearchPanel>
          </div>

          <div
            style={{
              flex: 1,
              minWidth: 0,
              display: 'flex',
              flexDirection: 'column',
              padding: '0 16px 4px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                width: '100%',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  gap: 12,
                  padding: '10px 16px 0',
                }}
              >
                <Button btnType="SecondaryBtn" size="Small" label="View eHealth Info" />
                <Button btnType="PrimaryBtn" size="Small" label="Add Encounter" />
              </div>

              <div
                style={{
                  background: cssVars.panelWhite,
                  borderRadius: 13,
                  padding: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                  width: '100%',
                  boxSizing: 'border-box',
                }}
              >
                <div style={{ padding: '0 8px' }}>
                  <h2
                    style={{
                      margin: 0,
                      fontSize: 20,
                      fontWeight: 600,
                      lineHeight: 1.455,
                      color: cssVars.labelDefault,
                    }}
                  >
                    ALL ENCOUNTERS ({ascEncounterRows.length})
                  </h2>
                  <p
                    style={{
                      margin: '4px 0 0',
                      fontSize: 16,
                      fontWeight: 400,
                      lineHeight: 1.455,
                      color: cssVars.txtSectionHeader,
                    }}
                  >
                    {ascFilterSummary}
                  </p>
                </div>

                <div style={{ borderRadius: 13, overflow: 'hidden', width: '100%' }}>
                  <EncounterTable rows={ascEncounterRows} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
