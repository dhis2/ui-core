import React from 'react';
import PropTypes from 'prop-types';
import './checkbox.css';
import './togglerwrap.css';
import { bemClassNames } from '../utils';

const bem = bemClassNames('d2ui-checkbox');

const Checkbox = ({ label }) => {
    return (
        <label className={`${bem.e('label-wrap')} d2ui-toggler-wrap`}>
            <div className={bem.b()}>
                <input type="checkbox" className={bem.e('native-control')} />
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
            <span className={bem.e('label-text')}>{label}</span>
        </label>
    );
};

Checkbox.propTypes = {
    label: PropTypes.string,
};

export default Checkbox;
