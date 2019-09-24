import React from 'react'
import propTypes from '@dhis2/prop-types'

import { colors, spacers } from './theme.js'

/**
 * @module
 * @param {Divider.PropTypes} props
 * @returns {React.Component}
 * @example import { Divider } from @dhis2/ui-core
 */
const Divider = ({ margin, className }) => (
    <div className={className}>
        <style jsx>{`
            div {
                display: inline-block;
                width: 100%;
                height: 1px;
                background-color: ${colors.grey300};
            }
        `}</style>
        <style jsx>{`
            div {
                margin: ${margin};
            }
        `}</style>
    </div>
)

Divider.defaultProps = {
    margin: `${spacers.dp8} 0`,
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {string} [className]
 * @prop {string} [margin="${spacers.dp8} 0"] - A CSS shorthand declaration for margin
 */
Divider.propTypes = {
    className: propTypes.string,
    margin: propTypes.string,
}

export { Divider }
