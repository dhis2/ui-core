import React from 'react';
import PropTypes from 'prop-types';
import FieldWrap from './FieldWrap';
import Field, { bem as fieldBem } from './Field';

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
    error,
    valid,
    warning,
    disabled,
    block,
    multiline,
    required,
    helpText,
}) => {
    const InputTag = multiline ? 'textarea' : 'input';
    const inputComponent = (
        <InputTag
            className={fieldBem.e('input')}
            value={value}
            onChange={onChange}
            type={type}
            disabled={disabled}
        />
    );

    return (
        <FieldWrap
            {...{
                valid,
                warning,
                disabled,
                error,
                dense,
                block,
                helpText,
            }}
        >
            <Field
                {...{
                    variant,
                    dense,
                    label,
                    value,
                    leadingIcon,
                    trailingIcon,
                    error,
                    valid,
                    warning,
                    disabled,
                    inputComponent,
                    block,
                    multiline,
                    required,
                }}
            />
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
    block: PropTypes.bool,
    multiline: PropTypes.bool,
    required: PropTypes.bool,
    helpText: PropTypes.string,
};

TextField.defaultProps = {
    value: '',
    dense: false,
    variant: FILLED,
    type: 'text',
};

export default TextField;
