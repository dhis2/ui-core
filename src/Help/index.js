import React from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'

import { colors } from '../theme.js'

function Help({ text, status, className }) {
    return (
        <p
            className={cx('base', className, {
                [`status-${status}`]: true,
            })}
        >
            {text}

            <style jsx>{`
                .base {
                    height: 12px;
                    padding-top: 8px;
                    padding-left: 12px;
                    font-size: 12px;
                    margin: 0;
                    line-height: 12px;
                    cursor: help;
                }

                .status-default {
                    color: ${colors.grey700};
                }

                .status-valid {
                    color: ${colors.blue600};
                }

                .status-error {
                    color: ${colors.red600};
                }

                .status-warning {
                    color: ${colors.yellow800};
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
    text: propTypes.string.isRequired,
    status: propTypes.oneOf(['default', 'valid', 'warning', 'error']),
}

export { Help }
