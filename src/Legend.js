import React from 'react'
import propTypes from '@dhis2/prop-types'
import cx from 'classnames'

import { colors, spacers } from './theme.js'

/**
 * @module
 * @param {Legend.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { Legend } from '@dhis2/ui-core'
 *
 * @see Live demo: {@link /demo/?path=/story/legend--default|Storybook}
 */
const Legend = ({ className, children, required }) => (
    <legend className={cx(className, { required })}>
        {children}
        <style jsx>{`
            legend {
                font-size: 14px;
                line-height: 16px;
                color: ${colors.grey900};
            }
            legend.required::after {
                padding-left: ${spacers.dp4};
                content: '*';
            }
        `}</style>
    </legend>
)

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {Node} children
 * @prop {string} [className]
 * @prop {boolean} [required]
 */
Legend.propTypes = {
    children: propTypes.node.isRequired,
    className: propTypes.string,
    required: propTypes.bool,
}

export { Legend }
