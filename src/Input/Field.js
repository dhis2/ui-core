import React from 'react';
import PropTypes from 'prop-types';
import { bemClassNames, appendAsteriskIfRequired } from '../utils';
import './field.css';
import Icon from '../Icon';

export const bem = bemClassNames('d2ui-field');
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

const Field = ({
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
    multiline,
    block,
    required,
}) => {
    const computedTrailingIcon = computeTrailingIcon(trailingIcon, error, warning, valid);
    const focusIndicator = variant === OUTLINED ? 'notched-outline' : 'bottom-line';
    const wrapperClassName = bem.b(variant, {
        'with-value': value !== '',
        'with-trailing-icon': computedTrailingIcon,
        'with-leading-icon': leadingIcon,
        'full-width': block,
        dense,
        error,
        valid,
        warning,
        disabled,
        multiline,
    });

    return (
        <label className={wrapperClassName}>
            {inputComponent}
            <span className={bem.e(focusIndicator)} />
            {leadingIcon && (
                <Icon name={leadingIcon} className={bem.e('icon', 'leading')} />
            )}
            {computedTrailingIcon && (
                <Icon name={computedTrailingIcon} className={bem.e('icon', 'trailing')} />
            )}
            <span className={bem.e('floating-label')}>
                {appendAsteriskIfRequired(label, required)}
            </span>
        </label>
    );
};

Field.propTypes = {
    label: PropTypes.string.isRequired,
    inputComponent: PropTypes.element.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    dense: PropTypes.bool,
    variant: PropTypes.oneOf([FILLED, OUTLINED, MINIMAL]),
    leadingIcon: PropTypes.string,
    trailingIcon: PropTypes.string,
    error: PropTypes.bool,
    valid: PropTypes.bool,
    warning: PropTypes.bool,
    disabled: PropTypes.bool,
    block: PropTypes.bool,
    multiline: PropTypes.bool,
    required: PropTypes.bool,
    helpText: PropTypes.string,
};

Field.defaultProps = {
    value: '',
    dense: false,
    variant: FILLED,
};

export default Field;
