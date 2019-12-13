import React from 'react'
import propTypes from '@dhis2/prop-types'

import { spacers } from './theme.js'
;('') // TODO: https://github.com/jsdoc/jsdoc/issues/1718

/**
 * @module
 *
 * @param {ModalActions.PropTypes} props
 * @returns {React.Component}
 */
export const ModalActions = ({ children }) => (
    <div>
        {children}

        <style jsx>{`
            div {
                padding: 0 ${spacers.dp24} ${spacers.dp24} ${spacers.dp24};
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
ModalActions.propTypes = {
    children: propTypes.oneOfType([
        propTypes.element,
        propTypes.arrayOf(propTypes.element),
    ]).isRequired,
}
