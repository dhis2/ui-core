import cx from 'classnames'
import propTypes from 'prop-types'
import React from 'react'
import css from 'styled-jsx/css'

import { statusPropType } from '../../common-prop-types'
import { StatusIconNoDefault } from '../../icons/Status'
import { colors, spacers, theme } from '../../theme.js'
import { borderRadius, inputHeight, inputHeightDense } from '../constants.js'
import { InputContainer } from './InputContainer'
import { Label } from './Label'

const styles = css`
    .label-outlined {
        height: ${inputHeight + 10}px;
        position: relative;
        color: ${colors.grey700};
    }

    .disabled {
        cursor: not-allowed;
    }

    .dense {
        height: ${inputHeightDense + 10}px;
    }

    .label-outlined:before {
        border: 1px solid ${theme.default};
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

    .focus:before {
        border-color: ${colors.teal400};
    }

    .valid:before {
        border-color: ${theme.valid};
    }

    .warning:before {
        border-color: ${theme.warning};
    }

    .error:before {
        border-color: ${theme.error};
    }

    .disabled:before {
        border-color: ${theme.disabled};
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
        margin-right: ${spacers.dp4};
        margin-left: ${spacers.dp12};
    }

    .status-icon:empty {
        display: none;
    }

    .status-icon:last-child {
        margin-right: ${spacers.dp12};
    }
`

export const Outlined = ({
    children,
    disabled,
    focus,
    dense,
    valid,
    warning,
    error,
    onClick,
    htmlFor,
    value,
    required,
    label,
    loading,
    className,
}) => (
    <div
        className={cx('label-outlined', className, {
            disabled,
            focus,
            dense,
            valid,
            warning,
            error,
            value,
        })}
    >
        <Label
            focus={focus}
            required={required}
            valid={valid}
            warning={warning}
            error={error}
            dense={dense}
            disabled={disabled}
            value={focus || value}
            label={label}
            htmlFor={htmlFor}
        />

        <div className="content">
            <InputContainer dense={dense}>{children}</InputContainer>
            <div className="status-icon">
                <StatusIconNoDefault
                    error={error}
                    valid={valid}
                    loading={loading}
                    warning={warning}
                />
            </div>
        </div>

        <style jsx>{styles}</style>
    </div>
)

Outlined.propTypes = {
    label: propTypes.string.isRequired,
    htmlFor: propTypes.string.isRequired,

    onClick: propTypes.func,

    focus: propTypes.bool,
    value: propTypes.bool,
    disabled: propTypes.bool,
    required: propTypes.bool,

    valid: statusPropType,
    error: statusPropType,
    warning: statusPropType,
    loading: propTypes.bool,

    dense: propTypes.bool,

    className: propTypes.string,
}
