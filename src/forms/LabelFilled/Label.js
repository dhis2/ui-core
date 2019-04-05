import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { colors, theme } from '../../theme'
import { iconStatuses, statusColors } from '../../icons/constants'
import { innerSpacingSides, inputFontSizeValue, inputSizes } from '../constants'
import { inputHeight, inputHeightDense } from '../LabelOutlined/constants'

const styles = css`
    .label {
        box-sizing: border-box;
        color: ${colors.grey700};
        display: block;
        font-size: ${inputFontSizeValue};
        height: ${inputHeight}px;
        left: 0;
        line-height: ${inputHeight}px;
        padding-left: ${innerSpacingSides};
        position: absolute;
        top: 0;
        transform: translate(0, 0);
        transition: all 0.1s;
        white-space: nowrap;
        width: 100%;
    }

    .label.focused,
    .label.has-value {
        display: inline-block;
        font-size: 12px;
        height: auto;
        line-height: 14px;
        transform: translate(0, 8px);
        width: auto;
    }

    .label.dense {
        height: ${inputHeightDense}px;
        line-height: 47px;
        transform: translate(0, 0);
    }

    .label.dense.focused,
    .label.dense.has-value {
        height: auto;
        line-height: 12px;
        transform: translate(0, 7px);
    }

    .label.required::after {
        content: '*';
    }

    .label.focused {
        color: ${theme.secondary600};
    }

    .label.valid {
        color: ${statusColors[iconStatuses.VALID]};
    }

    .label.valid.focused {
        color: ${colors.blue700};
    }

    .label.warning {
        color: ${statusColors[iconStatuses.WARNING]};
    }

    .label.warning.focused {
        color: ${colors.yellow700};
    }

    .label.error {
        color: ${statusColors[iconStatuses.ERROR]};
    }

    .label.error.focused {
        color: ${colors.red700};
    }
`

const createLabelClassName = props =>
    cx('label', {
        focused: props.isFocused,
        required: props.required,
        valid: props.status === iconStatuses.VALID,
        warning: props.status === iconStatuses.WARNING,
        error: props.status === iconStatuses.ERROR,
        dense: props.size === inputSizes.DENSE,
        'has-value': props.hasValue,
    })

export const Label = props => (
    <label htmlFor={props.htmlFor} className={createLabelClassName(props)}>
        {props.label}
        <style jsx>{styles}</style>
    </label>
)
