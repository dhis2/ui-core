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
    checked: PropTypes.bool.isRequired,
    disabled: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
}
