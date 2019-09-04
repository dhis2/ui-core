import React from 'react'
import propTypes from 'prop-types'
import css from 'styled-jsx/css'

const tableCellHeadStyles = css`
    th {
        border-bottom: 1px solid #e8edf2;
        padding: 9px 12px;
        font-size: 14px;
        line-height: 18px;
        height: 36px;
    }
`

export const TableCellHead = ({ children, colSpan, rowSpan, label }) => (
    <th colSpan={colSpan} rowSpan={rowSpan}>
        {children}

        <style jsx>{tableCellHeadStyles}</style>
    </th>
)

TableCellHead.propTypes = {
    colSpan: propTypes.string,
    rowSpan: propTypes.string,
    label: propTypes.string,
}
