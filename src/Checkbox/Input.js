import React, { Fragment } from 'react'
import propTypes from 'prop-types'
import css from 'styled-jsx/css'

export const Input = ({ onChange, checked, disabled, name }) => (
    <Fragment>
        <input
            type="checkbox"
            name={name}
            onChange={onChange}
            checked={checked}
            disabled={disabled}
        />

        <style jsx>{`
            input {
                display: none;
            }
        `}</style>
    </Fragment>
)

Input.propTypes = {
    onChange: propTypes.func.isRequired,
    name: propTypes.string.isRequired,

    checked: propTypes.bool,
    disabled: propTypes.bool,
}
