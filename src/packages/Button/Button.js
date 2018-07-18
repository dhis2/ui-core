import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as VARIANTS from './variants';
import Icon from '../Icon';
import '../../theme/index.css';
import './button.css';

const getIconElement = icon =>
    icon && typeof icon === 'string' ? <Icon name={icon} /> : icon;

const isCircle = variant => variant === VARIANTS.CIRCLE;

const Button = ({ variant, icon, label, inDropdown, ...rest }) => {
    const btnClass = classNames('d2ui-button', variant, { 'in-dropdown': inDropdown });
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
    label: ({ label, variant }, propName, componentName) => {
        if (!isCircle(variant) && (!label || typeof label !== 'string')) {
            return new Error(
                `${componentName} component in ${variant} mode requires a ${propName}.`
            );
        }
    },
    inDropdown: PropTypes.bool,
    icon: ({ icon, variant }, propName, componentName) => {
        if (icon && !(typeof icon === 'string' || React.isValidElement(icon))) {
            return new Error(
                `Property ${propName} for ${componentName} component can be a either a React element or a string.`
            );
        }
        if (variant === VARIANTS.CIRCLE && !icon) {
            return new Error(
                `${componentName} component in ${VARIANTS.CIRCLE} mode requires an icon.`
            );
        }
    },
};

Button.defaultProps = {
    icon: null,
    inDropdown: false,
};

export default Button;
