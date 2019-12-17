import React from 'react'
import propTypes from '@dhis2/prop-types'

import { TableRow } from './TableRow.js'
;('') // TODO: https://github.com/jsdoc/jsdoc/issues/1718

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

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {TableCellHead|Array.<TableCellHead>} children
 * @prop {string} [className]
 */
TableRowHead.propTypes = {
    children: propTypes.node.isRequired,
    className: propTypes.string,
}
