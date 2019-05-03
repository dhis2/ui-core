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
}) => (
    <label
        className={cx('base', className, {
            disabled,
        })}
    >
        <Input
            name={name}
            onChange={e => onChange(e)}
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

        <Label required={required}>{label}</Label>

        <style jsx>{`
            label {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                cursor: pointer;
                pointer-events: all;
                user-select: none;
            }

            .disabled {
                cursor: not-allowed;
                color: ${theme.disabled};
            }
        `}</style>
    </label>
)

Checkbox.propTypes = {
    onChange: propTypes.func.isRequired,

    name: propTypes.string.isRequired,
    label: propTypes.string.isRequired,

    className: propTypes.string,

    indeterminate: propTypes.bool,
    required: propTypes.bool,
    checked: propTypes.bool,
    disabled: propTypes.bool,
    valid: propTypes.bool,
    warning: propTypes.bool,
    error: propTypes.bool,
}

export { Checkbox }
