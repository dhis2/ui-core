import React, { PureComponent, isValidElement } from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'
import { arrayWithLength } from '../prop-validators'
import { Close } from '../icons/Close'
import { Valid, Warning, Error, Info } from '../icons/Status'
import styles from './styles'

const defaultIcons = {
    success: () => <Valid />,
    warning: () => <Warning />,
    critical: () => <Error />,
    info: () => <Info />,
}

const Icon = ({ icon, variant }) => {
    if (icon === false) {
        return null
    }

    return (
        <div className={variant}>
            {isValidElement(icon) ? icon : defaultIcons[variant]()}
        </div>
    )
}

const Message = ({ children }) => <div>{children}</div>

const Actions = ({ actions }) => {
    if (!actions) {
        return null
    }

    return (
        <div>
            {actions.map(action => (
                <Action key={action.label} {...action} />
            ))}
        </div>
    )
}
const Action = ({ label, onClick }) => <span onClick={onClick}>{label}</span>

const Dismiss = ({ variant, onClick }) => (
    <div className={variant} onClick={onClick}>
        <Close />
    </div>
)

class AlertBar extends PureComponent {
    componentDidMount() {
        this.startTime = Date.now()
        this.timeRemaining = this.props.duration
        this.startHideTimeout()
    }

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    startHideTimeout = () => {
        this.timeout = setTimeout(() => {
            this.hide()
        }, this.timeRemaining)
    }

    stopHideTimeOut = () => {
        this.timeRemaining = this.timeRemaining - (Date.now() - this.startTime)
        clearTimeout(this.timeout)
    }

    hide = () => {
        console.log('hiding')
        clearTimeout(this.timeout)
    }

    variant(status) {
        for (const key in status) {
            if (status[key]) {
                return key
            }
        }
        return 'info'
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

        const variant = this.variant({ success, warning, critical })

        return (
            <div
                className={cx(className, variant)}
                onMouseEnter={this.stopHideTimeOut}
                onMouseLeave={this.startHideTimeout}
            >
                <Icon icon={icon} variant={variant} />
                <Message>{children}</Message>
                <Actions actions={actions} />
                <Dismiss onClick={this.hide} />

                <style jsx>{styles}</style>
            </div>
        )
    }
}

AlertBar.propTypes = {
    children: propTypes.string.isRequired,
    success: propTypes.bool,
    warning: propTypes.bool,
    critical: propTypes.bool,
    icon: propTypes.oneOfType([propTypes.bool, propTypes.element]),
    duration: propTypes.number,
    actions: arrayWithLength(
        0,
        2,
        propTypes.shape({
            label: propTypes.string.isRequired,
            onClick: propTypes.func.isRequired,
        })
    ),
    onHidden: propTypes.func,
}

AlertBar.defaultProps = {
    icon: true,
    duration: 15000,
}

export { AlertBar }
