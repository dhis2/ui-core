import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

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
                    color: var(--grey700);
                }

                .status-valid {
                    color: var(--blue600);
                }

                .status-error {
                    color: var(--red500);
                }

                .status-warning {
                    color: var(--yellow500);
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
