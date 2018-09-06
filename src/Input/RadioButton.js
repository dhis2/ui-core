import React from 'react';
import PropTypes from 'prop-types';
import './radiobutton.css';
import './togglerwrap.css';
import { bemClassNames } from '../utils';
import ToggleField from '../../build/Input/ToggleField';

const bem = bemClassNames('d2ui-radio-button');

const RadioButton = ({ label, name, value, checked, disabled, onChange }) => {
    return (
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
    );
};

RadioButton.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.bool,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
};

RadioButton.defaultProps = {
    disabled: false,
};

export default RadioButton;
