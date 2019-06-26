import React from 'react'
import propTypes from 'prop-types'
import css from 'styled-jsx/css'

export const TableCellHead = ({ children, colSpan, rowSpan }) => (
    <th colSpan={colSpan} rowSpan={rowSpan}>
        <div>{children}</div>

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
}
