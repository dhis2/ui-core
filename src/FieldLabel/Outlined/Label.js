import propTypes from 'prop-types'
import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import cx from 'classnames'

import {
    borderRadius,
    inputHeight,
    inputHeightDense,
    shrinkedLabelFontSize,
} from '../constants'

import { colors, theme } from '../../theme'

const styles = css`
    label {
        box-sizing: border-box;
        height: 20px;
        left: 0;
        line-height: 20px;
        position: absolute;
        top: 0;
        width: 100%;
        padding-left: 4px;
    }

    .disabled {
        cursor: not-allowed;
    }

    .value {
        display: flex;
    }

    label:before {
        border: 1px solid ${theme.default};
        border-bottom: 0;
        border-right: 0;
        border-radius: ${borderRadius} 0 0 0;
        content: '';
        height: ${inputHeight * 0.75}px;
        left: 0;
        position: absolute;
        top: 10px;
        width: 12px;
    }

    label:after {
        border: 1px solid ${theme.default};
        border-bottom: 0;
        border-left: 0;
        border-radius: 0 ${borderRadius} 0 0;
        content: '';
        flex-grow: 1;
        height: ${inputHeight * 0.75}px;
        right: 0;
        position: absolute;
        top: 10px;
        width: calc(100% - 12px);
    }

    .value:after {
        width: auto;
        position: relative;
    }

    .required span::after {
        padding-left: 4px;
        content: '*';
    }

    span {
        display: inline-block;
        font-size: 16px;
        padding: 0 10px 0 12px;
        position: relative;
        transform: translate(0px, 29px);
        transition: transform 0.05s ease-in;

        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: calc(100% - 52px);
    }

    .disabled span {
        color: ${theme.disabled};
    }
    .disabled:before,
    .disabled:after {
        border-color: ${theme.disabled};
    }

    .dense:before,
    .dense:after {
        height: ${inputHeightDense * 0.75}px;
    }

    .dense span {
        height: ${inputHeightDense}px;
        line-height: ${inputHeightDense}px;
        transform: translate(0px, 11px);
    }

    .value span {
        font-size: ${shrinkedLabelFontSize};
        height: auto;
        line-height: inherit;
        transform: translate(0px, 0px);
    }

    .focus:before,
    .focus:after {
        border-color: ${colors.teal400};
    }

    .valid:before,
    .valid:after {
        border-color: ${theme.valid};
    }

    .valid span {
        color: ${theme.valid};
    }

    .warning:before,
    .warning:after {
        border-color: ${theme.warning};
    }

    .warning span {
        color: ${theme.warning};
    }

    .error:before,
    .error:after {
        border-color: ${theme.error};
    }

    .error span {
        color: ${theme.error};
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
        {label && <span>{label}</span>}
        <style jsx>{styles}</style>
    </label>
)
