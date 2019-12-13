import cx from 'classnames'
import propTypes from '@dhis2/prop-types'
import React from 'react'

import { statusPropType } from './common-prop-types.js'
import { spacers, theme } from './theme.js'
;('') // TODO: https://github.com/jsdoc/jsdoc/issues/1718

/**
 * @module
 * @param {Help.PropTypes} props
 * @returns {React.Component}
 * @example import { Help } from @dhis2/ui-core
 * @see Live demo: {@link /demo/?path=/story/help--default|Storybook}
 */
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
                margin-top: ${spacers.dp4};
                margin-right: 0;
                margin-bottom: 0;
                margin-left: 0;
                font-size: 12px;
                line-height: 14px;
                color: ${theme.default};
                cursor: help;
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

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {string} children
 * @prop {string} [className]
 * @prop {boolean} [valid] - `valid`, `warning`, and `error`, are mutually exclusive
 * @prop {boolean} [warning]
 * @prop {boolean} [error]
 */
Help.propTypes = {
    children: propTypes.string.isRequired,
    className: propTypes.string,
    error: statusPropType,
    valid: statusPropType,
    warning: statusPropType,
}

export { Help }
