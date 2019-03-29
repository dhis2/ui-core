import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { inputFontSizeValue } from '../../forms/constants'

const calculatePaddingTop = props => (props.filled ? '14px' : '18.5px')

export class Input extends Component {
    inputRef = React.createRef()

    componentDidMount() {
        if (this.props.isFocused) {
            this.inputRef.current.focus()
        }
    }

    render() {
        const paddingTop = calculatePaddingTop(this.props)
        const className = cx({ disabled: this.props.disabled })

        return (
            <Fragment>
                <input
                    className={className}
                    ref={this.inputRef}
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                    disabled={this.props.disabled}
                    value={this.props.value}
                    onFocus={this.props.onFocus}
                    onBlur={this.props.onBlur}
                    onChange={this.props.onChange}
                />
                <style jsx>{`
                    input {
                        background-color: transparent;
                        border: 0;
                        box-sizing: border-box;
                        font-size: ${inputFontSizeValue};
                        height: 100%;
                        line-height: 19px;
                        outline: 0;
                        padding: ${paddingTop} 0 18.5px;
                        user-select: text;
                        width: 100%;
                    }
                `}</style>
            </Fragment>
        )
    }
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.string,
    disabled: PropTypes.bool.isRequired,
    isFocused: PropTypes.bool.isRequired,
    onFocus: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
}
