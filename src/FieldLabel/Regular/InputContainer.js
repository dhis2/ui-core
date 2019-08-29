import React from 'react'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { inputHeight, inputHeightDense } from '../constants.js'

const styles = css`
    div {
        height: 100%;
        line-height: 40px;
        min-width: 0;
        overflow: hidden;
        padding: 0;
        position: relative;
        width: 100%;
        font-size: 14px;
    }

    .dense {
        line-height: 32px;
    }
`

export const InputContainer = ({ dense, children }) => (
    <div
        className={cx({
            dense,
        })}
    >
        {children}
        <style jsx>{styles}</style>
    </div>
)
