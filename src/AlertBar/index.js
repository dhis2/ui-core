import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'
import styles, { ANIMATION_TIME } from './styles'

import { Actions, actionsPropType } from './Actions'
import { Dismiss } from './Dismiss'
import { Icon, iconPropType } from './Icon'
import { Message } from './Message'
import { mutuallyExclusive } from '../prop-validators'

class AlertBar extends PureComponent {
    state = {
        visible: false,
        hidden: false,
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
                <Actions actions={actions} />
                <Dismiss onClick={this.hide} />

                <style jsx>{styles}</style>
            </div>
        )
    }
}

const variantPropType = mutuallyExclusive(
    ['success', 'warning', 'critical'],
    propTypes.bool
)

AlertBar.propTypes = {
    className: propTypes.string,
    children: propTypes.string.isRequired,
    success: variantPropType,
    warning: variantPropType,
    critical: variantPropType,
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
