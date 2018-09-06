import React from 'react';
import PropTypes from 'prop-types';
import ToggleField from './ToggleField';
import './switch.css';
import { bemClassNames } from '../utils';
import FormField from './FormField';

const bem = bemClassNames('d2ui-switch');

const Switch = ({
    label,
    checked,
    valid,
    warning,
    error,
    disabled,
    onChange,
    dense,
    fullWidth,
    helpText,
}) => {
    return (
        <FormField {...{ valid, warning, disabled, error, dense, fullWidth, helpText }}>
            <ToggleField disabled={disabled}>
                <div className={bem.b({ checked, disabled })}>
                    <div className={bem.e('track')} />
                    <div className={bem.e('thumb-underlay')}>
                        <div className={bem.e('thumb')}>
                            <input
                                onChange={onChange}
                                type="checkbox"
                                id="basic-switch"
                                className={bem.e('native-control')}
                                aria-checked={checked}
                                checked={checked}
                                role="switch"
                                disabled={disabled}
                            />
                        </div>
                    </div>
                </div>
                <span className={bem.e('label-text', { disabled })}>{label}</span>
            </ToggleField>
        </FormField>
    );
};

Switch.propTypes = {
    label: PropTypes.string,
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

Switch.defaultProps = {
    checked: false,
    disabled: false,
};

export default Switch;
