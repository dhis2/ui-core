import propTypes from 'prop-types'
import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { colors, theme, spacers } from '../../theme'
import { inputHeight, inputHeightDense } from '../constants'

const styles = css`
    label {
        box-sizing: border-box;
        color: ${colors.grey700};
        display: block;
        font-size: 16px;
        height: ${inputHeight}px;
        left: 0;
        line-height: ${inputHeight + 2}px;
        overflow: hidden;
        padding-left: ${spacers.dp16};
        position: absolute;
        text-overflow: ellipsis;
        top: 0;
        transform: translate(0, 0);
        transition: all 0.1s;
        white-space: nowrap;
        width: calc(100% - 44px);
    }

    .disabled {
        color: ${theme.disabled};
    }

    .focus,
    .value {
        display: inline-block;
        font-size: 12px;
        height: auto;
        line-height: 14px;
        transform: translate(0, 8px);
        width: auto;
    }

    .dense {
        height: ${inputHeightDense}px;
        line-height: 47px;
        transform: translate(0, 0);
    }

    .dense.focus,
    .dense.value {
        height: auto;
        line-height: 12px;
        transform: translate(0, 8px);
    }

    .required::after {
        padding-left: ${spacers.dp4};
        content: '*';
    }

    .focus {
        color: ${theme.secondary600};
    }

    .valid {
        color: ${theme.valid};
    }

    .valid.focus {
        color: ${colors.blue700};
    }

    .warning {
        color: ${theme.warning};
    }

    .warning.focus {
        color: ${colors.yellow700};
    }

    .error {
        color: ${theme.error};
    }

    .error.focus {
        color: ${colors.red800};
    }
`

export const Label = ({
    focus,
    required,
    valid,
    warning,
    error,
    dense,
    disabled,
    value,
    label,
    htmlFor,
}) => (
    <label
        htmlFor={htmlFor}
        className={cx({
            focus,
            required,
            valid,
            warning,
            error,
            dense,
            disabled,
            value,
        })}
    >
        {label}
        <style jsx>{styles}</style>
    </label>
)
