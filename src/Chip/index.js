import React from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'

import { colors } from '../theme.js'
import styles from './styles.js'

import css from 'styled-jsx/css'

import { Cancel } from '../icons/Cancel.js'

const removeIcon = css.resolve`
    svg {
        margin-right: 4px;
        color: ${colors.grey700};
		height: 18px;
		width: 18px;
        cursor: pointer;
        opacity: 1;
        pointer-events: all;
    }

    svg:hover {
        opacity: 0.82;
    }
`

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

        return (
            <React.Fragment>
                <span>{icon}</span>

                <style jsx>{`
                    span {
                        width: 24px;
                        height: 24px;
                        margin-left: 4px;
                        border-radius: 50%;
                        overflow: hidden;
                    }
                `}</style>
            </React.Fragment>
        )
    }

    showRemove() {
        if (this.props.onRemove) {
            return (
                <React.Fragment>
                    <Cancel
                        className={removeIcon.className}
                        onClick={this.onRemove}
                    />

                    {removeIcon.styles}
                </React.Fragment>
            )
        }
    }

    render() {
        const {
            selected,
            disabled,
            dragging,
            overflow,
            className,
            children,
        } = this.props

        return (
            <div
                className={cx(className, {
                    selected,
                    disabled,
                    dragging,
                    static: !this.props.onClick,
                })}
                onClick={this.onClick}
            >
                {this.showIcon()}
                <span className={cx({ overflow })}>{children}</span>
                {this.showRemove()}

                <style jsx>{styles}</style>
            </div>
        )
    }
}

Chip.defaultProps = {
    selected: false,
    disabled: false,
    dragging: false,
    overflow: true,
}

Chip.propTypes = {
    children: propTypes.string.isRequired,
    className: propTypes.string,
    icon: propTypes.element,
    selected: propTypes.bool,
    disabled: propTypes.bool,
    dragging: propTypes.bool,
    overflow: propTypes.bool,
    onClick: propTypes.func,
    onRemove: propTypes.func,
}

export { Chip }
