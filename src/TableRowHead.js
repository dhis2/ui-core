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
export const TableRowHead = ({ children, className }) => (
    <TableRow className={className}>{children}</TableRow>
)

const childPropType = instanceOfComponent(TableCellHead)

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {TableCellHead|Array.<TableCellHead>} children
 * @prop {string} [className]
 */
TableRowHead.propTypes = {
    children: propTypes.oneOfType([
        childPropType,
        propTypes.arrayOf(childPropType),
    ]).isRequired,
    className: propTypes.string,
}
