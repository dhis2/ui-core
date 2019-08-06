import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import propTypes from 'prop-types'

import { Consumer } from './tableContext.js'
import { TableCellText } from './TableCellText.js'
import {
    tableCellStyles,
    tableCellStylesStacked,
    tableCellTitleStyleStacked,
} from './styles.js'

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

        <style jsx>{tableCellTitleStyleStacked}</style>
    </Fragment>
)

const TableCellStacked = ({ children, colSpan, rowSpan, title }) => (
    <td colSpan={colSpan} rowSpan={rowSpan}>
        <ContentWithTitle title={title}>{children}</ContentWithTitle>

        <style jsx>{tableCellStyles}</style>
        <style jsx>{tableCellStylesStacked}</style>
    </td>
)

export const TableCell = ({ children, colSpan, rowSpan, column }) => (
    <Consumer>
        {({ stackedLayout, headerLabels }) => {
            const title = stackedLayout ? headerLabels[column] : ''

            const TableCellComponent = stackedLayout
                ? TableCellStacked
                : TableCellStatic

            return (
                <TableCellComponent
                    column={column}
                    colSpan={colSpan}
                    rowSpan={rowSpan}
                    title={title}
                >
                    <TableCellText>{children}</TableCellText>
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
