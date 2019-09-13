import propTypes from 'prop-types'
import React, { Component, Fragment } from 'react'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { colors, theme } from './theme.js'

const styles = css`
    input {
        display: block;
        color: ${colors.grey900};
        background-color: transparent;
        border: 0;
        box-sizing: border-box;
        font-size: inherit;
        height: 100%;
        line-height: 16px;
        outline: 0;
        user-select: text;
        width: 100%;

        /** 15px => 16px inner spacing - 1px for border**/
        padding: 13px 0 11px 15px;
    }

    .dense {
        padding-top: 9px;
        padding-bottom: 9px;
    }

    .disabled {
        color: ${theme.disabled};
        cursor: not-allowed;
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
        const { dense, disabled } = this.props

        const classes = cx({
            dense,
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
                    tabIndex={this.props.tabIndex}
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
    tabIndex: propTypes.string,

    onFocus: propTypes.func,
    onBlur: propTypes.func,

    focus: propTypes.bool,
    disabled: propTypes.bool,
    dense: propTypes.bool,
}
