import React from 'react';
import PropTypes from 'prop-types';
import { bemClassNames } from '../utils';
import './textfield.css';
import Icon from '../Icon';
import FieldWrap from './FieldWrap';

export const bem = bemClassNames('d2ui-text-field');
const FILLED = 'filled';
const OUTLINED = 'outlined';
const MINIMAL = 'minimal';

const computeTrailingIcon = (trailingIcon, error, warning, valid) => {
    switch (true) {
        case Boolean(trailingIcon):
            return trailingIcon;
        case error:
            return 'error';
        case warning:
            return 'warning';
        case valid:
            return 'check_circle';
        default:
            return null;
    }
};

const TextField = ({
    variant,
    type,
    dense,
    label,
    value,
    onChange,
    leadingIcon,
    trailingIcon,
    error,
    valid,
    warning,
    disabled,
    fullWidth,
    helpText,
    inputComponent,
}) => {
    const computedTrailingIcon = computeTrailingIcon(trailingIcon, error, warning, valid);
    const focusIndicator = variant === OUTLINED ? 'notched-outline' : 'bottom-line';
    const wrapperClassName = bem.b(variant, {
        'with-value': value !== '',
        'with-trailing-icon': computedTrailingIcon,
        'with-leading-icon': leadingIcon,
        dense,
        error,
        valid,
        warning,
        disabled,
    });

    return (
        <FieldWrap {...{ valid, warning, disabled, error, dense, fullWidth, helpText }}>
            <label className={wrapperClassName}>
                {inputComponent || (
                    <input
                        className={bem.e('input')}
                        value={value}
                        onChange={onChange}
                        type={type}
                        disabled={disabled}
                    />
                )}
                <span className={bem.e(focusIndicator)} />
                {leadingIcon && (
                    <Icon name={leadingIcon} className={bem.e('icon', 'leading')} />
                )}
                {computedTrailingIcon && (
                    <Icon
                        name={computedTrailingIcon}
                        className={bem.e('icon', 'trailing')}
                    />
                )}
                <span className={bem.e('floating-label')}>{label}</span>
            </label>
        </FieldWrap>
    );
};

TextField.propTypes = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    dense: PropTypes.bool,
    variant: PropTypes.oneOf([FILLED, OUTLINED, MINIMAL]),
    leadingIcon: PropTypes.string,
    trailingIcon: PropTypes.string,
    type: PropTypes.oneOf([
        'text',
        'password',
        'color',
        'date',
        'datetime-local',
        'email',
        'month',
        'number',
        'range',
        'search',
        'tel',
        'time',
        'url',
        'week',
    ]),
    error: PropTypes.bool,
    valid: PropTypes.bool,
    warning: PropTypes.bool,
    disabled: PropTypes.bool,
    fullWidth: PropTypes.bool,
    helpText: PropTypes.string,
    inputComponent: PropTypes.element,
};

TextField.defaultProps = {
    value: '',
    dense: false,
    variant: FILLED,
    type: 'text',
};

export default TextField;
