import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../../Icon'
import s from './styles'

const statusToIcon = {
    valid: 'check_circle',
    warning: 'warning',
    error: 'error',
}

function Label({
    text,
    type,
    focused,
    size,
    kind,
    state,
    status,
    disabled,
    hasIcon,
}) {
    return (
        <div
            className={s('base', {
                disabled,
                'has-icon': hasIcon,
                [`focused`]: focused,
                [`state-${state}`]: true,
                [`size-${size}`]: true,
                [`type-${type}`]: true,
                [`status-${status}`]: true,
                [`kind-${kind}`]: true,
            })}
        >
            <div
                className={s('content', {
                    [`state-${state}`]: true,
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
    disabled: false,
}

Label.propTypes = {
    text: PropTypes.string,
    focused: PropTypes.bool,
    hasIcon: PropTypes.bool,
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(['default', 'dense']),
    kind: PropTypes.oneOf(['filled', 'outlined']),
    state: PropTypes.oneOf(['default', 'minimized']),
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
