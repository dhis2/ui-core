import propTypes from 'prop-types'
import React, { Component, createRef } from 'react'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { colors, theme } from '../theme.js'

const styles = css`
    select {
        background: none;
        border: 0;
        color: ${colors.grey900};
        font-size: inherit;
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

    option:not(:checked) {
        color: black;
    }

    select:-moz-focusring {
        color: transparent;
        text-shadow: 0 0 0 #000;
    }
`

export class InternalSelect extends Component {
    selectRef = createRef()

    componentDidMount() {
        if (this.props.focus) {
            this.selectRef.current.focus()
        }
    }

    render() {
        const {
            dense,
            disabled,
            onChange,
            onFocus,
            onBlur,
            value,
            children,
            name,
            tabIndex,
        } = this.props
        const className = cx({
            dense,
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
                ref={this.selectRef}
                name={name}
                tabIndex={tabIndex}
            >
                <option key="hidden-default-value" hidden disabled value="-1" />
                {children}
                <style jsx>{styles}</style>
            </select>
        )
    }
}

InternalSelect.propTypes = {
    name: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,

    value: propTypes.string,
    tabIndex: propTypes.string,

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
    dense: propTypes.bool,
    focus: propTypes.bool,
}
