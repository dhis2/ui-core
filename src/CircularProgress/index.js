import React from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'

import styles from './styles.js'

const Overlay = ({ children }) => (
    <div>
        {children}
        <style jsx>{`
            div {
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
                background: rgba(0, 0, 0, 0.08);
            }
        `}</style>
    </div>
)

function CircularProgress({ small, large, overlay, className }) {
    const loader = (
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

    if (overlay) {
        return <Overlay>{loader}</Overlay>
    }

    return loader
}

CircularProgress.propTypes = {
    className: propTypes.string,

    overlay: propTypes.bool,
    small: propTypes.bool,
    large: propTypes.bool,
}

export { CircularProgress }
