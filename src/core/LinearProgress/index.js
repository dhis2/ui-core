import React from 'react'
import PropTypes from 'prop-types'
import cx, { rx } from './styles'

function LinearProgress({ amount, margin }) {
    const type =
        typeof amount === 'undefined' ? cx('indeterminate') : cx('determinate')
    const style = amount ? { width: `${amount}%` } : null

    return (
        <div role="progressbar" className={rx('base')} style={{ margin }}>
            <div style={style} className={rx('progress', type)} />
        </div>
    )
}

LinearProgress.propTypes = {
    amount: PropTypes.number,
    margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export { LinearProgress }
export default LinearProgress
