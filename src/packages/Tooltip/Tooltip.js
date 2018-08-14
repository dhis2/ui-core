import React from 'react';
import PropTypes from 'prop-types';
import './tooltip.css';

/**
 * The tooltip relies on having one child element only.
 * If this this condition is not met it will just render the child
 * elements as provided. It will also throw a prop types error
 */
const Tooltip = ({ text, position, multiline, children: child }) => {
    if (React.Children.count(child) !== 1 || !text) {
        return child;
    }

    const tooltipProps = {
        'data-d2ui-tooltip': text,
        'data-d2ui-tooltip-position': position,
    };

    if (multiline) {
        tooltipProps['data-d2ui-tooltip-multiline'] = true;
    }

    return React.cloneElement(child, { ...tooltipProps });
};

Tooltip.propTypes = {
    text: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    multiline: PropTypes.bool,
};

Tooltip.defaultProps = {
    position: 'bottom',
    multiline: false,
};

export default Tooltip;
