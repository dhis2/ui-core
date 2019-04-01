import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { inputFontSizeValue } from '../../forms/constants'

const calculatePaddingTop = props => (props.filled ? '14px' : '18.5px')

const styles = css`
    .input {
        background-color: transparent;
        border: 0;
        box-sizing: border-box;
        font-size: ${inputFontSizeValue};
        height: 100%;
        line-height: 19px;
        outline: 0;
        user-select: text;
        width: 100%;
    }

    .input.outlined {
        height: calc(100% - 12px);
        margin-top: 12px;
    }

    .input.outlined.dense {
        height: calc(100% - 12px);
        margin-top: 12px;
    }

    .input.filled {
        height: calc(100% - 12px);
        margin-top: 12px;
    }

    .input.filled.dense {
        height: calc(100% - 8px);
        margin-top: 8px;
    }
`

export class Input extends Component {
    inputRef = React.createRef()

    componentDidMount() {
        if (this.props.isFocused) {
            this.inputRef.current.focus()
        }
    }

    render() {
        const paddingTop = calculatePaddingTop(this.props)
        const className = cx('input', {
            dense: this.props.isDense,
            filled: this.props.isFilled,
            outlined: !this.props.isFilled,
            disabled: this.props.disabled,
        })

        return (
            <Fragment>
                <input
                    className={className}
                    ref={this.inputRef}
                    type={this.props.type}
                    disabled={this.props.disabled}
                    value={this.props.value}
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
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
    isFocused: PropTypes.bool.isRequired,
    onFocus: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
}
