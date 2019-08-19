import React, { Fragment } from 'react'
import propTypes from 'prop-types'
import css from 'styled-jsx/css'

const tableCellStyles = css`
    td {
        border-bottom: 1px solid #e8edf2;
        padding: 0 12px;
    }

    div {
        min-height: 45px;
        font-size: 14px;
        line-height: 18px;
    }

    :global(tbody) div {
        padding: 13px 0;
    }

    :global(tfooter) div {
        min-height: 36px;
        padding: 9px 0;
    }
`

export const TableCell = ({ children, colSpan, rowSpan }) => (
    <td colSpan={colSpan} rowSpan={rowSpan}>
        <div>{children}</div>

        <style jsx>{tableCellStyles}</style>
    </td>
)

TableCell.propTypes = {
    colSpan: propTypes.string,
    rowSpan: propTypes.string,
    children: propTypes.node,
}
