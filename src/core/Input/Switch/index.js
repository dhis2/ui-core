/** @format */

import React from 'react'
import PropTypes from 'prop-types'
import ToggleField from '../ToggleField'
import { getRequiredText } from '../../../utils'
import Field from '../shared/Field'
import s from './styles'

const Switch = ({
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
}) => {
    return (
        <Field
            className={s('container')}
            {...{ valid, warning, disabled, error, dense, block, helpText }}
        >
            <ToggleField disabled={disabled} dense={dense}>
                <div className={s({ checked, disabled })}>
                    <div className={s('track')} />
                    <div className={s('thumb-underlay')}>
                        <div className={s('thumb')}>
                            <input
                                onChange={onChange}
                                type="checkbox"
                                id="basic-switch"
                                className={s('native-control')}
                                aria-checked={checked}
                                checked={checked}
                                role="switch"
                                disabled={disabled}
                            />
                        </div>
                    </div>
                </div>
                <span className={s('label-text', { disabled })}>
                    {getRequiredText(label, required)}
                </span>
            </ToggleField>
        </Field>
    )
}

Switch.propTypes = {
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

Switch.defaultProps = {
    checked: false,
    disabled: false,
}

export { Switch }
export default Switch
