import React from 'react'
import propTypes from 'prop-types'

import { TableCellHead } from './TableCellHead'
import { TableRow } from './TableRow'
import { instanceOfComponent } from '../prop-validators/instanceOfComponent'

export const TableRowHead = props => <TableRow {...props} />

const childPropType = instanceOfComponent(TableCellHead)

TableRowHead.propTypes = {
    children: propTypes.oneOfType([
        childPropType,
        propTypes.arrayOf(childPropType),
    ]).isRequired,
}
