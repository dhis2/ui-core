import React from 'react'
import css from 'styled-jsx/css'
import propTypes from 'prop-types'

import { Consumer } from './tableContext'
import { TableCell } from './TableCell'
import { TableCellHead } from './TableCellHead'
import { instanceOfComponent } from '../prop-validators/instanceOfComponent'

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

const tableRowStyles = css`
    tr {
        min-height: 45px;
    }

    tr:nth-child(even) {
        background: #fbfcfd;
    }

    :global(thead) tr,
    :global(tbody) tr {
        min-height: 36px;
    }
`

const tableRowStylesResponsive = css`
    @media (max-width: 768px) {
        tr {
            display: table;
            width: 100%;
            border: 1px solid #e8edf2;
        }

        tr + tr {
            margin-top: 16px;
        }
    }

    @media (max-width: 400px) {
        tr {
            display: block;
        }

        tr:nth-child(even) {
            background: none;
        }

        tr + tr {
            margin-top: 32px;
        }

        tr:nth-child(even) :global(td) {
            background: #fbfcfd;
        }
    }
`

const TableRowStatic = ({ children }) => (
    <tr>
        {children}
        <style jsx>{tableRowStyles}</style>
    </tr>
)

const TableRowResponsive = ({ children }) => (
    <tr>
        {children}
        <style jsx>{tableRowStyles}</style>
        <style jsx>{tableRowStylesResponsive}</style>
    </tr>
)

export const TableRow = ({ children, headerRow }) => (
    <Consumer>
        {({ staticLayout }) => {
            const TableRowComponent = staticLayout
                ? TableRowStatic
                : TableRowResponsive
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
