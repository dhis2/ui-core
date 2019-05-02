import propTypes from 'prop-types'
import React, { Component, Fragment, createRef } from 'react'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { colors, theme } from '../theme'

const styles = css`
    select {
        background: none;
        border: 0;
        color: ${colors.grey900};
        font-size: 16px;
        height: 100%;
        left: 0;
        outline: 0;
        /** 15px => 16px inner spacing - 1px of the border**/
        padding: 0 12px 0 15px;
        position: absolute;
        top: 0;
        width: 100%;
        -webkit-appearance: none;
        -moz-appearance: none;
    }

    .disabled {
        color: ${theme.disabled};
        cursor: not-allowed;
    }

    .dense {
        font-size: 14px;
    }

    .filled {
        padding-top: 24px;
        padding-left: 16px;
    }

    .filled.dense {
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
        const {
            dense,
            filled,
            disabled,
            onChange,
            onFocus,
            onBlur,
            value,
            children,
        } = this.props
        const className = cx({
            dense,
            filled,
            disabled,
        })

        return (
            <select
                className={className}
                onChange={onChange}
                value={value || -1}
                disabled={disabled}
                onFocus={onFocus}
                onBlur={onBlur}
            >
                <option key="hidden-default-value" hidden disabled value="-1" />
                {children}
                <style jsx>{styles}</style>
            </select>
        )
    }
}

Select.propTypes = {
    value: propTypes.string,
    onChange: propTypes.func.isRequired,

    onFocus: propTypes.func,
    onBlur: propTypes.func,

    children: propTypes.oneOfType([
        propTypes.arrayOf(
            propTypes.shape({
                tagName: propTypes.oneOf(['OPTION', 'OPTGROUP']),
            })
        ),
        propTypes.shape({
            tagName: propTypes.oneOf(['OPTION', 'OPTGROUP']),
        }),
    ]),

    disabled: propTypes.bool,
    filled: propTypes.bool,
    dense: propTypes.bool,
}
