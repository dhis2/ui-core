import React from 'react'
import { createPortal } from 'react-dom'
import propTypes from '@dhis2/prop-types'
import cx from 'classnames'

import styles from './AlertStack/styles.js'
import { AlertBar } from './AlertBar.js'

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
            <style jsx>{styles}</style>
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
    className: propTypes.string,
    children: propTypes.arrayOf(propTypes.instanceOfComponent(AlertBar)),
}

export { AlertStack }
