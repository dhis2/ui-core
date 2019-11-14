import React from 'react'
import { createPortal } from 'react-dom'
import propTypes from '@dhis2/prop-types'
import cx from 'classnames'

import { layers } from './theme.js'
import { useLayerBasedZindex } from './LayerContext.js'

/**
 * @module
 * @param {AlertStack.PropTypes} props
 * @returns {React.Component}
 * @example import { AlertStack } from '@dhis2/ui-core'
 * @see Live demo: {@link /demo/?path=/story/alertstack--default|Storybook}
 */
const AlertStack = ({ className, children, zIndex }) => {
    const computedZIndex = useLayerBasedZindex(zIndex, layers.alert)

    return createPortal(
        <div className={cx(className)}>
            {children}
            <style jsx>{`
                div {
                    position: fixed;
                    top: auto;
                    right: auto;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%);

                    z-index: ${computedZIndex};

                    display: flex;
                    flex-direction: column-reverse;

                    pointer-events: none;
                }
            `}</style>
        </div>,
        document.body
    )
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {string} [className]
 * @prop {Array.<AlertBar>} [children]
 */
AlertStack.propTypes = {
    className: propTypes.string,
    children: propTypes.arrayOf(propTypes.element),
    zIndex: propTypes.number,
}

export { AlertStack }
