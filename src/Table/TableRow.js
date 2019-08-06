import { instanceOfComponent } from '@dhis2/prop-types'
import React from 'react'
import css from 'styled-jsx/css'
import propTypes from 'prop-types'

import { Consumer } from './tableContext.js'
import { TableCell } from './TableCell.js'
import { TableCellHead } from './TableCellHead.js'
import { tableRowStyles, tableRowStylesStacked } from './styles.js'

const addColNumToChildren = children => {
    let curCol = 0

    return React.Children.map(children, child => {
        const column = curCol
        const colSpan = child.props.colSpan
            ? parseInt(child.props.colSpan, 10)
            : 1

        curCol += colSpan

        return React.cloneElement(child, { column })
    })
}

const TableRowStatic = ({ children }) => (
    <tr>
        {children}
        <style jsx>{tableRowStyles}</style>
    </tr>
)

const TableRowStacked = ({ children }) => (
    <tr>
        {children}
        <style jsx>{tableRowStyles}</style>
        <style jsx>{tableRowStylesStacked}</style>
    </tr>
)

export const TableRow = ({ children, headerRow }) => (
    <Consumer>
        {({ stackedLayout }) => {
            const TableRowComponent = stackedLayout
                ? TableRowStacked
                : TableRowStatic
            return (
                <TableRowComponent>
                    {addColNumToChildren(children)}
                </TableRowComponent>
            )
        }}
    </Consumer>
)

const childPropType = propTypes.oneOfType([
    instanceOfComponent(TableCell),
    instanceOfComponent(TableCellHead),
])

TableRow.propTypes = {
    children: propTypes.oneOfType([
        childPropType,
        propTypes.arrayOf(childPropType),
    ]).isRequired,
}
