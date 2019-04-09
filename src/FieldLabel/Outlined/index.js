import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { InputContainer } from './InputContainer'
import { Label } from './Label'
import { StatusIconNoDefault } from '../../icons/Status'
import { borderRadius, inputHeight, inputHeightDense } from '../constants'
import { children } from '../../utils/react'
import { colors } from '../../theme'
import {
    iconStatusPropType,
    iconStatuses,
    statusColors,
} from '../../icons/constants'
import {
    innerSpacingSides,
    inputSizes,
    inputSizesPropTypes,
} from '../../forms/constants'

const styles = css`
    .label-outlined {
        height: ${inputHeight + 10}px;
        position: relative;
    }

    .label-outlined.disabled {
        cursor: not-allowed;
    }

    .label-outlined.dense {
        height: ${inputHeightDense + 10}px;
    }

    .label-outlined:before {
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

    .label-outlined.valid:before {
        border-color: ${statusColors[iconStatuses.VALID]};
    }

    .label-outlined.warning:before {
        border-color: ${statusColors[iconStatuses.WARNING]};
    }

    .label-outlined.error:before {
        border-color: ${statusColors[iconStatuses.ERROR]};
    }

    .content {
        align-items: center;
        box-sizing: border-box;
        display: flex;
        height: 54px;
        left: 1px;
        position: relative;
        top: 11px;
        width: calc(100% - 1px);
    }

    .dense .content {
        height: 42px;
    }

    .status-icon {
        flex-shrink: 0;
        width: 24px;
        height: 24px;
    }

    .status-icon:empty {
        display: none;
    }

    .status-icon:last-child {
        margin-right: 10px;
    }
`

const createLabelOutlinedClassName = props =>
    cx('label-outlined', {
        focused: props.isFocused,
        dense: props.size === inputSizes.DENSE,
        valid: props.status === iconStatuses.VALID,
        warning: props.status === iconStatuses.WARNING,
        error: props.status === iconStatuses.ERROR,
        disabled: props.disabled,
    })

export const Outlined = ({ tailIcon: TailIcon, ...props }) => (
    <div className={createLabelOutlinedClassName(props)}>
        <Label
            size={props.size}
            status={props.status}
            hasValue={props.isFocused || props.hasValue}
            label={props.label}
            htmlFor={props.htmlFor}
            disabled={props.disabled}
        />

        <div className="content">
            <InputContainer size={props.size}>{props.children}</InputContainer>
            <div className="status-icon">
                <StatusIconNoDefault status={props.status} />
            </div>
            <TailIcon />
        </div>

        <style jsx>{styles}</style>
    </div>
)

Outlined.propTypes = {
    label: PropTypes.string.isRequired,
    children: children.isRequired,
    hasValue: PropTypes.bool.isRequired,
    htmlFor: PropTypes.string.isRequired,

    tailIcon: PropTypes.element,
    required: PropTypes.bool,
    status: iconStatusPropType,
    size: inputSizesPropTypes,
}

Outlined.defaultProps = {
    status: iconStatuses.DEFAULT,
    size: inputSizes.DEFAULT,
    htmlFor: '',
    tailIcon: () => null,
}
