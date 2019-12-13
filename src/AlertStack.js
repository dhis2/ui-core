import React from 'react'
import { createPortal } from 'react-dom'
import propTypes from '@dhis2/prop-types'
import cx from 'classnames'

import { layers } from './theme.js'
;('') // TODO: https://github.com/jsdoc/jsdoc/issues/1718

/**
 * @module
 * @param {AlertStack.PropTypes} props
 * @returns {React.Component}
 * @example import { AlertStack } from '@dhis2/ui-core'
 * @see Live demo: {@link /demo/?path=/story/alertstack--default|Storybook}
 */
const AlertStack = ({ className, children }) =>
    createPortal(
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

                    z-index: ${layers.alert};

                    display: flex;
                    flex-direction: column-reverse;

                    pointer-events: none;
                }
            `}</style>
        </div>,
        document.body
    )

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {string} [className]
 * @prop {Array.<AlertBar>} [children]
 */
AlertStack.propTypes = {
    children: propTypes.arrayOf(propTypes.element),
    className: propTypes.string,
}

export { AlertStack }
