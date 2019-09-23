import React from 'react'
import propTypes from 'prop-types'
import { instanceOfComponent } from '@dhis2/prop-types'

import { TableRow } from './TableRow.js'

/**
 * @module
 * @param {TableFoot.PropTypes} props
 * @returns {React.Component}
 * @example import { TableFoot } from '@dhis2/ui-core'
 * @see Live demo: {@link /demo/?path=/story/table--static-layout|Storybook}
 */
export const TableFoot = ({ children }) => <tfoot>{children}</tfoot>

const childPropType = instanceOfComponent(TableRow)

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {TableRow|Array.<TableRow>} children
 */
TableFoot.propTypes = {
    children: propTypes.oneOfType([
        childPropType,
        propTypes.arrayOf(childPropType),
    ]).isRequired,
}
