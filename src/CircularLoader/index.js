import React from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'

import styles from './styles.js'

const CircularLoader = ({ small, large, className }) => (
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

CircularLoader.propTypes = {
    className: propTypes.string,
    small: propTypes.bool,
    large: propTypes.bool,
}

export { CircularLoader }
