import propTypes from 'prop-types'
import React, { Component, Fragment } from 'react'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { colors, theme, spacers } from '../theme.js'

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
        padding-top: ${spacers.dp12};
        padding-bottom: ${spacers.dp12};
        font-size: 14px;
    }

    .disabled {
        color: ${theme.disabled};
        cursor: not-allowed;
    }

    .filled {
        padding: ${spacers.dp32} 0 ${spacers.dp8} ${spacers.dp16};
    }

    .filled.dense {
        padding: ${spacers.dp24} 0 ${spacers.dp4} ${spacers.dp16};
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
    filled: propTypes.bool,
    dense: propTypes.bool,
}
