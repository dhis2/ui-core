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
            width: 100%;
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
        {title && <span className="title">{title}</span>}
        <span className="content">{children}</span>

        <style jsx>{`
            .title {
                display: none;
            }

            .content {
                display: block;
            }

            @media (max-width: 768px) {
                .title {
                    display: block;
                    white-space: normal;
                    min-height: 24px;
                    line-height: 18px;
                    padding: 8px 0 0 0;
                    font-weight: bold;
                    white-space: nowrap;
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

// Leveraging on being able to return before creating the text component
// If not extracted, TableCellText will be created on every render
// and throw a warning as children is not a string
const getContent = children => {
    if (typeof children !== 'string') return children
    return <TableCellText label={children} />
}

export const TableCell = ({ children, colSpan, rowSpan, column }) => (
    <Consumer>
        {({ staticLayout, headerLabels }) => {
            const title = staticLayout ? '' : headerLabels[column]

            const TableCellComponent = staticLayout
                ? TableCellStatic
                : TableCellResponsive

            const content = getContent(children)

            return (
                <TableCellComponent
                    column={column}
                    colSpan={colSpan}
                    rowSpan={rowSpan}
                    title={title}
                >
                    {content}
                </TableCellComponent>
            )
        }}
    </Consumer>
)

TableCell.propTypes = {
    colSpan: propTypes.string,
    rowSpan: propTypes.string,
    column: propTypes.number,
}
