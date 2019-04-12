import propTypes from 'prop-types'
import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { InputContainer } from './InputContainer'
import { Label } from './Label'
import { StatusIconNoDefault } from '../../icons/Status'
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
    .label-filled {
        align-items: center;
        background-color: rgba(0, 0, 10, 0.05);
        border-bottom: 2px solid transparent;
        border-radius: 4px;
        cursor: pointer;
        display: flex;
        flex-direction: row;
        height: 56px;
        position: relative;
    }

    .label-filled.disabled {
        cursor: not-allowed;
    }

    .label-filled.dense {
        height: 44px;
    }

    .label-filled:not(.disabled):hover {
        background-color: rgba(0, 0, 10, 0.08);
    }

    .label-filled.focused {
        border-color: ${colors.teal600};
    }

    .label-filled.valid {
        border-color: ${statusColors[iconStatuses.VALID]};
    }

    .label-filled.valid.focused {
        border-color: ${colors.blue700};
    }

    .label-filled.warning {
        border-color: ${statusColors[iconStatuses.WARNING]};
    }

    .label-filled.warning.focused {
        border-color: ${colors.yellow700};
    }

    .label-filled.error {
        border-color: ${statusColors[iconStatuses.ERROR]};
    }

    .label-filled.error.focused {
        border-color: ${colors.red700};
    }

    .content {
        align-items: center;
        box-sizing: border-box;
        display: flex;
        height: 100%;
        position: relative;
        width: 100%;
    }

    .focused .content,
    .has-value .content {
        z-index: 2;
    }

    .status-icon {
        flex-shrink: 0;
        width: 24px;
        height: 24px;
        margin-right: 4px;
    }

    .status-icon:empty {
        display: none;
    }

    .status-icon:last-child {
        margin-right: 10px;
    }
`

const createLabelFilledClassName = props =>
    cx('label-filled', {
        disabled: props.disabled,
        focused: props.isFocused,
        dense: props.size === inputSizes.DENSE,
        valid: props.status === iconStatuses.VALID,
        warning: props.status === iconStatuses.WARNING,
        error: props.status === iconStatuses.ERROR,
        'has-value': props.hasValue,
    })

export const Filled = ({ ...props }) => (
    <div className={createLabelFilledClassName(props)} onClick={props.onClick}>
        <Label
            isFocused={props.isFocused}
            size={props.size}
            status={props.status}
            hasValue={props.isFocused || props.hasValue}
            label={props.label}
            htmlFor={props.htmlFor}
            disabled={props.disabled}
        />

        <div className="content">
            <InputContainer
                size={props.size}
                isFocused={props.isFocused}
                hasValue={props.hasValue}
                size={props.size}
            >
                {props.children}
            </InputContainer>
            <div className="status-icon">
                <StatusIconNoDefault status={props.status} />
            </div>
        </div>

        <style jsx>{styles}</style>
    </div>
)

Filled.propTypes = {
    label: propTypes.string.isRequired,
    children: children.isRequired,
    hasValue: propTypes.bool.isRequired,
    htmlFor: propTypes.string.isRequired,

    disabled: propTypes.bool,
    required: propTypes.bool,
    status: iconStatusPropType,
    size: inputSizesPropTypes,
    onClick: propTypes.func,
}

Filled.defaultProps = {
    disabled: false,
    required: false,
    status: iconStatuses.DEFAULT,
    size: inputSizes.DEFAULT,
    onClick: null,
}
