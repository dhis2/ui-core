import React from 'react';
import PropTypes from 'prop-types';
import './tooltip.css';

const TOP = 'top';
const RIGHT = 'right';
const BOTTOM = 'bottom';
const LEFT = 'left';

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
    position: PropTypes.oneOf([TOP, RIGHT, BOTTOM, LEFT]),
    multiline: PropTypes.bool,
};

Tooltip.defaultProps = {
    position: BOTTOM,
    multiline: false,
};

export default Tooltip;
