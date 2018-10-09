import React from 'react'
import PropTypes from 'prop-types'
import { getRequiredText } from '../../../utils'
import ToggleField from '../ToggleField'
import Field from '../shared/Field'
import s from './styles'

const Checkbox = ({
    label,
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
                    type="checkbox"
                    className={s('native-control')}
                    checked={checked}
                    disabled={disabled}
                    onChange={onChange}
                />
                <div className={s('background')}>
                    <svg className={s('checkmark')} viewBox="0 0 24 24">
                        <path
                            className={s('checkmark-path')}
                            fill="none"
                            d="M1.73,12.91 8.1,19.28 22.79,4.59"
                        />
                    </svg>
                    <div className={s('mixedmark')} />
                </div>
            </div>
            <span className={s('label-text', { disabled })}>
                {getRequiredText(label, required)}
            </span>
        </ToggleField>
    </Field>
)

Checkbox.propTypes = {
    label: PropTypes.string,
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

Checkbox.defaultProps = {
    value: false,
    disabled: false,
}

export { Checkbox }
export default Checkbox
