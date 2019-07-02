import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import propTypes from 'prop-types'

import { Consumer } from './tableContext'
import { TableCellText } from './TableCellText'

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

const tableCellStylesResponsive = css`
    @media (max-width: 768px) {
        td {
            display: table-row;
            width: 100%;
        }
    }

    @media (max-width: 400px) {
        td {
            display: block;
        }
    }
`

const TableCellStatic = ({ children, colSpan, rowSpan }) => (
    <td colSpan={colSpan} rowSpan={rowSpan}>
        <div>{children}</div>
        <style jsx>{tableCellStyles}</style>
    </td>
)

const ContentWithTitle = ({ title, children }) => (
    <Fragment>
        {title && <td className="title">{title}</td>}

        <td className="content" colSpan={title ? '1' : '2'}>
            {children}
        </td>

        <style jsx>{`
            .title {
                display: none;
            }

            .content {
                display: block;
            }

            @media (max-width: 768px) {
                .title,
                .content {
                    display: table-cell;
                }

                .title {
                    white-space: nowrap;
                    padding: 0 16px;
                    font-weight: bold;
                }

                :global(tfoot) .title {
                    display: none;
                }

                .content {
                    display: table-cell;
                    width: 100%;
                    padding: 0 16px;
                }
            }

            @media (max-width: 400px) {
                .title {
                    display: block;
                    white-space: normal;
                    min-height: 24px;
                    line-height: 18px;
                    padding: 8px 0 0 0;
                }

                .content {
                    display: block;
                    padding: 0;
                    min-height: 32px;
                }

                .content:first-child {
                    padding-top: 8px;
                    padding-bottom: 8px;
                }
            }
        `}</style>
    </Fragment>
)

const TableCellResponsive = ({ children, colSpan, rowSpan, title }) => (
    <td colSpan={colSpan} rowSpan={rowSpan}>
        <ContentWithTitle title={title}>{children}</ContentWithTitle>

        <style jsx>{tableCellStyles}</style>
        <style jsx>{tableCellStylesResponsive}</style>
    </td>
)

export const TableCell = ({ children, noTitle, colSpan, rowSpan, column }) => (
    <Consumer>
        {({ staticLayout, headerLabels }) => {
            const title = noTitle || staticLayout ? '' : headerLabels[column]

            const TableCellComponent = staticLayout
                ? TableCellStatic
                : TableCellResponsive

            const content =
                typeof children === 'string' ? (
                    <TableCellText label={children} />
                ) : (
                    children
                )

            return (
                <TableCellComponent
                    column={column}
                    colSpan={colSpan}
                    rowSpan={rowSpan}
                    title={title}
                >
                    <div>{content}</div>
                </TableCellComponent>
            )
        }}
    </Consumer>
)

TableCell.propTypes = {
    noTitle: propTypes.bool,
    colSpan: propTypes.string,
    rowSpan: propTypes.string,
    column: propTypes.number,
}
