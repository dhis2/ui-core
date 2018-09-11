import React from 'react';
import PropTypes from 'prop-types';
import './radiobutton.css';
import './togglerwrap.css';
import { bemClassNames } from '../utils';
import ToggleField from '../../build/Input/ToggleField';
import FormField from './FormField';

const bem = bemClassNames('d2ui-radio-button');

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
    fullWidth,
    helpText,
}) => (
    <FormField {...{ valid, warning, disabled, error, dense, fullWidth, helpText }}>
        <ToggleField disabled={disabled}>
            <div className={bem.b({ disabled })}>
                <input
                    className={bem.e('native-control')}
                    type="radio"
                    name={name}
                    value={value}
                    checked={checked}
                    onChange={onChange}
                    disabled={disabled}
                />
                <div className={bem.e('background')}>
                    <div className={bem.e('outer-circle')} />
                    <div className={bem.e('inner-circle')} />
                </div>
            </div>
            <span className={bem.e('label-text', { disabled })}>{label}</span>
        </ToggleField>
    </FormField>
);

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
    fullWidth: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
};

RadioButton.defaultProps = {
    disabled: false,
};

export default RadioButton;
