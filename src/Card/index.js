import React from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'

import { colors } from '../theme.js'

function Card({ className, children }) {
    return (
        <div className={cx('base', className)}>
            {children}

            <style jsx>{`
                .base {
                    display: inline-block;
                    position: relative;

                    width: 100%;
                    height: 100%;

                    border-radius: 3px;
                    background: ${colors.white};
                    box-shadow: 0 0 1px 0 rgba(64, 75, 90, 0.2),
                        0 2px 1px 0 rgba(64, 75, 90, 0.28);
                }
            `}</style>
        </div>
    )
}

Card.propTypes = {
    className: propTypes.string,
    children: propTypes.node,
}

export { Card }
