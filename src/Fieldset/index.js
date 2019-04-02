import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { Label } from './Fieldset/Label'
import { borderRadius, inputHeight, inputHeightDense } from './constants'
import { children } from '../utils/react'
import { colors } from '../theme'
import {
    iconStatusPropType,
    iconStatuses,
    statusColors,
} from '../icons/constants'
import {
    innerSpacingSides,
    inputSizes,
    inputSizesPropTypes,
} from '../forms/constants'

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

    .fieldset.valid:before {
        border-color: ${statusColors[iconStatuses.VALID]};
    }

    .fieldset.warning:before {
        border-color: ${statusColors[iconStatuses.WARNING]};
    }

    .fieldset.error:before {
        border-color: ${statusColors[iconStatuses.ERROR]};
    }

    .fieldset.dense {
        height: 34px;
    }

    .fieldset.dense .content {
        height: ${inputHeightDense + 2}px;
        line-height: ${inputHeightDense + 2}px;
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
    })

export const Fieldset = props => {
    return (
        <div className={createFieldsetClassName(props)}>
            <Label
                size={props.size}
                status={props.status}
                hasValue={props.hasValue}
                label={props.label}
                htmlFor={props.htmlFor}
            />

            <div className="content">{props.children}</div>

            <style jsx>{styles}</style>
        </div>
    )
}

Fieldset.propTypes = {
    label: PropTypes.string.isRequired,
    children: children.isRequired,
    hasValue: PropTypes.bool.isRequired,

    status: iconStatusPropType,
    size: inputSizesPropTypes,
    htmlFor: PropTypes.string,
}

Fieldset.defaultProps = {
    status: iconStatuses.DEFAULT,
    size: inputSizes.DEFAULT,
    htmlFor: '',
}

export default Fieldset
