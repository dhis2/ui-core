import { isValidElement } from 'react';
import { CIRCLE } from '../packages/Button/variants';

export const sharedPropTypes = { henkie: 'penkie' };

export const propTypeValidators = {
    // Label should be a string and a button requires either a label or an icon
    buttonLabel: ({ label, icon }, propName, componentName) => {
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
    buttonIcon: ({ icon, variant }, propName, componentName) => {
        if (icon && !(typeof icon === 'string' || isValidElement(icon))) {
            return new Error(
                `Property ${propName} for ${componentName} component can be a either a React element or a string.`
            );
        }
        if (variant === CIRCLE && !icon) {
            return new Error(
                `${componentName} component in ${CIRCLE} mode requires an icon.`
            );
        }
    },
};
