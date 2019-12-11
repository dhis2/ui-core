import React from 'react'
import propTypes from '@dhis2/prop-types'

import { colors, spacers } from './theme.js'
;('') // TODO: https://github.com/jsdoc/jsdoc/issues/1718

/**
 * @module
 * @param {Divider.PropTypes} props
 * @returns {React.Component}
 * @example import { Divider } from @dhis2/ui-core
 */
const Divider = ({ margin, className, dataTest }) => (
    <div className={className} data-test={dataTest}>
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
    dataTest: 'dhis2-uicore-divider',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {string} [className]
 * @prop {string} [margin="${spacers.dp8} 0"] - A CSS shorthand declaration for margin
 * @prop {string} [dataTest]
 */
Divider.propTypes = {
    className: propTypes.string,
    dataTest: propTypes.string,
    margin: propTypes.string,
}

export { Divider }
