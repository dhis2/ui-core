import cx from 'classnames'
import propTypes from '@dhis2/prop-types'
import React from 'react'

import { statusPropType } from './common-prop-types.js'
import { spacers, theme } from './theme.js'

/**
 * @module
 * @param {Help.PropTypes} props
 * @returns {React.Component}
 * @example import { Help } from @dhis2/ui-core
 * @see Live demo: {@link /demo/?path=/story/help--default|Storybook}
 */
const Help = ({ children, valid, error, warning, icon, className }) => (
    <p
        className={cx(className, {
            valid,
            error,
            warning,
        })}
    >
        {icon && <span className="help-icon">{icon}</span>}

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
 * @prop {boolean} [valid] - `valid`, `warning`, and `error`, are mutually exclusive
 * @prop {boolean} [warning]
 * @prop {boolean} [error]
 * @prop {Element} [icon]
 */
Help.propTypes = {
    className: propTypes.string,
    children: propTypes.string.isRequired,
    error: statusPropType,
    valid: statusPropType,
    warning: statusPropType,
    icon: propTypes.element,
}

export { Help }
