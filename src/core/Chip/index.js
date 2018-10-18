import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import s from './styles'

class Chip extends React.PureComponent {
    onRemove = evt => {
        evt.stopPropagation()
        this.props.onRemove()
    }

    showIcon() {
        const { icon, type } = this.props
        if (!icon) {
            return
        }

        if (type === 'image') {
            return (
                <img src={icon} alt="chip-icon" className={s('image-icon')} />
            )
        } else {
            return <Icon name={icon} className={s('icon')} />
        }
    }

    showRemove() {
        if (this.props.onRemove) {
            return (
                <Icon
                    name="cancel"
                    className={s('remove-icon')}
                    onClick={this.onRemove}
                />
            )
        }
    }

    render() {
        const {
            label,
            onClick,
            selected,
            disabled,
            dragging,
            overflow,
            icon,
        } = this.props

        return (
            <div
                className={s('container', {
                    static: !onClick,
                    selected,
                    disabled,
                    dragging,
                })}
                onClick={(!disabled && onClick) || undefined}
            >
                {this.showIcon()}
                <span className={s('label', { overflow })}>{label}</span>
                {this.showRemove()}
            </div>
        )
    }
}

Chip.defaultProps = {
    type: 'icon',
    selected: false,
    disabled: false,
    dragging: false,
    overflow: true,
    onClick: undefined,
    onRemove: undefined,
}

Chip.propTypes = {
    label: PropTypes.string.isRequired,
    icon: PropTypes.string,
    type: PropTypes.oneOf(['icon', 'image']),
    selected: PropTypes.bool,
    disabled: PropTypes.bool,
    dragging: PropTypes.bool,
    overflow: PropTypes.bool,
    onClick: PropTypes.func,
    onRemove: PropTypes.func,
}

export { Chip }
export default Chip
