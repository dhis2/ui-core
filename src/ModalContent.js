import React from 'react'
import propTypes from '@dhis2/prop-types'

import { spacers } from './theme.js'

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
                margin-bottom: ${spacers.dp32};
                overflow-y: auto;
                padding: 0 ${spacers.dp24};
            }

            div:first-child {
                padding-top: ${spacers.dp24};
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
