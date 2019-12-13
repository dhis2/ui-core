import cx from 'classnames'
import propTypes from '@dhis2/prop-types'
import React, { Component } from 'react'

import { Actions, actionsPropType } from './AlertBar/Actions.js'
import { Dismiss } from './AlertBar/Dismiss.js'
import { Icon, iconPropType } from './AlertBar/Icon.js'
import { Message } from './AlertBar/Message.js'
import styles, { ANIMATION_TIME } from './AlertBar/styles.js'
;('') // TODO: https://github.com/jsdoc/jsdoc/issues/1718

/**
 * @module
 * @param {AlertBar.PropTypes} props
 *
 * @returns {React.Component}
 *
 * @example import { AlertBar } from @dhis2/ui-core
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/molecules/alertbar.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/alertbar--default|Storybook}
 */
class AlertBar extends Component {
    // visible is used to control the show/hide animation
    // hidden is used to stop rendering entirely after hide animation
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
                this.hide(null)
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

    hide = event => {
        clearTimeout(this.displayTimeout)
        this.setState({ visible: false })

        this.onHiddenTimeout = setTimeout(() => {
            this.setState(
                { hidden: true },
                () => this.props.onHidden && this.props.onHidden({}, event)
            )
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
                <Icon
                    icon={icon}
                    critical={critical}
                    success={success}
                    warning={warning}
                    info={info}
                />
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
    actions: actionsPropType,
    className: propTypes.string,
    critical: alertTypePropType,
    duration: propTypes.number,
    icon: iconPropType,
    permanent: propTypes.bool,
    success: alertTypePropType,
    warning: alertTypePropType,
    onHidden: propTypes.func,
}

AlertBar.defaultProps = {
    icon: true,
    duration: 8000,
}

export { AlertBar }
