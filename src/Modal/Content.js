import React from 'react'
import propTypes from 'prop-types'

import { spacers } from '../theme.js'

/**
 * @module
 *
 * @param {Content.PropTypes} props
 * @returns {React.Component}
 */
export const Content = ({ children, className }) => (
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
Content.propTypes = {
    children: propTypes.node.isRequired,
    className: propTypes.string,
}
