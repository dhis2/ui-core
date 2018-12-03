import React from 'react'
import PropTypes from 'prop-types'
import s from './styles'

function Circle() {
    return (
        <svg viewBox="22 22 44 44">
            <circle
                className={s('circle')}
                cx="44"
                cy="44"
                r="20.2"
                fill="none"
                strokeWidth="3.6"
            />
        </svg>
    )
}

function CircularProgress({ size, overlay }) {
    const loader = (
        <div role="progressbar" className={s('reset', 'base', size)}>
            <Circle />
        </div>
    )

    if (overlay) {
        return <div className={s('reset', 'overlay')}>{loader}</div>
    }

    return loader
}

CircularProgress.defaultProps = {
    size: 'medium',
}

CircularProgress.propTypes = {
    overlay: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
}

export { CircularProgress }
export default CircularProgress
