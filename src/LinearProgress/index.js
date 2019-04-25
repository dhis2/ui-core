import React from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'
import styles from './styles'

const LinearProgress = ({ amount, margin, className }) => {
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
    className: propTypes.string,
    amount: propTypes.number,
    margin: propTypes.oneOfType([propTypes.string, propTypes.number]),
}

export { LinearProgress }
