import React from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'

import styles from './styles.js'

function CircularProgress({ size, overlay, className }) {
    const loader = (
        <div role="progressbar" className={cx('base', size, className)}>
            <svg viewBox="22 22 44 44">
                <circle
                    className={'circle'}
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

    if (overlay) {
        return (
            <div>
                {loader}
                <style jsx>{`
                    display: flex;
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    height: 100%;
                `}</style>
            </div>
        )
    }

    return loader
}

CircularProgress.defaultProps = {
    overlay: false,
    size: 'medium',
}

CircularProgress.propTypes = {
    className: propTypes.string,
    overlay: propTypes.bool,
    size: propTypes.oneOf(['small', 'medium', 'large']),
}

export { CircularProgress }
