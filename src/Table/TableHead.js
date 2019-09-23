import React from 'react'
import propTypes from 'prop-types'
import { instanceOfComponent } from '@dhis2/prop-types'

import { TableRowHead } from './TableRowHead.js'

/**
 * @module
 * @param {TableHead.PropTypes} props
 * @returns {React.Component}
 * @example import { TableHead } from '@dhis2/ui-core'
 * @see Live demo: {@link /demo/?path=/story/table--static-layout|Storybook}
 */
export const TableHead = ({ children }) => <thead>{children}</thead>

const childPropType = instanceOfComponent(TableRowHead)

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {TableRowHead|Array.<TableRowHead>} children
 */
TableHead.propTypes = {
    children: propTypes.oneOfType([
        childPropType,
        propTypes.arrayOf(childPropType),
    ]).isRequired,
}
