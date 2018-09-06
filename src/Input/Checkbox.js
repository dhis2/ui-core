import React from 'react';
import PropTypes from 'prop-types';
import './checkbox.css';
import './togglerwrap.css';
import { bemClassNames } from '../utils';
import ToggleField from '../../build/Input/ToggleField';

const bem = bemClassNames('d2ui-checkbox');

const Checkbox = ({ label, checked, disabled, onChange }) => {
    return (
        <ToggleField disabled={disabled}>
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
            <span className={bem.e('label-text', { disabled })}>{label}</span>
        </ToggleField>
    );
};

Checkbox.propTypes = {
    label: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
};

Checkbox.defaultProps = {
    value: false,
    disabled: false,
};

export default Checkbox;
