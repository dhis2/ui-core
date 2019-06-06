import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'
import styles, { ANIMATION_TIME } from './styles'

import { Actions, actionsPropType } from './Actions'
import { Dismiss } from './Dismiss'
import { Icon, iconPropType } from './Icon'
import { Message } from './Message'

class AlertBar extends PureComponent {
    state = {
        visible: false,
    }

    componentDidMount() {
        this.startTime = Date.now()
        this.timeRemaining = this.props.duration
        this.startDisplayTimeout()
        this.show()
    }

    componentWillUnmount() {
        clearTimeout(this.displayTimeout)
        clearTimeout(this.onHiddenTimeout)
    }

    startDisplayTimeout = () => {
        this.displayTimeout = setTimeout(() => {
            this.hide()
        }, this.timeRemaining)
    }

    stopDisplayTimeOut = () => {
        this.timeRemaining = this.timeRemaining - (Date.now() - this.startTime)
        clearTimeout(this.displayTimeout)
    }

    hide = () => {
        clearTimeout(this.displayTimeout)
        this.setState({ visible: false })

        if (this.props.onHidden) {
            this.onHiddenTimeout = setTimeout(
                this.props.onHidden,
                ANIMATION_TIME
            )
        }
    }

    show() {
        setTimeout(() => {
            this.setState({ visible: true })
        }, 0)
    }

    render() {
        const {
            className,
            children,
            success,
            warning,
            critical,
            icon,
            actions,
        } = this.props
        const { visible } = this.state

        const info = !critical && !success && !warning
        const iconProps = { icon, critical, success, warning }

        return (
            <div
                className={cx(className, {
                    info,
                    success,
                    warning,
                    critical,
                    visible,
                })}
                onMouseEnter={this.stopDisplayTimeOut}
                onMouseLeave={this.startDisplayTimeout}
            >
                <Icon {...iconProps} />
                <Message>{children}</Message>
                <Actions actions={actions} />
                <Dismiss onClick={this.hide} />

                <style jsx>{styles}</style>
            </div>
        )
    }
}

AlertBar.propTypes = {
    className: propTypes.string,
    children: propTypes.string.isRequired,
    success: propTypes.bool,
    warning: propTypes.bool,
    critical: propTypes.bool,
    icon: iconPropType,
    duration: propTypes.number,
    actions: actionsPropType,
    onHidden: propTypes.func,
}

AlertBar.defaultProps = {
    icon: true,
    duration: 8000,
}

export { AlertBar }
