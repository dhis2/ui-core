import React from 'react';
import PropTypes from 'prop-types';
import './tooltip.css';

/**
 * `position="bottom"` (default) works fine with block level elements, but
 * other positions work best with `inline` or `inline-block` elements.
 */
const Tooltip = ({ text, position, multiline, children }) => {
    const tooltipProps = {
        'data-d2ui-tooltip': text,
        'data-d2ui-tooltip-position': position,
    };

    if (multiline) {
        tooltipProps['data-d2ui-tooltip-multiline'] = true;
    }

    return (
        <a className="d2ui-tooltip" {...tooltipProps}>
            {children}
        </a>
    )
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
