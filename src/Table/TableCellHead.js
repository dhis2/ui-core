import React from 'react'
import propTypes from 'prop-types'
import css from 'styled-jsx/css'

const tableCellHeadStyles = css`
    th {
        border-bottom: 1px solid #e8edf2;
        font-size: 14px;
        line-height: 18px;
    }
`

export const TableCellHead = ({ children, colSpan, rowSpan, dense }) => (
    <th colSpan={colSpan} rowSpan={rowSpan}>
        {children}

        <style jsx>{tableCellHeadStyles}</style>
        <style jsx>{`
            th {
                padding: ${dense ? '9px 12px' : '13px 12px'};
                height: ${dense ? '36px' : '45px'};
            }
        `}</style>
    </th>
)

TableCellHead.propTypes = {
    colSpan: propTypes.string,
    dense: propTypes.bool,
    rowSpan: propTypes.string,
    label: propTypes.string,
    children: propTypes.node,
}
