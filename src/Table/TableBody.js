import React from 'react'
import propTypes from 'prop-types'
import { instanceOfComponent } from '@dhis2/prop-types'

import { TableRow } from './TableRow.js'

/**
 * @module
 * @param {TableBody.PropTypes} props
 * @returns {React.Component}
 * @example import { TableBody } from '@dhis2/ui-core'
 * @see Live demo: {@link /demo/?path=/story/table--static-layout|Storybook}
 */
export const TableBody = ({ children }) => <tbody>{children}</tbody>

const childPropType = instanceOfComponent(TableRow)

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {TableRow|Array.<TableRow>} children
 */
TableBody.propTypes = {
    children: propTypes.oneOfType([
        childPropType,
        propTypes.arrayOf(childPropType),
    ]).isRequired,
}
