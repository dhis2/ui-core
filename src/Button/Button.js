import React from 'react';
import PropTypes from 'prop-types';
import * as VARIANTS from './variants';
import { wrapTextNodesInSpans, bemClassNames } from '../utils';

import './button.css';

const bem = bemClassNames('d2ui-button');

const Button = ({
    children,
    disabled,
    onClick,
    onDoubleClick,
    role,
    size,
    title,
    type,
    variant,
}) => (
    <button
        className={`${bem.b(variant, size)} d2ui-align-icon`}
        {...{ disabled, onClick, onDoubleClick, title, type, role }}
    >
        {wrapTextNodesInSpans(children)}
    </button>
);

Button.propTypes = {
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    onDoubleClick: PropTypes.func,
    role: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    title: PropTypes.string,
    type: PropTypes.oneOf(['submit', 'reset', 'button']),
    variant: PropTypes.oneOf(Object.keys(VARIANTS).map(key => VARIANTS[key])),
};

Button.defaultProps = {
    type: 'button',
    size: 'medium',
    variant: VARIANTS.RAISED,
};

export default Button;
