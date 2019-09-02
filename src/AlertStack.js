import React from 'react'
import { createPortal } from 'react-dom'
import propTypes from 'prop-types'
import cx from 'classnames'
import { instanceOfComponent } from '@dhis2/prop-types'

import styles from './AlertStack/styles.js'
import { AlertBar } from './AlertBar.js'

const AlertStack = ({ className, children }) =>
    createPortal(
        <div className={cx(className)}>
            {children}
            <style jsx>{styles}</style>
        </div>,
        document.body
    )

AlertStack.propTypes = {
    className: propTypes.string,
    children: propTypes.arrayOf(instanceOfComponent(AlertBar)),
}

export { AlertStack }
