import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import Menu from '../Menu'
import Icon from '../Icon'
import { isPointInRect } from '../../utils'

import cx from 'classnames'
import styles from './styles'

class SplitButton extends Component {
    state = {
        open: false,
    }

    componentDidMount() {
        document.addEventListener('click', this.onDocClick)
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.onDocClick)
    }

    onDocClick = evt => {
        if (this.elContainer && this.elMenu) {
            const target = { x: evt.clientX, y: evt.clientY }
            const menu = this.elMenu.getBoundingClientRect()
            const container = this.elContainer.getBoundingClientRect()

            if (
                !isPointInRect(target, menu) &&
                !isPointInRect(target, container)
            ) {
                this.setState({ open: false })
            }
        }
    }

    onToggle = () => this.setState({ open: !this.state.open })

    render() {
        const { open } = this.state
        let width = this.props.width
        if (!width) {
            width = this.elContainer
                ? this.elContainer.getBoundingClientRect()['width']
                : 'inherit'
        }

        return (
            <div className={cx('base')} ref={c => (this.elContainer = c)}>
                <Button
                    icon={this.props.icon}
                    kind={this.props.kind}
                    label={this.props.label}
                    active={this.props.active}
                    disabled={this.props.disabled}
                    onClick={this.props.onClick}
                />

                <Button
                    kind={this.props.kind}
                    active={this.props.active}
                    disabled={this.props.disabled}
                    onClick={this.onToggle}
                >
                    <Icon
                        className={cx('menu-icon')}
                        name={open ? 'arrow_drop_up' : 'arrow_drop_down'}
                    />
                </Button>

                {open && (
                    <div
                        className={cx('menu', `${this.props.size}`)}
                        ref={c => (this.elMenu = c)}
                    >
                        <Menu
                            width={`${width}px`}
                            size={this.props.size}
                            list={this.props.list}
                            onClick={this.props.onClick}
                        />
                    </div>
                )}
                <style jsx>{styles}</style>
            </div>
        )
    }
}

SplitButton.defaultProps = {
    size: 'default',
    kind: 'basic',
    active: false,
    disabled: false,
    width: '',
    icon: '',
}

SplitButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired,

    width: PropTypes.string,
    kind: PropTypes.oneOf(['basic', 'primary']),
    icon: PropTypes.string,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(['default', 'dense']),
}

export { SplitButton }
export default SplitButton
