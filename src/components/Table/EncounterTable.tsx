import type { CSSProperties, HTMLAttributes, ReactNode } from 'react'
import { useState } from 'react'
import { cssVars } from '@/tokens/cssVars'
import { spacing } from '@/tokens/spacing'

export type EncounterStatusIcon = 'success' | 'na' | 'error'

export type EncounterTableRow = {
  encounterId: string
  date: string
  encounterType: string
  provider: string
  chiefComplaint: string
  soc?: EncounterStatusIcon
  measures?: EncounterStatusIcon
  isLocked?: string
}

export type EncounterTableProps = {
  rows?: EncounterTableRow[]
  headerSlot?: ReactNode
  onDeleteRow?: (encounterId: string) => void
} & HTMLAttributes<HTMLDivElement>

const defaultRows: EncounterTableRow[] = [
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
]

const gridColumns =
  '32px 88px 104px minmax(140px, 1fr) 56px minmax(160px, 1.2fr) 52px 52px 72px 44px'

function TableCheckbox({
  checked,
  onChange,
  label,
}: {
  checked: boolean
  onChange: () => void
  label: string
}) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      aria-label={label}
      onClick={onChange}
      style={{
        display: 'inline-flex',
        width: 16,
        height: 16,
        borderRadius: 4,
        border: `${spacing.stroke1}px solid ${checked ? cssVars.borderTeal : cssVars.borderDefault}`,
        background: checked ? cssVars.bkgFocus : cssVars.panelWhite,
        boxSizing: 'border-box',
        padding: 0,
        cursor: 'pointer',
      }}
    />
  )
}

function StatusIcon({ status }: { status: EncounterStatusIcon }) {
  if (status === 'na') {
    return (
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 22,
          height: 22,
          borderRadius: 999,
          background: cssVars.iconMidGray,
          color: cssVars.panelWhite,
          fontSize: 9,
          fontWeight: 700,
          lineHeight: 1,
        }}
      >
        N/A
      </span>
    )
  }

  const isError = status === 'error'
  const bg = isError ? cssVars.iconError : cssVars.iconSuccess

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 22,
        height: 22,
        borderRadius: 999,
        background: bg,
        color: cssVars.panelWhite,
        fontSize: 12,
        fontWeight: 800,
        lineHeight: 1,
      }}
      aria-hidden
    >
      {isError ? '!' : '✓'}
    </span>
  )
}

function DeleteIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path
        d="M6.5 2h5l.5 1.5H15v1.5H3V3.5h3.5L7 2zm-1 4.5h9l-.75 9.5H6.25L5.5 6.5z"
        fill={cssVars.alertRed}
      />
    </svg>
  )
}

const headerCellStyle: CSSProperties = {
  fontSize: 12,
  fontWeight: 600,
  color: cssVars.labelDefault,
  lineHeight: 1.455,
}

const bodyCellStyle: CSSProperties = {
  fontSize: 14,
  fontWeight: 400,
  color: cssVars.txtDefault,
  lineHeight: 1.455,
}

export function EncounterTable({
  rows = defaultRows,
  headerSlot,
  onDeleteRow,
  ...rest
}: EncounterTableProps) {
  const [selected, setSelected] = useState<Set<string>>(() => new Set())

  const toggleRow = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const allSelected = rows.length > 0 && rows.every((r) => selected.has(r.encounterId))

  const toggleAll = () => {
    setSelected(allSelected ? new Set() : new Set(rows.map((r) => r.encounterId)))
  }

  const columnHeaders = [
    '',
    'Encounter ID',
    'Date',
    'Encounter Type',
    'Provider',
    'Chief Complaint',
    'Soc',
    'Measures',
    'Is Locked?',
    '',
  ] as const

  return (
    <div
      role="table"
      style={{
        width: '100%',
        borderRadius: 13,
        border: `1px solid ${cssVars.borderDefault}`,
        overflow: 'hidden',
        fontFamily: '"DM Sans", sans-serif',
      }}
      {...rest}
    >
      {headerSlot}
      <div role="rowgroup">
        <div
          role="row"
          style={{
            display: 'grid',
            gridTemplateColumns: gridColumns,
            gap: 8,
            alignItems: 'center',
            padding: '10px 12px',
            background: cssVars.tableHeaderBg,
            borderBottom: `1px solid ${cssVars.borderLight}`,
          }}
        >
          {columnHeaders.map((label, index) => (
            <span key={label || `col-${index}`} role="columnheader" style={headerCellStyle}>
              {index === 0 ? (
                <TableCheckbox
                  checked={allSelected}
                  onChange={toggleAll}
                  label="Select all encounters"
                />
              ) : (
                label
              )}
            </span>
          ))}
        </div>
        {rows.map((row, rowIndex) => {
          const rowBg = rowIndex % 2 === 1 ? cssVars.bkgInfo50 : cssVars.panelWhite
          return (
            <div
              key={row.encounterId}
              role="row"
              style={{
                display: 'grid',
                gridTemplateColumns: gridColumns,
                gap: 8,
                alignItems: 'center',
                padding: '10px 12px',
                background: rowBg,
                borderTop: rowIndex === 0 ? undefined : `1px solid ${cssVars.borderLight}`,
              }}
            >
              <span role="cell">
                <TableCheckbox
                  checked={selected.has(row.encounterId)}
                  onChange={() => toggleRow(row.encounterId)}
                  label={`Select encounter ${row.encounterId}`}
                />
              </span>
              <span
                role="cell"
                style={{
                  ...bodyCellStyle,
                  color: cssVars.linkTeal,
                  textDecoration: 'underline',
                  fontWeight: 500,
                  cursor: 'pointer',
                }}
              >
                {row.encounterId}
              </span>
              <span role="cell" style={bodyCellStyle}>
                {row.date}
              </span>
              <span role="cell" style={bodyCellStyle}>
                {row.encounterType}
              </span>
              <span role="cell" style={{ ...bodyCellStyle, fontWeight: 600 }}>
                {row.provider}
              </span>
              <span role="cell" style={bodyCellStyle}>
                {row.chiefComplaint}
              </span>
              <span role="cell" style={{ display: 'flex', justifyContent: 'center' }}>
                {row.soc ? <StatusIcon status={row.soc} /> : null}
              </span>
              <span role="cell" style={{ display: 'flex', justifyContent: 'center' }}>
                {row.measures ? <StatusIcon status={row.measures} /> : null}
              </span>
              <span role="cell" style={bodyCellStyle}>
                {row.isLocked}
              </span>
              <span role="cell" style={{ display: 'flex', justifyContent: 'center' }}>
                <button
                  type="button"
                  aria-label={`Delete encounter ${row.encounterId}`}
                  onClick={() => onDeleteRow?.(row.encounterId)}
                  style={{
                    border: 'none',
                    background: 'transparent',
                    padding: 4,
                    cursor: 'pointer',
                    display: 'inline-flex',
                  }}
                >
                  <DeleteIcon />
                </button>
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
