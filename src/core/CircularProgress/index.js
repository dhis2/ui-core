/** @format */

import React from 'react'
import PropTypes from 'prop-types'
import s from './styles'

function CircularProgress({ size, center, dashed }) {
    const progressBar = (
        <div role="progressbar" className={s('container', size)}>
            <svg viewBox="22 22 44 44" className={s('viewbox')}>
                <circle
                    className={s({ dashed })}
                    cx="44"
                    cy="44"
                    r="20.2"
                    fill="none"
                    strokeWidth="3.6"
                    strokeDashoffset="0"
                />
            </svg>
        </div>
    )

    if (center) {
        return <div className={s('overlay')}>{progressBar}</div>
    }

    return progressBar
}

CircularProgress.propTypes = {
    center: PropTypes.bool,
    dashed: PropTypes.bool,
    size: PropTypes.oneOf(['large', 'medium', 'small']),
}

CircularProgress.defaultProps = {
    size: 'medium',
    dashed: true,
}

export { CircularProgress }
export default CircularProgress
