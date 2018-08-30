import React from 'react';
import PropTypes from 'prop-types';
import './switch.css';
import { bemClassNames } from '../utils';

const bem = bemClassNames('d2ui-switch');

const Switch = ({ children, value, disabled, onChange }) => {
    return (
        <label className={bem.e('label-wrap')}>
            <div className={bem.b({ checked: value, disabled: disabled })}>
                <div className={bem.e('track')} />
                <div className={bem.e('thumb-underlay')}>
                    <div className={bem.e('thumb')}>
                        <input
                            onChange={onChange}
                            type="checkbox"
                            id="basic-switch"
                            className={bem.e('native-control')}
                            aria-checked={value}
                            checked={value}
                            role="switch"
                        />
                    </div>
                </div>
            </div>
            <span className={bem.e('label-text')}>{children}</span>
        </label>
    );
};

Switch.propTypes = {
    children: PropTypes.node,
    value: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
};

Switch.defaultProps = {
    value: false,
    disabled: false,
};

export default Switch;
