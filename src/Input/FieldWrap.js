import React from 'react';
import PropTypes from 'prop-types';
import { bemClassNames } from '../utils';
import './fieldwrap.css';

const bem = bemClassNames('d2ui-form-field');

const FieldWrap = ({
    children,
    valid,
    warning,
    disabled,
    error,
    dense,
    fullWidth,
    helpText,
}) => (
    <div
        className={bem.b({
            valid,
            warning,
            disabled,
            error,
            dense,
            'full-width': fullWidth,
        })}
    >
        {children}
        {helpText && <div className={bem.e('help-text')}>{helpText}</div>}
    </div>
);

FieldWrap.propTypes = {
    children: PropTypes.node.isRequired,
    valid: PropTypes.bool,
    warning: PropTypes.bool,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    dense: PropTypes.bool,
    fullWidth: PropTypes.bool,
    helpText: PropTypes.string,
};

export default FieldWrap;
