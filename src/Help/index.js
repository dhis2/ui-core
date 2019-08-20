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
                height: 12px;
                font-size: 12px;
                margin: ${spacers.dp8} 0 0 0;
                line-height: 12px;
                cursor: help;
                color: ${theme.default};
            }

            .indent {
                margin-left: ${spacers.dp16};
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
