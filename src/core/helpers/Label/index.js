import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../../Icon'
import s from './styles'

const statusToIcon = {
    valid: 'check_circle',
    warning: 'warning',
    error: 'error',
}

class Label extends React.Component {
    constructor(props) {
        super(props)
        this.ref = React.createRef()
        this.state = {
            legend: {
                width: '0px',
            },
        }
    }

    componentDidMount() {
        this.setState({
            legend: { width: `${this.ref.current.offsetWidth}px` },
        })
    }

    render() {
        const {
            text,
            type,
            focused,
            size,
            kind,
            state,
            status,
            disabled,
            hasIcon,
        } = this.props

        return (
            <fieldset
                className={s('reset', 'base', {
                    disabled,
                    [`focused`]: focused,
                    [`state-${state}`]: true,
                    [`size-${size}`]: true,
                    [`type-${type}`]: true,
                    [`kind-${kind}`]: true,
                    'has-icon': hasIcon,
                })}
            >
                <legend
                    style={
                        state === 'minimized'
                            ? this.state.legend
                            : { width: '0px' }
                    }
                >
                    &nbsp;
                </legend>
                <div
                    ref={this.ref}
                    className={s('reset', 'content', {
                        [`state-${state}`]: true,
                    })}
                >
                    {text}
                </div>
                {status !== 'default' && (
                    <Icon name={statusToIcon[status]} className={s('icon')} />
                )}
            </fieldset>
        )
    }
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
