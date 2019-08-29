import React from 'react'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { inputHeight, inputHeightDense } from '../constants.js'

const styles = css`
    div {
        box-sizing: border-box;
        flex-grow: 1;
        height: 100%;
        line-height: ${inputHeight}px;
        min-width: 0;
        position: relative;
        font-size: 16px;
    }

    .focus,
    .value {
        visibility: visible;
    }

    .dense {
        line-height: ${inputHeightDense}px;
    }
`

export const InputContainer = ({ focus, dense, value, children }) => (
    <div
        className={cx({
            focus,
            dense,
            value,
        })}
    >
        {children}
        <style jsx>{styles}</style>
    </div>
)
