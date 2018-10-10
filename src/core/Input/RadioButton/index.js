import React from 'react'
import PropTypes from 'prop-types'

import { getRequiredText } from '../../../utils'
import ToggleField from '../ToggleField'
import Field from '../shared/Field'
import s from './styles'

const RadioButton = ({
    label,
    name,
    value,
    checked,
    valid,
    warning,
    error,
    disabled,
    onChange,
    dense,
    block,
    helpText,
    required,
}) => (
    <Field
        className={s('container')}
        {...{ valid, warning, disabled, error, dense, block, helpText }}
    >
        <ToggleField disabled={disabled} dense={dense}>
            <div className={s({ disabled })}>
                <input
                    className={s('native-control')}
                    type="radio"
                    name={name}
                    value={value}
                    checked={checked}
                    onChange={onChange}
                    disabled={disabled}
                />
                <div className={s('background')}>
                    <div className={s('outer-circle')} />
                    <div className={s('inner-circle')} />
                </div>
            </div>
            <span className={s('label-text', { disabled })}>
                {getRequiredText(label, required)}
            </span>
        </ToggleField>
    </Field>
)

RadioButton.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    valid: PropTypes.bool,
    warning: PropTypes.bool,
    error: PropTypes.bool,
    dense: PropTypes.bool,
    helpText: PropTypes.string,
    block: PropTypes.bool,
    required: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
}

RadioButton.defaultProps = {
    disabled: false,
}

export { RadioButton }
export default RadioButton
