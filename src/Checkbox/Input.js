import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import css from 'styled-jsx/css'

export const Input = ({ onChange, checked, disabled }) => (
    <Fragment>
        <input
            type="checkbox"
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
    onChange: PropTypes.func.isRequired,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
}
