import React from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'
import { theme, spacers } from '../theme'

const Label = ({ children, className, valid, error, warning, required }) => (
    <p
        className={cx(className, {
            valid,
            error,
            warning,
            required,
        })}
    >
        {children}
        <style jsx>{`
            p {
                font-size: 16px;
                line-height: ${spacers.dp24};
                color: ${theme.default};
                margin: 0 0 ${spacers.dp12};
            }

            .required::after {
                padding-left: ${spacers.dp4};
                content: '*';
            }

            .valid {
                color: ${theme.valid};
            }

            .warning {
                color: ${theme.warning};
            }

            .error {
                color: ${theme.error};
            }
        `}</style>
    </p>
)

Label.propTypes = {
    children: propTypes.node.isRequired,
    className: propTypes.string,
    valid: propTypes.bool,
    error: propTypes.bool,
    warning: propTypes.bool,
    required: propTypes.bool,
}

export { Label }
