import React from 'react'
import propTypes from '@dhis2/prop-types'

/**
 * @module
 * @param {TableBody.PropTypes} props
 * @returns {React.Component}
 * @example import { TableBody } from '@dhis2/ui-core'
 * @see Live demo: {@link /demo/?path=/story/table--static-layout|Storybook}
 */
export const TableBody = ({ children, className }) => (
    <tbody className={className}>{children}</tbody>
)

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {TableRow|Array.<TableRow>} children
 * @prop {string} [className]
 */
TableBody.propTypes = {
    children: propTypes.node.isRequired,
    className: propTypes.string,
}
