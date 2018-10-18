import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import s from './styles'

// Only allow lower case letters, optionally seperated by underscore
const mdIconNamePattern = /^[a-z]+_*[a-z]+$/

class Chip extends React.PureComponent {
    onRemove = event => {
        event.stopPropagation()
        this.props.onRemove()
    }

    renderIcon(icon) {
        return mdIconNamePattern.test(icon) ? (
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
            onRemove,
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
                {onRemove && (
                    <button
                        className={s('remove-button')}
                        onClick={this.onRemove}
                    >
                        <Icon name="cancel" className={s('remove-icon')} />
                    </button>
                )}
            </div>
        )
    }
}

Chip.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    selected: PropTypes.bool,
    disabled: PropTypes.bool,
    dragging: PropTypes.bool,
    icon: PropTypes.string,
    onRemove: PropTypes.func,
}

export { Chip }
export default Chip
