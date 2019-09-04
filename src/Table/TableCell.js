import React, { Fragment } from 'react'
import propTypes from 'prop-types'
import css from 'styled-jsx/css'

const tableCellStyles = css`
    td {
        border-bottom: 1px solid #e8edf2;
        font-size: 14px;
        line-height: 18px;
    }
`

export const TableCell = ({ children, colSpan, rowSpan, dense }) => (
    <td colSpan={colSpan} rowSpan={rowSpan}>
        {children}

        <style jsx>{tableCellStyles}</style>
        <style jsx>{`
            td {
                padding: ${dense ? '9px 12px' : '13px 12px'};
                height: ${dense ? '36px' : '45px'};
            }
        `}</style>
    </td>
)

TableCell.propTypes = {
    colSpan: propTypes.string,
    dense: propTypes.bool,
    rowSpan: propTypes.string,
    children: propTypes.node,
}
