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

function CircularProgress({ size, center }) {
    const loader = (
        <div role="progressbar" className={s('container', size)}>
            <Circle />
        </div>
    )

    if (center) {
        return <div className={s('overlay')}>{loader}</div>
    }

    return loader
}

CircularProgress.propTypes = {
    center: PropTypes.bool,
    size: PropTypes.oneOf(['large', 'medium', 'small']),
}

CircularProgress.defaultProps = {
    size: 'medium',
}

export { CircularProgress }
export default CircularProgress
