import React from 'react';
import PropTypes from 'prop-types';
import './radiobutton.css';
import { bemClassNames } from '../utils';

const bem = bemClassNames('d2ui-radio-button');

const RadioButton = ({ children }) => {
    return (
        <label className={bem.e('label-wrap')}>
            <div className={bem.b()}>
                <input className={bem.e('native-control')} type="radio" name="radios" />
                <div className={bem.e('background')}>
                    <div className={bem.e('outer-circle')} />
                    <div className={bem.e('inner-circle')} />
                </div>
            </div>
            <span className={bem.e('label-text')}>{children}</span>
        </label>
    );
};

RadioButton.propTypes = {
    children: PropTypes.node,
};

export default RadioButton;
