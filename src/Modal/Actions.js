import React from 'react'
import propTypes from '@dhis2/prop-types'

import { spacers } from '../theme.js'

/**
 * @module
 *
 * @param {Actions.PropTypes} props
 * @returns {React.Component}
 */
export const Actions = ({ children }) => (
    <div>
        {children}

        <style jsx>{`
            div {
                padding: 0 ${spacers.dp24} ${spacers.dp24};
                display: flex;
                justify-content: flex-end;
            }
        `}</style>
    </div>
)

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {Object} children - Accepts one or more `Element`s
 */
Actions.propTypes = {
    children: propTypes.oneOfType([
        propTypes.element,
        propTypes.arrayOf(propTypes.element),
    ]).isRequired,
}
