import React, { Component, Fragment, createRef } from 'react'
import propTypes from 'prop-types'
import css from 'styled-jsx/css'

export class Input extends Component {
    ref = createRef()

    componentDidMount() {
        if (this.props.focus) {
            this.ref.current.focus()
        }
    }

    render() {
        const {
            onChange,
            checked,
            disabled,
            name,
            value,
            onFocus,
            onBlur,
            autocomplete,
            autofocus,
            tabIndex,
            readonly,
        } = this.props

        return (
            <Fragment>
                <input
                    ref={this.ref}
                    type="checkbox"
                    name={name}
                    value={value}
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    checked={checked}
                    disabled={disabled}
                    autocomplete={autocomplete}
                    autofocus={autofocus}
                    tabIndex={tabIndex}
                    readonly={readonly}
                />

                <style jsx>{`
                    input {
                        display: block;
                        opacity: 0;
                        width: 0;
                        height: 0;
                        outline: 0;
                    }
                `}</style>
            </Fragment>
        )
    }
}

Input.propTypes = {
    onChange: propTypes.func.isRequired,
    name: propTypes.string.isRequired,

    autocomplete: propTypes.string,
    tabIndex: propTypes.string,

    onFocus: propTypes.func,
    onBlur: propTypes.func,
    checked: propTypes.bool,
    disabled: propTypes.bool,
    autofocus: propTypes.bool,
    readonly: propTypes.bool,
}
