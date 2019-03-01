import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './styles'

function LinearProgress({ amount, margin, className }) {
    const type =
        typeof amount === 'undefined' ? cx('indeterminate') : cx('determinate')
    const style = amount ? { width: `${amount}%` } : null

    return (
        <div
            role="progressbar"
            className={cx('base', className)}
            style={{ margin }}
        >
            <div style={style} className={cx('progress', type)} />

            <style jsx>{styles}</style>
        </div>
    )
}

LinearProgress.propTypes = {
    className: PropTypes.string,
    amount: PropTypes.number,
    margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export { LinearProgress }
export default LinearProgress
