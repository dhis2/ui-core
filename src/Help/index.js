import cx from 'classnames'
import propTypes from 'prop-types'
import React from 'react'

import { statusPropType } from '../common-prop-types'
import { spacers, theme } from '../theme.js'

const Help = ({ children, valid, error, warning, className }) => (
    <p
        className={cx(className, {
            valid,
            error,
            warning,
        })}
    >
        {children}

        <style jsx>{`
            p {
                height: 12px;
                padding-top: ${spacers.dp8};
                padding-left: ${spacers.dp16};
                font-size: 12px;
                margin: 0;
                line-height: 12px;
                cursor: help;
                color: ${theme.default};
            }

            .valid {
                color: ${theme.valid};
            }

            .error {
                color: ${theme.error};
            }

            .warning {
                color: ${theme.warning};
            }
        `}</style>
    </p>
)

Help.defaultProps = {}

Help.propTypes = {
    className: propTypes.string,
    children: propTypes.string.isRequired,
    error: statusPropType,
    valid: statusPropType,
    warning: statusPropType,
}

export { Help }
