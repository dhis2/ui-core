import React from 'react'
import PropTypes from 'prop-types'
import s from './styles'

function LinearProgress({ amount, padded }) {
    const type =
        typeof amount === 'undefined' ? s('indeterminate') : s('determinate')
    const style = amount ? { width: `${amount}%` } : null

    return (
        <div role="progressbar" className={s('container', { padded })}>
            <div style={style} className={s('progress', type)} />
        </div>
    )
}

LinearProgress.propTypes = {
    amount: PropTypes.number,
    padded: PropTypes.bool,
}

export { LinearProgress }
export default LinearProgress
