import cx from 'classnames'
import propTypes from 'prop-types'
import React, { Component, Fragment } from 'react'

import { statusPropType } from '../common-prop-types'
import { theme } from '../theme.js'
import { Icon } from './Icon'
import { Input } from './Input'
import { Label } from './Label'

class Checkbox extends Component {
    constructor(props) {
        super(props)

        this.state = {
            focus: props.initialFocus,
        }
    }

    onFocus = e => {
        this.setState({ focus: true })

        if (this.props.onFocus) {
            this.props.onFocus(e)
        }
    }

    onBlur = e => {
        this.setState({ focus: false })

        if (this.props.onBlur) {
            this.props.onBlur(e)
        }
    }

    render() {
        const {
            checked = false,
            className,
            disabled,
            error,
            icon,
            indeterminate,
            label,
            name,
            onChange,
            required,
            tabIndex,
            valid,
            value,
            warning,
        } = this.props
        const { focus } = this.state

        return (
            <Fragment>
                <label
                    className={cx('base', className, {
                        disabled,
                        focus,
                    })}
                >
                    <Input
                        name={name}
                        value={value}
                        checked={checked}
                        disabled={disabled}
                        focus={focus}
                        onChange={onChange}
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                        tabIndex={tabIndex}
                    />

                    <Icon
                        focus={focus}
                        checked={checked}
                        disabled={disabled}
                        valid={valid}
                        error={error}
                        warning={warning}
                        indeterminate={indeterminate}
                    />

                    {icon}

                    <Label required={required}>{label}</Label>

                    <style jsx>{`
                        label {
                            display: flex;
                            flex-direction: row;
                            align-items: center;
                            justify-content: flex-start;
                            cursor: pointer;
                            pointer-events: all;
                            user-select: none;
                        }

                        .disabled {
                            cursor: not-allowed;
                            color: ${theme.disabled};
                        }

                        .focus {
                            outline: 1px;
                        }
                    `}</style>
                </label>
            </Fragment>
        )
    }
}

Checkbox.propTypes = {
    onChange: propTypes.func.isRequired,

    value: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    label: propTypes.string.isRequired,
    tabIndex: propTypes.string,
    className: propTypes.string,

    onFocus: propTypes.func,
    onBlur: propTypes.func,

    icon: propTypes.element,

    indeterminate: propTypes.bool,
    required: propTypes.bool,
    checked: propTypes.bool,
    disabled: propTypes.bool,
    valid: statusPropType,
    warning: statusPropType,
    error: statusPropType,
    initialFocus: propTypes.bool,
}

export { Checkbox }
