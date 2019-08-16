import React from 'react'
import propTypes from 'prop-types'
import { instanceOfComponent } from '@dhis2/prop-types'

import { TableCellHead } from './TableCellHead'
import { TableRow } from './TableRow'

export const TableRowHead = props => <TableRow {...props} />

const childPropType = instanceOfComponent(TableCellHead)

TableRowHead.propTypes = {
    children: propTypes.oneOfType([
        childPropType,
        propTypes.arrayOf(childPropType),
    ]).isRequired,
}
