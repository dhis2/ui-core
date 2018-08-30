import React from 'react';
import PropTypes from 'prop-types';
import './checkbox.css';
import { bemClassNames } from '../utils';

const bem = bemClassNames('d2ui-checkbox');

const Checkbox = props => {
    return (
        <div class="mdc-checkbox">
            <input type="checkbox" class="mdc-checkbox__native-control" id="checkbox-1" />
            <div class="mdc-checkbox__background">
                <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                    <path
                        class="mdc-checkbox__checkmark-path"
                        fill="none"
                        d="M1.73,12.91 8.1,19.28 22.79,4.59"
                    />
                </svg>
                <div class="mdc-checkbox__mixedmark" />
            </div>
        </div>
    );
};

Checkbox.propTypes = {};

export default Checkbox;
