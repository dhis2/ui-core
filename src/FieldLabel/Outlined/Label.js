import React from 'react'
import css from 'styled-jsx/css'
import cx from 'classnames'

import {
    borderRadius,
    inputHeight,
    inputHeightDense,
    shrinkedLabelFontSize,
} from '../constants.js'

import { colors, theme, spacers } from '../../theme.js'

const styles = css`
    label {
        display: block;
        box-sizing: border-box;
        height: 24px;
        font-size: 14px;
        line-height: 20px;
        padding: 0 ${spacers.dp16} ${spacers.dp4};
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
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
