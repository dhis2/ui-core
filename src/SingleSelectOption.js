import React from 'react'
import propTypes from '@dhis2/prop-types'
import cx from 'classnames'
import { colors, spacers } from './theme.js'

/**
 * @module
 *
 * @param {SingleSelectOption.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { SingleSelectOption } from '@dhis2/ui-core'
 *
 */

const SingleSelectOption = ({
    label,
    active,
    disabled,
    onClick,
    className,
}) => (
    <div
        className={cx(className, {
            disabled,
            active,
        })}
        onClick={e => onClick({}, e)}
    >
        {label}

        <style jsx>{`
            div {
                cursor: pointer;
                font-size: 14px;
                text-decoration: none;
                color: ${colors.grey900};
                padding: ${spacers.dp8} ${spacers.dp12};
            }

            div:hover {
                background-color: ${colors.grey200};
            }

            div:active,
            div.active {
                background-color: ${colors.teal700};
                color: ${colors.white};
                cursor: auto;
            }

            div.disabled {
                color: ${colors.grey500};
                cursor: not-allowed;
                user-select: none;
            }

            div.disabled:hover {
                background-color: initial;
            }
        `}</style>
    </div>
)

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {string} value
 * @prop {string} label
 * @prop {string} [className]
 * @prop {function} [onClick]
 * @prop {boolean} [active]
 * @prop {boolean} [disabled]
 */
SingleSelectOption.propTypes = {
    className: propTypes.string,
    // This prop is used by the Select, so still necessary
    // eslint-disable-next-line react/no-unused-prop-types
    value: propTypes.string.isRequired,
    label: propTypes.string.isRequired,
    onClick: propTypes.func,
    active: propTypes.bool,
    disabled: propTypes.bool,
}

export { SingleSelectOption }
