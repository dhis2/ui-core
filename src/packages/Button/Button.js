import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as VARIANTS from './variants';
import { wrapTextNodesInSpans } from '../../utils';
import './button.css';

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
        className={classNames('d2ui-button', variant, size)}
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
