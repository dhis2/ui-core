import React from 'react'
import propTypes from 'prop-types'
import css from 'styled-jsx/css'
import { instanceOfComponent } from '@dhis2/prop-types'

import { TableCell } from './TableCell.js'
import { TableCellHead } from './TableCellHead.js'

const tableRowStyles = css`
    tr:nth-child(even) {
        background: #fbfcfd;
    }
`

export const TableRow = ({ children, dense }) => (
    <tr>
        {children}

        <style jsx>{tableRowStyles}</style>
        <style jsx>{`
            tr {
                min-height: ${dense ? '36px' : '45px'};
            }
        `}</style>
    </tr>
)

const childPropType = propTypes.oneOfType([
    instanceOfComponent(TableCell),
    instanceOfComponent(TableCellHead),
])

TableRow.propTypes = {
    dense: propTypes.bool,
    children: propTypes.oneOfType([
        childPropType,
        propTypes.arrayOf(childPropType),
    ]).isRequired,
}
