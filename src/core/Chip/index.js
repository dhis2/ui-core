import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import cx, { rx } from './styles'

class Chip extends React.PureComponent {
    onClick = () => {
        if (!this.props.disabled && this.props.onClick) {
            return this.props.onClick()
        }
    }

    onRemove = evt => {
        evt.stopPropagation() // stop onRemove from triggering onClick on container
        this.props.onRemove()
    }

    showIcon() {
        const { icon } = this.props
        if (!icon) {
            return
        }

        if (this.props.type === 'image') {
            return (
                <img src={icon} alt="chip icon" className={rx('image-icon')} />
            )
        }

        return <Icon name={icon} className={cx('icon')} />
    }

    showRemove() {
        if (this.props.onRemove) {
            return (
                <Icon
                    name="cancel"
                    className={cx('remove-icon')}
                    onClick={this.onRemove}
                />
            )
        }
    }

    render() {
        const { label, selected, disabled, dragging, overflow } = this.props

        return (
            <div
                className={rx('base', {
                    selected,
                    disabled,
                    dragging,
                    static: !this.props.onClick,
                })}
                onClick={this.onClick}
            >
                {this.showIcon()}
                <span className={rx('label', { overflow })}>{label}</span>
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
