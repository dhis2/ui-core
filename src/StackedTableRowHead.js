import React from 'react'
import propTypes from 'prop-types'
import { instanceOfComponent } from '@dhis2/prop-types'

import { StackedTableCellHead } from './StackedTableCellHead.js'
import { StackedTableRow } from './StackedTableRow.js'

export const StackedTableRowHead = props => <StackedTableRow {...props} />

const childPropType = instanceOfComponent(StackedTableCellHead)

StackedTableRowHead.propTypes = {
    ...StackedTableRow.propTypes,
    children: propTypes.oneOfType([
        childPropType,
        propTypes.arrayOf(childPropType),
    ]).isRequired,
}
