import React from 'react'
import propTypes from '@dhis2/prop-types'

import { Backdrop } from './Backdrop.js'
import { CoverCenter } from './CoverCenter.js'
import { layers } from './theme.js'

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
const ScreenCover = ({ children, onClick, className }) => {
    return (
        <Backdrop
            onClick={onClick}
            zIndex={layers.blocking}
            className={className}
        >
            <CoverCenter>{children}</CoverCenter>
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
    children: propTypes.node,
    className: propTypes.string,
    onClick: propTypes.func,
}

export { ScreenCover }
