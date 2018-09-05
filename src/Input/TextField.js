import React from 'react';
import PropTypes from 'prop-types';
import { bemClassNames } from '../utils';
import './textfield.css';
import Icon from '../Icon';

const bem = bemClassNames('d2ui-text-field');
const FILLED = 'filled';
const OUTLINED = 'outlined';
const MINIMAL = 'minimal';

const TextField = ({
    variant,
    type,
    dense,
    label,
    value,
    onChange,
    leadingIcon,
    trailingIcon,
}) => {
    const wrapperClassName = bem.b(variant, {
        'with-value': value !== '',
        'with-trailing-icon': trailingIcon,
        'with-leading-icon': leadingIcon,
        dense,
    });
    const focusIndicator = variant === OUTLINED ? 'notched-outline' : 'bottom-line';

    return (
        <label className={wrapperClassName}>
            <input
                className={bem.e('input')}
                value={value}
                onChange={onChange}
                type={type}
            />
            <div className={bem.e(focusIndicator)} />
            {leadingIcon && (
                <Icon name={leadingIcon} className={bem.e('icon', 'leading')} />
            )}
            {trailingIcon && (
                <Icon name={trailingIcon} className={bem.e('icon', 'trailing')} />
            )}
            <span className={bem.e('floating-label')}>{label}</span>
        </label>
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
};

TextField.defaultProps = {
    value: '',
    dense: false,
    variant: FILLED,
    type: 'text',
};

export default TextField;
