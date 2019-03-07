import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './styles.js'
import { fonts } from '../colors.js'

function Circle() {
    return (
        <svg viewBox="22 22 44 44">
            <circle
                className={cx('circle')}
                cx="44"
                cy="44"
                r="20.2"
                fill="none"
                strokeWidth="3.6"
            />
        </svg>
    )
}

function CircularProgress({ size, overlay, className }) {
    const loader = (
        <div role="progressbar" className={cx('base', size, className)}>
            <Circle />
            <style jsx>{fonts}</style>
            <style jsx>{styles}</style>
        </div>
    )

    if (overlay) {
        return <div className={cx('overlay')}>{loader}</div>
    }

    return loader
}

CircularProgress.defaultProps = {
    overlay: false,
    size: 'medium',
}

CircularProgress.propTypes = {
    className: PropTypes.string,
    overlay: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
}

export { CircularProgress }
export default CircularProgress
