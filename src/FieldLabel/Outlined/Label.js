import React from 'react'
import css from 'styled-jsx/css'
import propTypes from 'prop-types'

import { spacers } from '../../theme.js'

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

const constructClassName = props => ({
    focus: props.focus,
    required: props.required,
    valid: props.valid,
    warning: props.warning,
    error: props.error,
    dense: props.dense,
    disabled: props.disabled,
    value: props.value,
})

export const Label = props => (
    <label htmlFor={props.htmlFor} className={constructClassName(props)}>
        {props.label}
        <style jsx>{styles}</style>
    </label>
)

Label.propTypes = {
    htmlFor: propTypes.string,
    label: propTypes.string,
    focus: propTypes.bool,
    required: propTypes.bool,
    valid: propTypes.bool,
    warning: propTypes.bool,
    error: propTypes.bool,
    dense: propTypes.bool,
    disabled: propTypes.bool,
    value: propTypes.string,
}
