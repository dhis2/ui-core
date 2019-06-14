import React from 'react'
import { createPortal } from 'react-dom'
import propTypes from 'prop-types'
import cx from 'classnames'
import { instanceOfComponent } from '../prop-validators'
import styles from './styles'
import { AlertBar } from '../AlertBar'

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
