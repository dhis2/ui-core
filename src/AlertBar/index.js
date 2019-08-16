import cx from 'classnames'
import propTypes from 'prop-types'
import React, { PureComponent } from 'react'

import { statusPropType } from '../common-prop-types'
import { Actions, actionsPropType } from './Actions'
import { Dismiss } from './Dismiss'
import { Icon, iconPropType } from './Icon'
import { Message } from './Message'
import styles, { ANIMATION_TIME } from './styles'

class AlertBar extends PureComponent {
    state = {
        visible: false,
        hidden: false,
    }

    componentDidMount() {
        this.init()
    }

    componentDidUpdate(_prevProps, prevState) {
        // Only re-init when props change, ignore state changes
        if (
            prevState.visible === this.state.visible &&
            prevState.hidden === this.state.hidden
        ) {
            this.init()
        }
    }

    componentWillUnmount() {
        clearTimeout(this.displayTimeout)
        clearTimeout(this.onHiddenTimeout)
    }

    init() {
        this.startTime = Date.now()
        this.timeRemaining = this.props.duration
        this.startDisplayTimeout()
        this.show()
    }

    startDisplayTimeout = () => {
        if (this.shouldAutoHide()) {
            this.displayTimeout = setTimeout(() => {
                this.hide()
            }, this.timeRemaining)
        }
    }

    stopDisplayTimeOut = () => {
        if (this.shouldAutoHide()) {
            const elapsedTime = Date.now() - this.startTime
            this.timeRemaining = this.timeRemaining - elapsedTime
            clearTimeout(this.displayTimeout)
        }
    }

    hide = () => {
        clearTimeout(this.displayTimeout)
        this.setState({ visible: false })

        this.onHiddenTimeout = setTimeout(() => {
            this.setState({ hidden: true })
            this.props.onHidden && this.props.onHidden()
        }, ANIMATION_TIME)
    }

    show() {
        requestAnimationFrame(() => {
            this.setState({ visible: true })
        })
    }

    shouldAutoHide() {
        const { permanent, warning, critical } = this.props
        return !(permanent || warning || critical)
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
        const { visible, hidden } = this.state

        if (hidden) {
            return null
        }

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
                <Actions actions={actions} hide={this.hide} />
                <Dismiss onClick={this.hide} />

                <style jsx>{styles}</style>
            </div>
        )
    }
}

AlertBar.propTypes = {
    className: propTypes.string,
    children: propTypes.string.isRequired,
    success: statusPropType,
    warning: statusPropType,
    critical: statusPropType,
    icon: iconPropType,
    duration: propTypes.number,
    permanent: propTypes.bool,
    actions: actionsPropType,
    onHidden: propTypes.func,
}

AlertBar.defaultProps = {
    icon: true,
    duration: 8000,
}

export { AlertBar }
