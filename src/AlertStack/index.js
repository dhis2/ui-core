import React from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'
import styles from './styles'
// import { AlertBar } from '../AlertBar'

const AlertStack = ({ className, children }) => (
    <div className={cx(className)}>
        {children}
        <style jsx>{styles}</style>
    </div>
)

export { AlertStack }
