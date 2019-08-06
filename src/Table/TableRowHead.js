import React from 'react'
import propTypes from 'prop-types'
import { instanceOfComponent } from '@dhis2/prop-types'

import { TableCellHead } from './TableCellHead.js'
import { TableRow } from './TableRow.js'

export const TableRowHead = props => <TableRow {...props} />

const childPropType = instanceOfComponent(TableCellHead)

TableRowHead.propTypes = {
    children: propTypes.oneOfType([
        childPropType,
        propTypes.arrayOf(childPropType),
    ]).isRequired,
}
