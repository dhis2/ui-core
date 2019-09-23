import React, { Component, createRef } from 'react'
import propTypes from '@dhis2/prop-types'

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
            tabIndex,
        } = this.props

        return (
            <div>
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
                    tabIndex={tabIndex}
                />

                <style jsx>{`
                    div {
                        width: 0;
                        height: 0;
                        overflow: hidden;
                    }
                `}</style>
            </div>
        )
    }
}

Input.propTypes = {
    onChange: propTypes.func.isRequired,
    name: propTypes.string.isRequired,
    value: propTypes.string,

    tabIndex: propTypes.string,

    onFocus: propTypes.func,
    onBlur: propTypes.func,
    checked: propTypes.bool,
    disabled: propTypes.bool,
    focus: propTypes.bool,
}
