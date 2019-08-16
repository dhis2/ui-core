import React from 'react'
import propTypes from 'prop-types'
import css from 'styled-jsx/css'
import { instanceOfComponent } from '@dhis2/prop-types'

import { TableCell } from './TableCell.js'
import { TableCellHead } from './TableCellHead.js'

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

export const TableRow = ({ children }) => (
    <tr>
        {children}
        <style jsx>{tableRowStyles}</style>
    </tr>
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
