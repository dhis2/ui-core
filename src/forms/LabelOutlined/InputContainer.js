import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { children } from '../../utils/react'
import {
    innerSpacingSides,
    inputSizes,
    inputSizesPropTypes,
} from '../../forms/constants'
import { inputHeight, inputHeightDense } from './constants'

const styles = css`
    .input-container {
        height: 100%;
        line-height: ${inputHeight}px;
        padding: 0 0 0 ${innerSpacingSides};
        width: 100%;
    }

    .input-container.dense {
        line-height: ${inputHeightDense}px;
    }
`

const createInputContainerClassName = props =>
    cx('input-container', { dense: props.size === inputSizes.DENSE })

export const InputContainer = props => (
    <div className={createInputContainerClassName(props)}>
        {props.children}
        <style jsx>{styles}</style>
    </div>
)

InputContainer.propTypes = {
    size: inputSizesPropTypes.isRequired,
    children: children.isRequired,
}
