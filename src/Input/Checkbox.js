import React from 'react';
import PropTypes from 'prop-types';
import './checkbox.css';
import { bemClassNames } from '../utils';

const bem = bemClassNames('d2ui-checkbox');

const Checkbox = props => {
    return (
        <label className={bem.b()}>
            <input type="checkbox" />
            <span>Checkbox</span>
        </label>
    );
};

Checkbox.propTypes = {};

export default Checkbox;
