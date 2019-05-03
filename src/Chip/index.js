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
    onClick = e => {
        if (!this.props.disabled && this.props.onClick) {
            this.props.onClick(e)
        }
    }

    onRemove = e => {
        e.stopPropagation() // stop onRemove from triggering onClick on container
        this.props.onRemove(e)
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
                <span onClick={this.onRemove}>
                    <Cancel className={removeIcon.className} />

                    {removeIcon.styles}
                </span>
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

Chip.propTypes = {
    children: propTypes.string.isRequired,
    className: propTypes.string,
    icon: propTypes.element,

    onClick: propTypes.func,
    onRemove: propTypes.func,

    selected: propTypes.bool,
    disabled: propTypes.bool,
    dragging: propTypes.bool,
    overflow: propTypes.bool,
}

export { Chip }
