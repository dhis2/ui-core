import React from 'react'
import propTypes from '@dhis2/prop-types'

import { layers } from './theme.js'

const Backdrop = ({ onClick }) => (
    <div className="backdrop" onClick={onClick}>
        <style jsx>{`
            div {
                height: 100%;
                width: 100%;

                background: rgba(33, 43, 54, 0.4);
            }
        `}</style>
    </div>
)
Backdrop.propTypes = {
    onClick: propTypes.func,
}

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
const ScreenCover = ({ children, onClick, className }) => (
    <div className={className}>
        <Backdrop onClick={onClick} />
        <Content>{children}</Content>

        <style jsx>{`
            div {
                position: fixed;
                height: 100%;
                width: 100%;

                left: 0;
                top: 0;

                z-index: ${layers.blocking};
            }
        `}</style>
    </div>
)

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
}

export { ScreenCover }
