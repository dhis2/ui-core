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
        } = this.props

        return (
            <Fragment>
                <input
                    tabIndex="0"
                    ref={this.ref}
                    type="checkbox"
                    name={name}
                    value={value}
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    checked={checked}
                    disabled={disabled}
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
    onFocus: propTypes.func.isRequired,
    onBlur: propTypes.func.isRequired,
    name: propTypes.string.isRequired,

    checked: propTypes.bool,
    disabled: propTypes.bool,
}
