import React from 'react'
import PropTypes from 'prop-types'
import s from './styles'

/**
 * `position="bottom"` (default) works fine with block level elements, but
 * other positions work best with `inline` or `inline-block` elements.
 */
function Tooltip({ text, position, multiline, children }) {
    const tooltipProps = {
        data: text,
        'data-position': position,
    }

    if (multiline) {
        tooltipProps['data-multiline'] = true
    }

    return (
        <a className={s('container')} {...tooltipProps}>
            {children}
        </a>
    )
}

Tooltip.propTypes = {
    text: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    multiline: PropTypes.bool,
}

Tooltip.defaultProps = {
    position: 'bottom',
    multiline: false,
}

export { Tooltip }
export default Tooltip
