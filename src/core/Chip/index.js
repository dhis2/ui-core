import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import s from './styles'

class Chip extends React.PureComponent {
    onRemove = event => {
        event.stopPropagation()
        this.props.onRemove()
    }

    renderIcon() {
        const { icon, type } = this.props
        return type === 'icon' ? (
            <Icon name={icon} className={s('icon')} />
        ) : (
            <img src={icon} alt="chip-icon" className={s('image-icon')} />
        )
    }

    render() {
        const {
            label,
            onClick,
            selected,
            disabled,
            dragging,
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
                {icon && this.renderIcon(icon)}
                {label && <span className={s('label')}>{label}</span>}
                {this.props.onRemove && (
                    <Icon
                        name="cancel"
                        className={s('remove-icon')}
                        onClick={this.onRemove}
                    />
                )}
            </div>
        )
    }
}

Chip.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    icon: PropTypes.string,
    type: PropTypes.oneOf(['image', 'icon']),
    onRemove: PropTypes.func,
    selected: PropTypes.bool,
    disabled: PropTypes.bool,
    dragging: PropTypes.bool,
}

Chip.defaultProps = {
    onClick: undefined,
    type: 'icon',
}

export { Chip }
export default Chip
