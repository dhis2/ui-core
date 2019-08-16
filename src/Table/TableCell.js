import React, { Fragment } from 'react'
import propTypes from 'prop-types'
import css from 'styled-jsx/css'

import { TableCellText } from './TableCellText.js'

const tableCellStyles = css`
    td {
        border-bottom: 1px solid #e8edf2;
        padding: 0 12px;
        font-size: 14px;
    }

    div {
        min-height: 45px;
    }

    :global(tfooter) div {
        min-height: 36px;
    }
`

export const TableCell = ({ children, colSpan, rowSpan }) => (
    <td colSpan={colSpan} rowSpan={rowSpan}>
        <div>
            <TableCellText>{children}</TableCellText>
        </div>

        <style jsx>{tableCellStyles}</style>
    </td>
)

TableCell.propTypes = {
    colSpan: propTypes.string,
    rowSpan: propTypes.string,
    children: propTypes.node,
}
