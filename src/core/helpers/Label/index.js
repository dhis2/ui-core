import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../../Icon'
import s from './styles'

const statusToIcon = {
    valid: 'check_circle',
    warning: 'warning',
    error: 'error',
}

function Label({ type, focused, text, size, height, status, border, hasIcon }) {
    const style = {
        height,
        lineHeight: height,
    }

    return (
        <div
            style={style}
            className={s('container', {
                'has-icon': hasIcon,
                [`focused`]: focused,
                [`size-${size}`]: true,
                [`type-${type}`]: true,
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
            {status !== 'default' && (
                <Icon name={statusToIcon[status]} className={s('icon')} />
            )}
        </div>
    )
}

Label.defaultProps = {
    type: 'text',
    hasIcon: false,
    size: 'default',
    status: 'default',
    border: 'none',
    height: '100%',
}

Label.propTypes = {
    text: PropTypes.string,
    height: PropTypes.string,
    focused: PropTypes.bool,
    hasIcon: PropTypes.bool,
    size: PropTypes.oneOf(['default', 'minimized']),
    border: PropTypes.oneOf(['none', 'solid', 'dashed']),
    status: PropTypes.oneOf(['default', 'valid', 'warning', 'error']),
    type: PropTypes.oneOf([
        'text',
        'email',
        'number',
        'password',
        'url',
        'select',
    ]),
}

export { Label }
export default Label
