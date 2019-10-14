import cx from 'classnames'
import propTypes from '@dhis2/prop-types'
import React, { PureComponent } from 'react'

import { Actions, actionsPropType } from './AlertBar/Actions.js'
import { Dismiss } from './AlertBar/Dismiss.js'
import { Icon, iconPropType } from './AlertBar/Icon.js'
import { Message } from './AlertBar/Message.js'
import styles, { ANIMATION_TIME } from './AlertBar/styles.js'

/**
 * @module
 * @param {AlertBar.PropTypes} props
 *
 * @returns {React.PureComponent}
 *
 * @example import { AlertBar } from @dhis2/ui-core
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/molecules/alertbar.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/alertbar--default|Storybook}
 */
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
        const iconProps = { icon, critical, success, warning, info }

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

const alertTypePropType = propTypes.mutuallyExclusive(
    ['success', 'warning', 'critical'],
    propTypes.bool
)

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {string} children - The message string for the alert
 * @prop {string} [className]
 * @prop {boolean} [success] - `success`, `warning`, and `critical` are
 * mutually exclusive props.
 * @prop {boolean} [warning]
 * @prop {boolean} [critical]
 *
 * @prop {(Element|boolean)} [icon=true]
 *
 * @prop {number} [duration]
 * @prop {boolean} [permanent]
 * @prop {Array} [actions] An array of 0-2 action objects with the shape: `{ label: {string}, onClick: {function} }`
 * @prop {function} [onHidden]
 */
AlertBar.propTypes = {
    children: propTypes.string.isRequired,
    className: propTypes.string,
    success: alertTypePropType,
    warning: alertTypePropType,
    critical: alertTypePropType,
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
