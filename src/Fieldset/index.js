import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { Content } from './Fieldset/Content'
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
`

const createFieldsetClassName = props =>
    cx('fieldset', {
        focused: props.isFocused,
        dense: props.size === inputSizes.DENSE,
        valid: props.status === iconStatuses.VALID,
        warning: props.status === iconStatuses.WARNING,
        error: props.status === iconStatuses.ERROR,
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

            <Content size={props.size}>{props.children}</Content>

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
