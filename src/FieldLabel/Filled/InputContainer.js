import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { children } from '../../utils/react'
import { iconStatusPropType, iconStatuses } from '../../icons/constants'
import { inputSizes, inputSizesPropTypes } from '../../forms/constants'

const styles = css`
    .content {
        box-sizing: border-box;
        flex-grow: 1;
        height: 100%;
        min-width: 0;
        position: relative;
    }

    .content.focused,
    .content.has-value {
        visibility: visible;
    }
`

const createInputContainerClassName = props =>
    cx('content', {
        focused: props.isFocused,
        dense: props.size === inputSizes.DENSE,
        'has-value': props.hasValue,
    })

export const InputContainer = props => (
    <div className={createInputContainerClassName(props)}>
        {props.children}
        <style jsx>{styles}</style>
    </div>
)
