import React, { Fragment } from 'react'
import propTypes from 'prop-types'
import css from 'styled-jsx/css'

const tableCellStyles = css`
    td {
        border-bottom: 1px solid #e8edf2;
        padding-left: 12px;
        padding-right: 12px;
        height: 45px;
        font-size: 14px;
        line-height: 18px;
    }

    :global(tbody) td {
        padding-top: 13px;
        padding-bottom: 13px;
    }

    :global(tfoot) td {
        height: 36px;
        padding-top: 9px;
        padding-bottom: 9px;
    }
`

export const TableCell = ({ children, colSpan, rowSpan }) => (
    <td colSpan={colSpan} rowSpan={rowSpan}>
        {children}

        <style jsx>{tableCellStyles}</style>
    </td>
)

TableCell.propTypes = {
    colSpan: propTypes.string,
    rowSpan: propTypes.string,
    children: propTypes.node,
}
