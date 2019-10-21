import React from 'react'
import cx from 'classnames'
import css from 'styled-jsx/css'
import propTypes from '@dhis2/prop-types'

import { spacers } from './theme.js'

const styles = css`
    label {
        display: block;
        box-sizing: border-box;
        font-size: 14px;
        line-height: 24px;
        padding: 0;
    }

    .disabled {
        cursor: not-allowed;
    }

    .required span::after {
        padding-left: ${spacers.dp4};
        content: '*';
    }
`

const constructClassName = ({ required, disabled, className }) =>
    cx(className, {
        required: required,
        disabled: disabled,
    })

export const Label = ({ htmlFor, children, required, disabled, className }) => (
    <label
        htmlFor={htmlFor}
        className={constructClassName({ className, required, disabled })}
    >
        <span>{children}</span>
        <style jsx>{styles}</style>
    </label>
)

Label.propTypes = {
    htmlFor: propTypes.string,
    children: propTypes.string,
    className: propTypes.string,
    required: propTypes.bool,
    disabled: propTypes.bool,
}
