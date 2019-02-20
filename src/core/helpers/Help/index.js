import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { colors } from '../../../defaults/colors.js'

function Help({ text, status }) {
    return (
        <p
            className={cx('base', {
                [`status-${status}`]: true,
            })}
        >
            {text}

            <style jsx>{`
                .base {
                    height: 12px;
                    padding-left: 14px;
                    font-size: 12px;

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
                    color: ${colors.red500};
                }

                .status-warning {
                    color: ${colors.yellow500};
                }
            `}</style>
        </p>
    )
}

Help.defaultProps = {
    status: 'default',
}

Help.propTypes = {
    text: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['default', 'valid', 'warning', 'error']),
}

export { Help }
export default Help
