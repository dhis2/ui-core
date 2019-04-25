import propTypes from 'prop-types'
import React, { Component, Fragment } from 'react'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { colors } from '../theme'
import {
    innerSpacingSides,
    inputFontSizeValue,
    inputKinds,
} from '../forms/constants'

const calculatePaddingTop = props => (props.filled ? '14px' : '18.5px')

const styles = css`
    input {
        color: black;
        background-color: transparent;
        border: 0;
        box-sizing: border-box;
        font-size: ${inputFontSizeValue};
        height: 100%;
        line-height: 16px;
        outline: 0;
        user-select: text;
        width: 100%;
    }

    .filled {
        padding: 32px 0 8px 16px;
    }

    .outlined {
        padding: 18px 0 18px 16px;
    }

    .disabled {
        color: ${colors.grey500};
        cursor: not-allowed;
    }

    ${/** 15px => 16px inner spacing - 1px for border**/ ''}
    .outlined {
        padding-left: 15px;
    }

    .filled.dense {
        font-size: 14px;
        padding: 25px 0 5px 16px;
    }

    .outlined.dense {
        padding-top: 12px;
        padding-bottom: 12px;
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

        const className = cx({
            dense: this.props.isDense,
            filled: this.props.kind === inputKinds.FILLED,
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
    name: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    value: propTypes.string.isRequired,
    disabled: propTypes.bool.isRequired,
    isFocused: propTypes.bool.isRequired,
    onFocus: propTypes.func.isRequired,
    onBlur: propTypes.func.isRequired,
    onChange: propTypes.func.isRequired,
    placeholder: propTypes.string.isRequired,
    kind: propTypes.arrayOf([inputKinds.FILLED, inputKinds.OUTLINED])
        .isRequired,
}
