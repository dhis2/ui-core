import cx from 'classnames'
import propTypes from 'prop-types'
import React from 'react'

import { statusPropType } from '../common-prop-types'
import { spacers, theme } from '../theme.js'

const Help = ({ children, valid, error, warning, className, indent }) => (
    <p
        className={cx(className, {
            valid,
            error,
            warning,
            indent,
        })}
    >
        {children}

        <style jsx>{`
            p {
                height: 20px;
                padding-top: ${spacers.dp8};
                font-size: 12px;
                line-height: 12px;
                margin: 0;
                color: ${theme.default};
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                cursor: help;
            }

            .indent {
                padding-left: ${spacers.dp16};
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

Help.propTypes = {
    className: propTypes.string,
    children: propTypes.string.isRequired,
    error: statusPropType,
    valid: statusPropType,
    warning: statusPropType,
    indent: propTypes.bool,
}

Help.defaultProps = {
    indent: true,
}

export { Help }
