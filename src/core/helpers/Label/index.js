import React from 'react'
import PropTypes from 'prop-types'
import s from './styles'

function Label({ text, size, height, status, border, hasIcon }) {
    const style = {
        height,
        lineHeight: height,
    }

    return (
        <div
            style={style}
            className={s('container', {
                'has-icon': hasIcon,
                [`size-${size}`]: true,
                [`status-${status}`]: true,
                [`border-${border}`]: true,
            })}
        >
            <div
                className={s('content', {
                    [`size-${size}`]: true,
                })}
            >
                {text}
            </div>
        </div>
    )
}

Label.defaultProps = {
    hasIcon: false,
    size: 'default',
    status: 'default',
    border: 'none',
    height: '100%',
}

Label.propTypes = {
    text: PropTypes.string,
    height: PropTypes.string,
    hasIcon: PropTypes.bool,
    size: PropTypes.oneOf(['default', 'minimized']),
    border: PropTypes.oneOf(['none', 'solid', 'dashed']),
    status: PropTypes.oneOf(['default', 'valid', 'warning', 'error']),
}

export { Label }
export default Label
