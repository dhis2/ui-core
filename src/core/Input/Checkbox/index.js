/** @format */

import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'
import { bemClassNames, getRequiredText } from '../../../utils'
import ToggleField from '../ToggleField'
import FieldWrap from '../FieldWrap'

const bem = bemClassNames('checkbox')

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
    <FieldWrap {...{ valid, warning, disabled, error, dense, block, helpText }}>
        <ToggleField disabled={disabled} dense={dense}>
            <div className={bem.b({ disabled })}>
                <input
                    type="checkbox"
                    className={bem.e('native-control')}
                    checked={checked}
                    disabled={disabled}
                    onChange={onChange}
                />
                <div className={bem.e('background')}>
                    <svg className={bem.e('checkmark')} viewBox="0 0 24 24">
                        <path
                            className={bem.e('checkmark-path')}
                            fill="none"
                            d="M1.73,12.91 8.1,19.28 22.79,4.59"
                        />
                    </svg>
                    <div className={bem.e('mixedmark')} />
                </div>
            </div>
            <span className={bem.e('label-text', { disabled })}>
                {getRequiredText(label, required)}
            </span>
        </ToggleField>
    </FieldWrap>
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
