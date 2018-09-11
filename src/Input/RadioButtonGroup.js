import React from 'react';
import PropTypes from 'prop-types';
import { bemClassNames } from '../utils';
import RadioButton from './RadioButton';
import FormField from './FormField';
import './radiobuttongroup.css';

const bem = bemClassNames('d2ui-radio-button-group');
const randomName = () =>
    Math.random()
        .toString(36)
        .substring(2, 15);

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
}) => (
    <FormField {...{ valid, warning, disabled, error, dense, fullWidth: true, helpText }}>
        <p className={bem.e('description', { error, valid, warning })}>{label}</p>
        <div className={bem.b({ error, warning, valid, stacked: !inline })}>
            {options.map(option => (
                <RadioButton
                    key={option.value}
                    label={option.label}
                    name={name || randomName()}
                    value={option.value}
                    checked={option.value === value}
                    fullWidth={!inline}
                    onChange={() => onChange(option.value)}
                    dense={dense}
                    disabled={disabled}
                    {...{ dense, disabled, error }}
                />
            ))}
        </div>
    </FormField>
);

RadioButtonGroup.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
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
    helpText: PropTypes.string,
};

export default RadioButtonGroup;
