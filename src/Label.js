import React from 'react'
import cx from 'classnames'
import css from 'styled-jsx/css'
import propTypes from 'prop-types'

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

const constructClassName = props =>
    cx({
        required: props.required,
        disabled: props.disabled,
    })

export const Label = props => (
    <label htmlFor={props.htmlFor} className={constructClassName(props)}>
        <span>{props.children}</span>
        <style jsx>{styles}</style>
    </label>
)

Label.propTypes = {
    htmlFor: propTypes.string,
    children: propTypes.string,
    required: propTypes.bool,
    disabled: propTypes.bool,
}
