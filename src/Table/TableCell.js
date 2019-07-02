import React from 'react'
import propTypes from 'prop-types'
import css from 'styled-jsx/css'

import { Consumer } from './tableContext'

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

const TableCellStatic = ({ children, colSpan, rowSpan }) => (
    <td colSpan={colSpan} rowSpan={rowSpan}>
        <div>{children}</div>
        <style jsx>{tableCellStyles}</style>
    </td>
)

const TableCellResponsive = ({ children, colSpan, rowSpan, title }) => (
    <td colSpan={colSpan} rowSpan={rowSpan}>
        <div>{children}</div>
        <style jsx>{tableCellStyles}</style>
        <style jsx>{`
            @media (max-width: 768px) {
                td {
                    display: table-row;
                    width: 100%;
                }

                td:before {
                    content: '${title}:';
                    display: table-cell;
                    white-space: nowrap;
                    padding: 0 16px;
                    font-weight: bold;
                }

                :global(tfoot) td:before {
                    display: none;
                }

                div {
                    display: table-cell;
                    width: 100%;
                    padding: 0 16px;
                }
            }

            @media (max-width: 400px) {
                td {
                    display: block;
                }

                td:first-child {
                    margin-top: 0;
                }

                td:before {
                    display: block;
                    white-space: normal;
                    min-height: 24px;
                    line-height: 18px;
                    padding: 8px 0 0 0;
                }

                div {
                    display: block;
                    padding: 0;
                    min-height:32px;
                }
            }
        `}</style>
    </td>
)

export const TableCell = ({ children, title, colSpan, rowSpan }) => (
    <Consumer>
        {({ staticLayout }) => {
            const TableCellComponent = staticLayout
                ? TableCellStatic
                : TableCellResponsive

            return (
                <TableCellComponent
                    colSpan={colSpan}
                    rowSpan={rowSpan}
                    title={title}
                >
                    <div>{children}</div>
                </TableCellComponent>
            )
        }}
    </Consumer>
)

TableCell.propTypes = {
    title: propTypes.string,
    colSpan: propTypes.string,
    rowSpan: propTypes.string,
}
