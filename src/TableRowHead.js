import React from 'react'
import propTypes from '@dhis2/prop-types'

import { TableRow } from './TableRow.js'

/**
 * @module
 * @param {TableRowHead.PropTypes} props
 * @returns {React.Component}
 * @example import { TableRowHead } from '@dhis2/ui-core'
 * @see Live demo: {@link /demo/?path=/story/table--static-layout|Storybook}
 */
export const TableRowHead = ({ children, className, dataTest }) => (
    <TableRow className={className} dataTest={dataTest}>
        {children}
    </TableRow>
)

TableRowHead.defaultProps = {
    dataTest: 'dhis2-uicore-tablerowhead',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {TableCellHead|Array.<TableCellHead>} children
 * @prop {string} [className]
 */
TableRowHead.propTypes = {
    children: propTypes.oneOfType([
        propTypes.element,
        propTypes.arrayOf(propTypes.element),
    ]).isRequired,
    className: propTypes.string,
    dataTest: propTypes.string,
}
