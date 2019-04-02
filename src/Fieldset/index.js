import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { children } from '../utils/react'
import { colors } from '../theme'
import {
    iconStatusPropType,
    iconStatuses,
    statusColors,
} from '../icons/constants'
import {
    innerSpacingSides,
    inputFontSizeValue,
    inputSizes,
} from '../forms/constants'

const shrinkedLabelFontSize = '12px'
const borderRadius = '4px'
const inputHeight = 56
const inputHeightDense = 34

const styles = css`
    .fieldset {
        padding-top: 10px;
        height: ${inputHeight}px;
        position: relative;
    }

    .fieldset:before {
        border: 1px solid ${statusColors[iconStatuses.DEFAULT]};
        border-top: 0;
        border-radius: 0 0 ${borderRadius} ${borderRadius};
        box-sizing: border-box;
        bottom: 0;
        content: '';
        height: 75%;
        left: 0;
        position: absolute;
        width: 100%;
    }

    .legend {
        box-sizing: border-box;
        display: flex;
        left: 0;
        padding-left: ${innerSpacingSides};
        position: absolute;
        top: 0;
        width: 100%;
    }

    .legend-label {
        font-size: ${inputFontSizeValue};
        height: ${inputHeight + 2}px;
        left: ${innerSpacingSides};
        line-height: ${inputHeight + 2}px;
        padding: 0 10px 0 2px;
        position: absolute;
        top: 7px;
    }

    .has-placeholder .legend-label,
    .has-value .legend-label {
        font-size: ${shrinkedLabelFontSize};
        height: auto;
        left: auto;
        line-height: inherit;
        position: relative;
        top: auto;
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
        top: 7px;
        width: 14px;
    }

    .legend:after {
        border: 1px solid ${statusColors[iconStatuses.DEFAULT]};
        border-bottom: 0;
        border-left: 0;
        border-radius: 0 ${borderRadius} 0 0;
        content: '';
        flex-grow: 1;
        height: ${inputHeight * 0.75}px;
        left: 0;
        position: relative;
        top: 7px;
    }

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

    .fieldset.valid:before,
    .fieldset.valid .legend:before,
    .fieldset.valid .legend:before,
    .fieldset.valid .legend:after {
        border-color: ${statusColors[iconStatuses.VALID]};
    }

    .fieldset.valid .legend-label {
        color: ${statusColors[iconStatuses.VALID]};
    }

    .fieldset.warning:before,
    .fieldset.warning .legend:before,
    .fieldset.warning .legend:before,
    .fieldset.warning .legend:after {
        border-color: ${statusColors[iconStatuses.WARNING]};
    }

    .fieldset.warning .legend-label {
        color: ${statusColors[iconStatuses.WARNING]};
    }

    .fieldset.error:before,
    .fieldset.error .legend:before,
    .fieldset.error .legend:before,
    .fieldset.error .legend:after {
        border-color: ${statusColors[iconStatuses.ERROR]};
    }

    .fieldset.error .legend-label {
        color: ${statusColors[iconStatuses.ERROR]};
    }

    .fieldset.dense {
        height: 34px;
    }

    .fieldset.dense .content,
    .fieldset.dense.has-no-value .legend-label {
        height: ${inputHeightDense + 2}px;
        line-height: ${inputHeightDense + 2}px;
    }

    .fieldset.dense .legend:before,
    .fieldset.dense .legend:after {
        height: ${inputHeightDense * 0.75}px;
    }
`

const createFieldsetClassName = props =>
    cx('fieldset', {
        focused: props.isFocused,
        dense: props.size === inputSizes.DENSE,
        valid: props.status === iconStatuses.VALID,
        warning: props.status === iconStatuses.WARNING,
        error: props.status === iconStatuses.ERROR,
        'has-no-value': !props.hasValue,
        'has-value': props.hasValue,
        'has-placeholder': props.hasPlaceholder,
    })

export const Fieldset = props => {
    const htmlFor = props.htmlFor ? { htmlFor: props.htmlFor } : {}

    return (
        <div className={createFieldsetClassName(props)}>
            <label {...htmlFor} className="legend">
                <span className="legend-label">{props.label}</span>
            </label>

            <div className="content">{props.children}</div>

            <style jsx>{styles}</style>
        </div>
    )
}

Fieldset.propTypes = {
    label: PropTypes.string.isRequired,
    children: children.isRequired,
    status: iconStatusPropType,
    htmlFor: PropTypes.string,
}

Fieldset.defaultProps = {
    status: '',
    htmlFor: '',
}

export default Fieldset
