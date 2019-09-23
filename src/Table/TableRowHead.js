import React from 'react'
import propTypes from 'prop-types'
import { instanceOfComponent } from '@dhis2/prop-types'

import { TableCellHead } from './TableCellHead.js'
import { TableRow } from './TableRow.js'

/**
 * @module
 * @param {TableRowHead.PropTypes} props
 * @returns {React.Component}
 * @example import { TableRowHead } from '@dhis2/ui-core'
 * @see Live demo: {@link /demo/?path=/story/table--static-layout|Storybook}
 */
export const TableRowHead = props => <TableRow {...props} />

const childPropType = instanceOfComponent(TableCellHead)

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {TableCellHead|Array.<TableCellHead>} children
 */
TableRowHead.propTypes = {
    children: propTypes.oneOfType([
        childPropType,
        propTypes.arrayOf(childPropType),
    ]).isRequired,
}
