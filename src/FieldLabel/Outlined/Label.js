import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import cx from 'classnames'

import {
    borderRadius,
    inputHeight,
    inputHeightDense,
    shrinkedLabelFontSize,
} from '../constants'
import { colors } from '../../theme'
import {
    iconStatusPropType,
    iconStatuses,
    statusColors,
} from '../../icons/constants'
import {
    innerSpacingSides,
    inputFontSizeValue,
    inputSizes,
    inputSizesPropTypes,
} from '../../forms/constants'

const styles = css`
    .legend {
        box-sizing: border-box;
        height: 20px;
        left: 0;
        line-height: 20px;
        padding-left: ${innerSpacingSides};
        position: absolute;
        top: 0;
        width: 100%;
    }

    .legend.disabled {
        cursor: not-allowed;
    }

    .legend.has-value {
        display: flex;
    }

    .legend:before {
        border: 1px solid ${statusColors[iconStatuses.DEFAULT]};
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

    .legend:after {
        border: 1px solid ${statusColors[iconStatuses.DEFAULT]};
        border-bottom: 0;
        border-left: 0;
        border-radius: 0 ${borderRadius} 0 0;
        content: '';
        flex-grow: 1;
        height: ${inputHeight * 0.75}px;
        right: 0;
        position: absolute;
        top: 10px;
        width: calc(100% - 20px);
    }

    .legend.has-value:after {
        width: auto;
        position: relative;
    }

    .legend-label {
        display: inline-block;
        font-size: ${inputFontSizeValue};
        padding: 0 10px 0 0;
        position: relative;
        transform: translate(0px, 29px);
        transition: transform 0.05s ease-in;
    }

    .legend.disabled .legend-label {
        color: ${colors.grey500};
    }

    .has-value .legend-label {
        font-size: ${shrinkedLabelFontSize};
        height: auto;
        line-height: inherit;
        transform: translate(0px, 0px);
    }

    .valid:before,
    .valid:after {
        border-color: ${statusColors[iconStatuses.VALID]};
    }

    .valid .legend-label {
        color: ${statusColors[iconStatuses.VALID]};
    }

    .warning:before,
    .warning:after {
        border-color: ${statusColors[iconStatuses.WARNING]};
    }

    .warning .legend-label {
        color: ${statusColors[iconStatuses.WARNING]};
    }

    .legend.error:before,
    .legend.error:after {
        border-color: ${statusColors[iconStatuses.ERROR]};
    }

    .error .legend-label {
        color: ${statusColors[iconStatuses.ERROR]};
    }

    .dense.has-no-value .legend-label {
        height: ${inputHeightDense}px;
        line-height: ${inputHeightDense}px;
        transform: translate(0px, 10px);
    }

    .legend.dense:before,
    .legend.dense:after {
        height: ${inputHeightDense * 0.75}px;
    }
`

const createLabelClassName = props =>
    cx('legend', {
        disabled: props.disabled,
        dense: props.size === inputSizes.DENSE,
        valid: props.status === iconStatuses.VALID,
        warning: props.status === iconStatuses.WARNING,
        error: props.status === iconStatuses.ERROR,
        'has-no-value': !props.hasValue,
        'has-value': props.hasValue,
    })

export const Label = props => (
    <label htmlFor={props.htmlFor} className={createLabelClassName(props)}>
        <span className="legend-label">{props.label}</span>
        <style jsx>{styles}</style>
    </label>
)

Label.propTypes = {
    label: PropTypes.string.isRequired,
    hasValue: PropTypes.bool.isRequired,
    status: iconStatusPropType.isRequired,
    size: inputSizesPropTypes.isRequired,
    htmlFor: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
}

Label.defaultProps = {
    disabled: false,
}
