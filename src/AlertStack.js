import React from 'react'
import { createPortal } from 'react-dom'
import propTypes from 'prop-types'
import cx from 'classnames'
import { instanceOfComponent } from '@dhis2/prop-types'

import styles from './AlertStack/styles.js'
import { AlertBar } from './AlertBar.js'

/**
 * @module AlertStack
 * @param {PropTypes} props
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
 * @prop {string} [className]
 * @prop {Array.<AlertBar>} [children]
 */
AlertStack.propTypes = {
    className: propTypes.string,
    children: propTypes.arrayOf(instanceOfComponent(AlertBar)),
}

export { AlertStack }
