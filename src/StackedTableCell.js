import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import propTypes from 'prop-types'

import { Consumer } from './StackedTable/TableContext.js'
import { colors } from './theme.js'

const tableCellStyles = css`
    td {
        border-bottom: 1px solid #e8edf2;
        padding: 0 12px;
        font-size: 14px;
        width: 100%;
        display: block;
    }

    td:last-child {
        border-bottom: 0;
    }
`

const ContentWithTitle = ({ title, children }) => (
    <Fragment>
        {title && <span className="title">{title}</span>}
        <span className="content">{children}</span>

        <style jsx>{`
            .title {
                display: block;
                white-space: normal;
                min-height: 24px;
                font-size: 13px;
                line-height: 16px;
                padding: 8px 0 4px;
                font-weight: normal;
                color: ${colors.grey700};
            }

            .content {
                display: block;
                padding: 0 0 8px 0;
                font-size: 14px;
                line-height: 18px;
            }

            .content:first-child {
                padding-top: 8px;
                padding-bottom: 8px;
            }
        `}</style>
    </Fragment>
)

ContentWithTitle.propTypes = {
    children: propTypes.oneOfType([
        propTypes.node,
        propTypes.arrayOf(propTypes.node),
    ]).isRequired,
    title: propTypes.string,
}

export const StackedTableCell = ({
    title,
    children,
    className,
    colSpan,
    rowSpan,
    column,
    hideTitle,
}) => (
    <>
        <Consumer>
            {({ headerLabels }) => {
                const cellTitle = title || headerLabels[column]
                const realTitle = hideTitle ? '' : cellTitle

                return (
                    <td
                        colSpan={colSpan}
                        rowSpan={rowSpan}
                        className={className}
                    >
                        <ContentWithTitle title={realTitle}>
                            {children}
                        </ContentWithTitle>
                    </td>
                )
            }}
        </Consumer>

        <style jsx>{tableCellStyles}</style>
    </>
)

StackedTableCell.propTypes = {
    children: propTypes.oneOfType([
        propTypes.node,
        propTypes.arrayOf(propTypes.node),
    ]).isRequired,
    className: propTypes.string,
    colSpan: propTypes.string,
    column: propTypes.number,
    hideTitle: propTypes.bool,
    rowSpan: propTypes.string,
    title: propTypes.string,
}
