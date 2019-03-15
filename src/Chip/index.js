import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { colors, fonts } from '../theme.js'
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

    svg hover {
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
            label,
            selected,
            disabled,
            dragging,
            overflow,
            className,
        } = this.props

        return (
            <div
                className={cx('base', className, {
                    selected,
                    disabled,
                    dragging,
                    static: !this.props.onClick,
                })}
                onClick={this.onClick}
            >
                {this.showIcon()}
                <span className={cx('label', { overflow })}>{label}</span>
                {this.showRemove()}

                <style jsx>{fonts}</style>
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
    className: PropTypes.string,
    label: PropTypes.string.isRequired,
    icon: PropTypes.element,
    selected: PropTypes.bool,
    disabled: PropTypes.bool,
    dragging: PropTypes.bool,
    overflow: PropTypes.bool,
    onClick: PropTypes.func,
    onRemove: PropTypes.func,
}

export { Chip }
export default Chip
