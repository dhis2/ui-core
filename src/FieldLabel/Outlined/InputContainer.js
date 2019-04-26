import propTypes from 'prop-types'
import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { inputHeight, inputHeightDense } from '../constants'

const styles = css`
    div {
        height: 100%;
        line-height: ${inputHeight}px;
        min-width: 0;
        overflow: hidden;
        padding: 0;
        position: relative;
        width: 100%;
    }

    .dense {
        line-height: ${inputHeightDense}px;
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
