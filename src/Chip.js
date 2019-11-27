import React, { Component } from 'react'
import propTypes from '@dhis2/prop-types'
import cx from 'classnames'

import { colors, theme, spacers } from './theme.js'
import { Content } from './Chip/Content.js'
import { Icon } from './Chip/Icon.js'
import { Remove } from './Chip/Remove.js'

/**
 * @module
 * @param {Chip.PropTypes} props
 * @returns {React.Component}
 * @example import { Chip } from @dhis2/ui-core
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/atoms/chip.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/chip--default|Storybook}
 */
class Chip extends Component {
    onClick = e => {
        if (!this.props.disabled && this.props.onClick) {
            this.props.onClick({}, e)
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
            onRemove,
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
                <Content overflow={overflow}>{children}</Content>
                <Remove onRemove={onRemove} />

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

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {string} children
 * @prop {string} [className]
 * @prop {Element} [icon]
 * @prop {function} [onClick]
 * @prop {function} [onRemove]
 * @prop {boolean} [selected]
 * @prop {boolean} [disabled]
 * @prop {boolean} [dragging]
 * @prop {boolean} [overflow]
 */
Chip.propTypes = {
    children: propTypes.string.isRequired,
    className: propTypes.string,
    disabled: propTypes.bool,

    dragging: propTypes.bool,
    icon: propTypes.element,

    overflow: propTypes.bool,
    selected: propTypes.bool,
    onClick: propTypes.func,
    onRemove: propTypes.func,
}

export { Chip }
