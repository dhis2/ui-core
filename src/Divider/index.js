import React from 'react'
import propTypes from 'prop-types'

import cx from 'classnames'
import { colors } from '../theme.js'

export function Divider({ margin, className }) {
    const style = { margin }
    return (
        <div style={style} className={cx('base', className)}>
            <style jsx>{`
                .base {
                    display: inline-block;
                    width: 100%;
                    height: 1px;
                    background-color: ${colors.grey300};
                }
            `}</style>
        </div>
    )
}

Divider.defaultProps = {
    margin: '8px 0',
}

Divider.propTypes = {
    className: propTypes.string,
    margin: propTypes.string,
}

export default Divider
