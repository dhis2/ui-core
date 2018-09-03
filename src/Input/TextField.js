import React from 'react';
import PropTypes from 'prop-types';
import { bemClassNames } from '../utils';
import './textfield.css';

const bem = bemClassNames('d2ui-text-field');
const FILLED = 'filled';
const OUTLINED = 'outlined';

const TextField = ({ type, dense, label, value, onChange }) => {
    const wrapperClassName = bem.b(type, {
        'with-value': value !== '',
        dense,
    });
    const focusIndicatorType = type === FILLED ? 'bottom-line' : 'notched-outline';
    console.log('hoi', value);
    return (
        <label className={wrapperClassName}>
            <input
                type="text"
                className={bem.e('input')}
                value={value}
                onChange={onChange}
            />
            <div className={bem.e(focusIndicatorType)} />
            <span className={bem.e('floating-label')}>{label}</span>
        </label>
    );
};

TextField.propTypes = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    dense: PropTypes.bool,
    type: PropTypes.oneOf([FILLED, OUTLINED]),
};

TextField.defaultProps = {
    value: '',
    dense: false,
    type: FILLED,
};

export default TextField;
