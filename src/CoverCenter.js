import React from 'react'
import propTypes from '@dhis2/prop-types'

/**
 * @module
 *
 * @param {CoverCenter.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { CoverCenter } from '@dhis2/ui-core'
 *
 * @see Live demo: {@link /demo/?path=/story/covercenter--default|Storybook}
 */
const CoverCenter = ({ children }) => (
    <div>
        {children}
        <style jsx>{`
            div {
                position: absolute;
                top: 50%;
                left: 50%;
                width: auto;
                height: auto;
                transform: translate(-50%, -50%);
            }
        `}</style>
    </div>
)

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {Node} [children]
 */
CoverCenter.propTypes = {
    children: propTypes.node,
}

export { CoverCenter }
