import { instanceOfComponent } from '@dhis2/prop-types'
import React from 'react'
import css from 'styled-jsx/css'
import propTypes from 'prop-types'

import { Consumer } from './tableContext'
import { TableCell } from './TableCell'
import { TableCellHead } from './TableCellHead'
import { colors, spacers } from '../theme'

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
        background: ${colors.grey050};
    }

    :global(tbody) tr:hover {
        background: ${colors.blue050};
    }

    :global(thead) tr,
    :global(tbody) tr {
        min-height: 36px;
    }
`

const tableRowStylesResponsive = css`
    @media (max-width: 768px) {
        tr {
            display: block;
            border: 1px solid ${colors.grey300};
        }

        tr:nth-child(even) {
            background: none;
        }

        :global(tbody) tr:hover {
            background: none;
        }

        tr + tr {
            margin-top: ${spacers.dp32};
        }

        tr:nth-child(even) :global(td) {
            background: ${colors.grey050};
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
