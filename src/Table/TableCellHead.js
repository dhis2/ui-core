import React from 'react'
import propTypes from 'prop-types'
import css from 'styled-jsx/css'

import { TableCellText } from './TableCellText.js'

export const TableCellHead = ({ children, colSpan, rowSpan, label }) => (
    <th colSpan={colSpan} rowSpan={rowSpan}>
        <div>
            <TableCellText>{children}</TableCellText>
        </div>

        <style jsx>{`
            th {
                border-bottom: 1px solid #e8edf2;
                padding: 0 12px;
            }

            div {
                min-height: 36px;
            }
        `}</style>
    </th>
)

TableCellHead.propTypes = {
    colSpan: propTypes.string,
    rowSpan: propTypes.string,
    label: propTypes.string,
}
