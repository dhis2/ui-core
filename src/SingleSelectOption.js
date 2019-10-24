import React from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'
import { colors, spacers } from './theme.js'

const SingleSelectOption = ({
    value,
    label,
    active,
    disabled,
    onClick,
    className,
}) => (
    <a
        className={cx(className, {
            disabled,
            active,
        })}
        onClick={() => {
            onClick({ value, label })
        }}
    >
        {label}

        <style jsx>{`
            a {
                display: block;
                cursor: pointer;
                font-size: 14px;
                text-decoration: none;
                color: ${colors.grey900};
                padding: ${spacers.dp8} ${spacers.dp12};
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            a:hover {
                background-color: ${colors.grey200};
            }

            a:active,
            a.active {
                background-color: ${colors.grey400};
                cursor: auto;
            }

            a.disabled {
                color: rgba(0, 0, 0, 0.3);
                cursor: not-allowed;
                pointer-events: none;
                user-select: none;
            }
        `}</style>
    </a>
)

SingleSelectOption.propTypes = {
    className: propTypes.string,
    value: propTypes.string.isRequired,
    label: propTypes.string.isRequired,
    onClick: propTypes.func,
    active: propTypes.bool,
    disabled: propTypes.bool,
}

export { SingleSelectOption }
