import React from 'react'
import css from 'styled-jsx/css'
import propTypes from 'prop-types'
import { instanceOfComponent } from '@dhis2/prop-types'

import { StackedTableCell } from './StackedTableCell.js'
import { StackedTableCellHead } from './StackedTableCellHead.js'
import { colors } from './theme.js'

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
        display: block;
        border: 1px solid #e8edf2;
    }

    tr:nth-child(even) {
        background: ${colors.white};
    }

    :global(thead) tr,
    :global(tbody) tr {
        min-height: 36px;
    }

    tr + tr {
        margin-top: 32px;
    }
`

export const StackedTableRow = ({ children, className }) => (
    <tr className={className}>
        {addColNumToChildren(children)}

        <style jsx>{tableRowStyles}</style>
    </tr>
)

const childPropType = propTypes.oneOfType([
    instanceOfComponent(StackedTableCell),
    instanceOfComponent(StackedTableCellHead),
])

StackedTableRow.propTypes = {
    children: propTypes.oneOfType([
        childPropType,
        propTypes.arrayOf(childPropType),
    ]).isRequired,
    className: propTypes.string,
}
