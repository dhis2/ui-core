import React from 'react'
import propTypes from '@dhis2/prop-types'

import { Backdrop } from './Backdrop.js'
import { layers } from './theme.js'

const Content = ({ children }) => (
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
Content.propTypes = {
    children: propTypes.node,
}

/**
 * @module
 *
 * @param {ScreenCover.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { ScreenCover } from '@dhis2/ui-core'
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/principles/spacing-alignment.md#stacking|Design system}
 * @see Live demo: {@link /demo/?path=/story/screencover--default|Storybook}
 */
const ScreenCover = ({ children, onClick, className, zIndex }) => {
    return (
        <Backdrop
            onClick={onClick}
            zIndex={zIndex || layers.blocking}
            className={className}
        >
            <Content>{children}</Content>
        </Backdrop>
    )
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {function} [onClick]
 * @prop {string} [className]
 * @prop {Node} [children]
 */
ScreenCover.propTypes = {
    onClick: propTypes.func,
    className: propTypes.string,
    children: propTypes.node,
    zIndex: propTypes.number,
}

export { ScreenCover }
