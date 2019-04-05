import PropTypes from 'prop-types'
import React, { Component, Fragment } from 'react'
import css from 'styled-jsx/css'
import cx from 'classnames'

import {
    innerSpacingSides,
    inputFontSizeValue,
    inputKinds,
} from '../../forms/constants'

const calculatePaddingTop = props => (props.filled ? '14px' : '18.5px')

const styles = css`
    .input {
        color: black;
        background-color: transparent;
        border: 0;
        box-sizing: border-box;
        font-size: ${inputFontSizeValue};
        height: 100%;
        line-height: 16px;
        padding: 3px 0 10px 16px;
        outline: 0;
        user-select: text;
        width: 100%;
    }

    ${/** 15px => 16px inner spacing - 1px for border**/ ''}
    .input.outlined {
        padding-left: 15px;
    }

    .input.filled.dense {
        font-size: 14px;
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
            outlined: this.props.kind === inputKinds.OUTLINED,
            disabled: this.props.disabled,
        })

        return (
            <Fragment>
                <input
                    id={this.props.name}
                    name={this.props.name}
                    className={className}
                    placeholder={this.props.placeholder}
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
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
    isFocused: PropTypes.bool.isRequired,
    onFocus: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    kind: PropTypes.arrayOf([inputKinds.FILLED, inputKinds.OUTLINED])
        .isRequired,
}
