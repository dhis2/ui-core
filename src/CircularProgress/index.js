import React from 'react'
import { createPortal } from 'react-dom'
import propTypes from 'prop-types'
import cx from 'classnames'

import styles from './styles.js'

const CircularProgress = ({ small, large, className }) => (
    <div
        role="progressbar"
        className={cx(className, {
            small,
            large,
        })}
    >
        <svg viewBox="22 22 44 44">
            <circle
                className="circle"
                cx="44"
                cy="44"
                r="20.2"
                fill="none"
                strokeWidth="3.6"
            />
        </svg>
        <style jsx>{styles}</style>
    </div>
)

CircularProgress.propTypes = {
    className: propTypes.string,
    small: propTypes.bool,
    large: propTypes.bool,
}

export { CircularProgress }
