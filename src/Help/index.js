import React from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'

import { theme } from '../theme.js'

function Help({ children, status, className }) {
    return (
        <p
            className={cx('base', className, {
                [`status-${status}`]: true,
            })}
        >
            {children}

            <style jsx>{`
                .base {
                    height: 12px;
                    padding-top: 8px;
                    padding-left: 12px;
                    font-size: 12px;
                    margin: 0;
                    line-height: 12px;
                    cursor: help;
                    color: ${theme.default};
                }

                .status-default {
                    color: ${theme.default};
                }

                .status-valid {
                    color: ${theme.valid};
                }

                .status-error {
                    color: ${theme.error};
                }

                .status-warning {
                    color: ${theme.warning};
                }
            `}</style>
        </p>
    )
}

Help.defaultProps = {
    status: 'default',
}

Help.propTypes = {
    className: propTypes.string,
    children: propTypes.string.isRequired,
    status: propTypes.oneOf(['default', 'valid', 'warning', 'error']),
}

export { Help }
