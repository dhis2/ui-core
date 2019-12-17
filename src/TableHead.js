import React from 'react'
import propTypes from '@dhis2/prop-types'

/**
 * @module
 * @param {TableHead.PropTypes} props
 * @returns {React.Component}
 * @example import { TableHead } from '@dhis2/ui-core'
 * @see Live demo: {@link /demo/?path=/story/table--static-layout|Storybook}
 */
export const TableHead = ({ children, className }) => (
    <thead className={className}>{children}</thead>
)

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {TableRowHead|Array.<TableRowHead>} children
 * @prop {string} [className]
 */
TableHead.propTypes = {
    children: propTypes.node.isRequired,
    className: propTypes.string,
}
