/** @format */

import React from 'react'
import PropTypes from 'prop-types'

import { getRequiredText } from '../../../utils'
import RadioButton from '../RadioButton'
import Field from '../shared/Field'
import s from './styles'

const randomName = () =>
    Math.random()
        .toString(36)
        .substring(2, 15)

const RadioButtonGroup = ({
    options,
    name,
    value,
    label,
    inline,
    onChange,
    disabled,
    dense,
    valid,
    warning,
    error,
    helpText,
    required,
}) => (
    <Field
        className={s('container')}
        {...{ valid, warning, disabled, error, dense, block: true, helpText }}
    >
        <p className={s('description', { error, valid, warning })}>
            {getRequiredText(label, required)}
        </p>
        <div className={s({ error, warning, valid, stacked: !inline })}>
            {options.map(option => (
                <RadioButton
                    key={option.value}
                    label={option.label}
                    name={name || randomName()}
                    value={option.value}
                    checked={option.value === value}
                    block={!inline}
                    onChange={() => onChange(option.value)}
                    dense={dense}
                    disabled={disabled}
                    {...{ dense, disabled, error }}
                />
            ))}
        </div>
    </Field>
)

RadioButtonGroup.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
                .isRequired,
        })
    ).isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    label: PropTypes.string,
    name: PropTypes.string,
    inline: PropTypes.bool,
    disabled: PropTypes.bool,
    dense: PropTypes.bool,
    valid: PropTypes.bool,
    warning: PropTypes.bool,
    error: PropTypes.bool,
    required: PropTypes.bool,
    helpText: PropTypes.string,
}

export { RadioButtonGroup }
export default RadioButtonGroup
