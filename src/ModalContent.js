import React from 'react'
import propTypes from '@dhis2/prop-types'

import { spacers } from './theme.js'
;('') // TODO: https://github.com/jsdoc/jsdoc/issues/1718

/**
 * @module
 *
 * @param {ModalContent.PropTypes} props
 * @returns {React.Component}
 */
export const ModalContent = ({ children, className }) => (
    <div className={className}>
        {children}

        <style jsx>{`
            div {
                flex-grow: 1;
                margin: ${spacers.dp24} 0;
                padding: 0 ${spacers.dp24};
                overflow-y: auto;
            }
        `}</style>
    </div>
)

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {Node} children
 * @prop {string} [className]
 */
ModalContent.propTypes = {
    children: propTypes.node.isRequired,
    className: propTypes.string,
}
