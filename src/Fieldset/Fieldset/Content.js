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
import { inputHeight, inputHeightDense } from '../constants'

const styles = css`
    .content {
        height: ${inputHeight + 2}px;
        line-height: ${inputHeight + 2}px;
        padding: 0 0 0 ${innerSpacingSides};
        position: relative;
        top: -2px;
        width: calc(100% - 1px);
        box-sizing: border-box;
        left: 1px;
    }

    .content.dense {
        height: ${inputHeightDense + 2}px;
        line-height: ${inputHeightDense + 2}px;
    }
`

const createContentClassName = props =>
    cx('content', { dense: props.size === inputSizes.DENSE })

export const Content = props => (
    <div className={createContentClassName(props)}>
        {props.children}
        <style jsx>{styles}</style>
    </div>
)

Content.propTypes = {
    size: inputSizesPropTypes.isRequired,
    children: children.isRequired,
}
