/** @format */

import React from 'react'
import PropTypes from 'prop-types'
import { getRequiredText } from '../../../utils'
import Field from '../shared/Field'
import s from './styles'

function Switch({
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
}) {
    console.log('checked', checked)
    console.log('onChange', onChange)

    return (
        <Field
            className={s('container')}
            {...{ valid, warning, disabled, error, dense, block, helpText }}
        >
            <label onClick={onChange}>
                <input
                    checked={checked}
                    disabled={disabled}
                    type="checkbox"
                    className={s('input')}
                />
                <label className={s('label')}>
                    {getRequiredText(label, required)}
                </label>
            </label>
        </Field>
    )
}

Switch.defaultProps = {
    checked: false,
    disabled: false,
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

export { Switch }
export default Switch
