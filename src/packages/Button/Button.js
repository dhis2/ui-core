import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as VARIANTS from './variants';
import Icon from '../Icon';
import '../../theme/index.css';
import './button.css';

const getIconElement = icon =>
    icon && typeof icon === 'string' ? <Icon name={icon} /> : icon;

const isCircle = variant => variant !== VARIANTS.CIRCLE;

const Button = ({ variant, icon, label, ...rest }) => {
    const btnClass = classNames('d2ui-button', variant, { 'with-icon': !!icon });
    const IconElement = getIconElement(icon);
    return (
        <button className={btnClass} {...rest}>
            {IconElement}
            {isCircle(variant) ? (
                <span className="label-text">{label}</span>
            ) : (
                <span className="tooltip" style={{ display: 'none' }}>
                    {label}
                </span>
            )}
        </button>
    );
};

Button.propTypes = {
    variant: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    icon: ({ icon, variant }, propName, componentName) => {
        if (icon && !(typeof icon === 'string' || React.isValidElement(icon))) {
            return new Error(
                `Property ${propName} for ${componentName} component can be a either an element or a string.`
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
};

export default Button;
