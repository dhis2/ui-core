import React, { Fragment } from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'
import css from 'styled-jsx/css'

import { colors, theme } from '../theme'
import { Indeterminate, Checked, Unchecked } from '../icons/Checkbox'
import { Icon } from './Icon'
import { Label } from './Label'
import { Input } from './Input'

const Checkbox = ({
    onChange,
    name,
    label,
    className,
    indeterminate,
    required,
    checked = false,
    disabled,
    valid,
    warning,
    error,
    children,
}) => (
    <div
        className={cx('base', className, {
            disabled,
        })}
    >
        <Input
            name={name}
            onChange={onChange}
            checked={checked}
            disabled={disabled}
        />

        <Icon
            checked={checked}
            disabled={disabled}
            valid={valid}
            error={error}
            warning={warning}
            indeterminate={indeterminate}
        />

        <span class={cx('label')}>
            {children ? (
                children
            ) : (
                <Label htmlFor={name} required={required} disabled={disabled}>
                    {label}
                </Label>
            )}
        </span>

        <style jsx>{`
            div {
                display: flex;
                flex-direction: row;
                align-items: top;
                justify-content: flex-start;
                pointer-events: all;
                user-select: none;
            }

            span {
                padding-top: 3px;
                margin: 0 0 0 8px;
            }

            .disabled {
                cursor: not-allowed;
                color: ${theme.disabled};
            }
        `}</style>
    </div>
)

Checkbox.propTypes = {
    onChange: propTypes.func.isRequired,

    name: propTypes.string.isRequired,

    label: propTypes.string,
    className: propTypes.string,

    indeterminate: propTypes.bool,
    required: propTypes.bool,
    checked: propTypes.bool,
    disabled: propTypes.bool,
    valid: propTypes.bool,
    warning: propTypes.bool,
    error: propTypes.bool,
}

Checkbox.Label = Label

export { Checkbox }
