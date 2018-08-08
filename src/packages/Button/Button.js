import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CIRCLE } from './variants';
import Icon from '../Icon';
import './button.css';
import { propTypeValidators } from '../../utils';

const Button = ({ variant, icon, label, ...rest }) => {
    const btnClass = classNames('d2ui-button', variant, {
        'icon-only': Boolean(icon && !label),
    });
    const IconElement = icon && typeof icon === 'string' ? <Icon name={icon} /> : icon;

    return (
        <button className={btnClass} {...rest}>
            {IconElement}
            {!(variant === CIRCLE) && label}
        </button>
    );
};

Button.propTypes = {
    variant: PropTypes.string.isRequired,
    label: propTypeValidators.buttonLabel,
    icon: propTypeValidators.buttonIcon,
};

Button.defaultProps = {
    icon: null,
};

export default Button;
