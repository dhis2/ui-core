import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { colors, theme, spacers } from '../theme.js'
import { Content } from './Content'
import { Icon } from './Icon'
import { Remove } from './Remove'

class Chip extends PureComponent {
    onClick = e => {
        if (!this.props.disabled && this.props.onClick) {
            this.props.onClick(e)
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
            <span
                onClick={this.onClick}
                className={cx(className, {
                    selected,
                    disabled,
                    dragging,
                })}
            >
                <Icon icon={this.props.icon} />
                <Content overflow={overflow} children={children} />
                <Remove onRemove={this.props.onRemove} />

                <style jsx>{`
                    span {
                        display: inline-flex;
                        align-items: center;
                        height: 32px;
                        margin: ${spacers.dp4};
                        border-radius: 16px;
                        background-color: ${colors.grey200};
                        font-size: 14px;
                        line-height: 16px;
                        cursor: pointer;
                        user-select: none;
                        color: ${colors.grey900};
                    }

                    span:hover {
                        background-color: ${colors.grey300};
                    }

                    .selected {
                        background-color: ${theme.secondary600};
                        font-weight: 500;
                    }

                    .selected:hover {
                        background-color: #00695c;
                    }

                    .selected,
                    .selected .icon,
                    .selected .remove-icon {
                        color: ${colors.white};
                    }

                    .disabled {
                        cursor: not-allowed;
                        opacity: 0.3;
                    }

                    .disabled .remove-icon {
                        pointer-events: none;
                    }

                    .dragging {
                        box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
                            0 2px 2px 0 rgba(0, 0, 0, 0.14),
                            0 1px 5px 0 rgba(0, 0, 0, 0.12);
                    }
                `}</style>
            </span>
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
