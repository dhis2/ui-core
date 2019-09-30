import cx from 'classnames'
import propTypes from '@dhis2/prop-types'
import React from 'react'

import { statusPropType } from './common-prop-types.js'
import { spacers, theme } from './theme.js'
import { StatusIconNoDefault } from './icons/Status'

/**
 * @module
 * @param {Help.PropTypes} props
 * @returns {React.Component}
 * @example import { Help } from @dhis2/ui-core
 * @see Live demo: {@link /demo/?path=/story/help--default|Storybook}
 */
const Help = ({ children, valid, error, warning, loading, className }) => (
    <p
        className={cx(className, {
            valid,
            error,
            warning,
        })}
    >
        {(valid || error || warning || loading) && (
            <span className="help-icon">
                <StatusIconNoDefault
                    error={error}
                    valid={valid}
                    warning={warning}
                    loading={loading}
                />
            </span>
        )}

        {children}

        <style jsx>{`
            p {
                margin-top: ${spacers.dp4};
                margin-right: 0;
                margin-bottom: 0;
                margin-left: 0;
                font-size: 12px;
                line-height: 14px;
                color: ${theme.default};
                cursor: help;
                display: flex;
                align-items: center;
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

            .help-icon {
                display: inline-block;
                height: 14px;
                margin-right: ${spacers.dp4};
                color: inherit;
                fill: inherit;
                pointer-events: none;
            }

            .help-icon :global(svg) {
                width: 18px;
                height: 18px;
                transform: translateY(-3px);
            }
        `}</style>
    </p>
)

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {string} children
 * @prop {string} [className]
 * @prop {boolean} [valid] - `valid`, `warning`, `error`, and `loading` are mutually exclusive
 * @prop {boolean} [warning]
 * @prop {boolean} [error]
 * @prop {boolean} [loading]
 */
Help.propTypes = {
    className: propTypes.string,
    children: propTypes.string.isRequired,
    error: statusPropType,
    valid: statusPropType,
    warning: statusPropType,
    loading: statusPropType,
}

export { Help }
