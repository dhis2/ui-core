import React from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'
import css from 'styled-jsx/css'

import { colors, theme } from '../theme.js'
import { SwitchIcon } from '../icons/Switch.js'

import styles from './styles'

const Switch = ({
    onChange,
    name,
    className,
    label,
    required,
    checked = false,
    disabled,
    valid,
    warning,
    error,
}) => (
    <label
        className={cx(className, {
            disabled,
        })}
    >
        <input
            type="checkbox"
            disabled={disabled}
            name={name}
            checked={checked}
            onChange={onChange}
        />

        <SwitchIcon
            checked={checked}
            disabled={disabled}
            valid={valid}
            warning={warning}
            error={error}
        />

        <span className={cx({ required, disabled })}>{label}</span>

        <style jsx>{styles}</style>
    </label>
)

Switch.propTypes = {
    onChange: propTypes.func.isRequired,
    name: propTypes.string.isRequired,

    className: propTypes.string,
    label: propTypes.string,

    required: propTypes.bool,
    checked: propTypes.bool,
    disabled: propTypes.bool,
    valid: propTypes.bool,
    warning: propTypes.bool,
    error: propTypes.bool,
}

export { Switch }
