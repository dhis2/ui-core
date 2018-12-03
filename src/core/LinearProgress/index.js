import React from 'react'
import PropTypes from 'prop-types'
import s from './styles'

function LinearProgress({ amount, margin }) {
    const type =
        typeof amount === 'undefined' ? s('indeterminate') : s('determinate')
    const style = amount ? { width: `${amount}%` } : null

    return (
        <div
            role="progressbar"
            className={s('reset', 'base')}
            style={{ margin }}
        >
            <div style={style} className={s('reset', 'progress', type)} />
        </div>
    )
}

LinearProgress.propTypes = {
    amount: PropTypes.number,
    margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export { LinearProgress }
export default LinearProgress
