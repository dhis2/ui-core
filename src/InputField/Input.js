import propTypes from 'prop-types'
import React, { Component, Fragment } from 'react'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { colors, theme } from '../theme'

const calculatePaddingTop = props => (props.filled ? '14px' : '18.5px')

const styles = css`
    input {
        color: ${colors.grey900};
        background-color: transparent;
        border: 0;
        box-sizing: border-box;
        font-size: 16px;
        height: 100%;
        line-height: 16px;
        outline: 0;
        user-select: text;
        width: 100%;

        /** 15px => 16px inner spacing - 1px for border**/
        padding: 18px 0 15px 16px;
    }

    .dense {
        padding-top: 12px;
        padding-bottom: 12px;
        font-size: 14px;
    }

    .disabled {
        color: ${theme.disabled};
        cursor: not-allowed;
    }

    .filled {
        padding: 32px 0 8px 16px;
    }

    .filled.dense {
        padding: 25px 0 5px 16px;
    }
`

export class Input extends Component {
    inputRef = React.createRef()

    componentDidMount() {
        if (this.props.focus) {
            this.inputRef.current.focus()
        }
    }

    render() {
        const paddingTop = calculatePaddingTop(this.props)

        const { dense, filled, disabled } = this.props

        const classes = cx({
            dense,
            filled,
            outlined: !filled,
            disabled,
        })

        return (
            <Fragment>
                <input
                    id={this.props.name}
                    name={this.props.name}
                    className={classes}
                    placeholder={this.props.placeholder}
                    ref={this.inputRef}
                    type={this.props.type}
                    value={this.props.value}
                    disabled={disabled}
                    autocomplete={this.props.autocomplete}
                    autofocus={this.props.autofocus}
                    tabIndex={this.props.tabIndex}
                    readonly={this.props.readonly}
                    onFocus={this.props.onFocus}
                    onBlur={this.props.onBlur}
                    onChange={this.props.onChange}
                />
                <style jsx>{styles}</style>
            </Fragment>
        )
    }
}

Input.propTypes = {
    name: propTypes.string.isRequired,
    type: propTypes.string.isRequired,

    onChange: propTypes.func.isRequired,

    value: propTypes.string,
    placeholder: propTypes.string,
    autocomplete: propTypes.string,
    tabIndex: propTypes.string,

    onFocus: propTypes.func,
    onBlur: propTypes.func,

    focus: propTypes.bool,
    disabled: propTypes.bool,
    filled: propTypes.bool,
    dense: propTypes.bool,
    autofocus: propTypes.bool,
    readonly: propTypes.bool,
}
