import React from 'react'
import propTypes from '@dhis2/prop-types'
import { layers } from './theme.js'

/**
 * @module
 * @param {ComponentCover.PropTypes} props
 * @returns {React.Component}
 * @example import { ComponentCover } from @dhis2/ui-core
 * @see Live demo: {@link /demo/?path=/story/componentcover--circularloader|Storybook}
 */
const ComponentCover = ({ children, className }) => (
    <div className={className}>
        {children}
        <style jsx>{`
            div {
                display: flex;
                align-items: center;
                justify-content: center;

                position: absolute;

                height: inherit;
                width: inherit;

                z-index: ${layers.applicationTop - 1};
                background: rgba(33, 43, 54, 0.4);
            }
        `}</style>
    </div>
)

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {string} [className]
 * @prop {Node} [children]
 */
ComponentCover.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
}

export { ComponentCover }
