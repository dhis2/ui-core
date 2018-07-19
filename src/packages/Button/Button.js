import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as VARIANTS from './variants';
import Icon from '../Icon';
import './button.css';

const getIconElement = icon =>
    icon && typeof icon === 'string' ? <Icon name={icon} /> : icon;

const isCircle = variant => variant === VARIANTS.CIRCLE;

const Button = ({ variant, icon, label, ...rest }) => {
    const btnClass = classNames('d2ui-button', variant, {
        'icon-only': Boolean(icon && !label),
    });
    const IconElement = getIconElement(icon);

    return (
        <button className={btnClass} {...rest}>
            {IconElement}
            {!isCircle(variant) && label}
        </button>
    );
};

Button.propTypes = {
    variant: PropTypes.string.isRequired,
    label: ({ label, icon }, propName, componentName) => {
        if (!label && !icon) {
            return new Error(
                `${componentName} component requires at least a label, or an icon ${propName}.`
            );
        }
        if (label && typeof label !== 'string') {
            return new Error(
                `Property ${propName} for ${componentName} component should be a string.`
            );
        }
    },
    icon: ({ icon, variant }, propName, componentName) => {
        if (icon && !isValidIcon(icon)) {
            return new Error(
                `Property ${propName} for ${componentName} component can be a either a React element or a string.`
            );
        }
        if (isCircle(variant) && !icon) {
            return new Error(
                `${componentName} component in ${VARIANTS.CIRCLE} mode requires an icon.`
            );
        }
    },
};

const isValidIcon = icon => typeof icon === 'string' || React.isValidElement(icon);

Button.defaultProps = {
    icon: null,
};

export default Button;
