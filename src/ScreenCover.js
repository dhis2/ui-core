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
const ScreenCover = ({ children, onClick, className, dataTest }) => {
    return (
        <Backdrop
            onClick={onClick}
            zIndex={layers.blocking}
            className={className}
            dataTest={dataTest}
        >
            <Content>{children}</Content>
        </Backdrop>
    )
}

ScreenCover.defaultProps = {
    dataTest: 'dhis2-uicore-screencover',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {function} [onClick]
 * @prop {string} [className]
 * @prop {Node} [children]
 * @prop {string} [dataTest]
 */
ScreenCover.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
    onClick: propTypes.func,
}

export { ScreenCover }
