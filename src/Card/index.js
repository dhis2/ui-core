import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { colors, fonts } from '../theme.js'

function Card({ className, children }) {
    return (
        <div className={cx('base', className)}>
            {children}

            <style jsx>{fonts}</style>
            <style jsx>{`
                .base {
                    display: inline-block;
                    position: relative;

                    width: 100%;
                    height: 100%;

                    border-radius: 2px;
                    background: ${colors.white};
                    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.14),
                        0 2px 2px 0 rgba(0, 0, 0, 0.12),
                        0 1px 3px 0 rgba(0, 0, 0, 0.2);
                }
            `}</style>
        </div>
    )
}

Card.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
}

export { Card }
export default Card
