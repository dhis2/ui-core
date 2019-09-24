import React from 'react'
import propTypes from '@dhis2/prop-types'

import { spacers } from './theme.js'

/**
 * @module
 * @param {Field.PropTypes} props
 * @returns {React.Component}
 * @example import { Field } from @dhis2/ui-core
 * @see Live demo: {@link /demo/?path=/story/field--default|Storybook}
 */
const Field = ({ children }) => (
    <div>
        {children}
        <style jsx>{`
            div {
                margin: 0 0 ${spacers.dp16};
            }
        `}</style>
    </div>
)

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {Node} children
 */
Field.propTypes = {
    children: propTypes.node.isRequired,
}

export { Field }
