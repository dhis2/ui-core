import React from 'react'

import { TableHead } from './TableHead'
import { TableRow } from './TableRow'
import { TableCellHead } from './TableCellHead'

const extractRowsFromTableChildren = children =>
    React.Children.toArray(children)
        // extract theads
        .filter(child => child.type === TableHead)

        // flatten rows
        .map(({ props }) => props.children)
        .reduce((flattened, row) => [...flattened, ...row], [])

        // map row to array of cell components
        .map(({ props }) => props.children)

const calculateColumnCount = row =>
    row.reduce(
        (total, col) =>
            col.props.colSpan
                ? total + parseInt(col.props.colSpan, 10)
                : total + 1,
        0
    )

const mapCellsToLabels = row => {
    let labels = []

    for (let i = 0, count = row.length; i < count; ++i) {
        const cell = row[i]
        const colSpan = cell.props.colSpan
            ? parseInt(cell.props.colSpan, 10)
            : 1
        const label = extractLabelFromCell(cell)

        labels = [...labels, ...Array(colSpan).fill(label)]
    }

    return labels
}

const extractLabelFromCell = cell =>
    !cell.props.hideResponsiveLabel ? cell.props.label : ''

const combineRowLables = (columnCount, rowCount, headerLabels) =>
    Array(columnCount)
        .fill('')
        .reduce((labels, _, colIndex) => {
            const colLabels = Array(rowCount)
                .fill('')
                .map((__, rowIndex) => headerLabels[rowIndex][colIndex])
                .filter(val => val) // remove empty ones

            return [...labels, colLabels.join(' / ')]
        }, [])

export const extractHeaderLabels = children => {
    if (React.Children.count(children) === 0) return []

    const rows = extractRowsFromTableChildren(children)

    if (!rows.length) return []

    const rowCount = rows.length
    const columnCount = calculateColumnCount(rows[0])
    const headerLabels = rows.map(mapCellsToLabels)

    return combineRowLables(columnCount, rowCount, headerLabels)
}
