import PropTypes from 'prop-types'
import React, { Component, Fragment, createRef } from 'react'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { colors } from '../../theme'
import {
    innerSpacingSides,
    inputFontSizeValue,
    inputKinds,
    inputSizes,
} from '../../forms/constants'

const styles = css`
    select {
        background: none;
        border: 0;
        color: black;
        font-size: ${inputFontSizeValue};
        height: 100%;
        left: 0;
        outline: 0;
        padding: 0 12px 0 16px;
        position: absolute;
        top: 0;
        width: 100%;
        -webkit-appearance: none;
        -moz-appearance: none;
    }

    select.disabled {
        color: ${colors.grey500};
        cursor: not-allowed;
    }

    select.dense {
        font-size: 14px;
    }

    select.outlined {
        ${/** 15px => 16px inner spacing - 1px of the border**/ ''}
        padding-left: 15px;
    }

    select.filled {
        padding-top: 20px;
    }

    option:not(:checked) {
        color: black;
    }

    select:-moz-focusring {
        color: transparent;
        text-shadow: 0 0 0 #000;
    }
`

export class Select extends Component {
    selectRef = createRef()

    componentDidUpdate(prevProps) {
        if (prevProps.focused !== this.props.focused) {
            if (this.props.focused) {
                this.selectRef.focus()
            } else {
                this.selectRef.blur()
            }
        }
    }

    render() {
        const className = cx({
            dense: this.props.size === inputSizes.DENSE,
            filled: this.props.kind === inputKinds.FILLED,
            outlined: this.props.kind === inputKinds.OUTLINED,
            disabled: this.props.disabled,
        })

        return (
            <select
                className={className}
                onChange={this.props.onChange}
                value={this.props.value}
                disabled={this.props.disabled}
                onFocus={this.props.onFocus}
                onBlur={this.props.onBlur}
            >
                {this.props.list.map(({ value, label, list }) => (
                    <Fragment>
                        <option key={label} value={value}>
                            {label}
                        </option>
                        {list && list.length && (
                            <optgroup label={label}>
                                {list.map(({ value, label }) => (
                                    <option key={label} value={value}>
                                        {label}
                                    </option>
                                ))}
                            </optgroup>
                        )}
                    </Fragment>
                ))}
                <style jsx>{styles}</style>
            </select>
        )
    }
}

Select.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    size: PropTypes.arrayOf([inputSizes.DEFAULT, inputSizes.DENSE]).isRequired,
    kind: PropTypes.arrayOf([inputKinds.FILLED, inputKinds.OUTLINED])
        .isRequired,
    list: PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        list: PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        }),
    }).isRequired,

    disabled: PropTypes.bool,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
}

Select.defaultProps = {
    disabled: false,
    onFocus: null,
    onBlur: null,
}
