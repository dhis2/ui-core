import cx from 'classnames'
import propTypes from 'prop-types'
import React from 'react'
import css from 'styled-jsx/css'

import { statusPropType } from './common-prop-types.js'
import { StatusIconNoDefault } from './icons/Status.js'
import { colors, spacers, theme } from './theme.js'

import { InputContainer } from './Label/InputContainer.js'
import { Label as InternalLabel } from './Label/Label.js'

const styles = css`
    .label-regular {
        position: relative;
        color: ${colors.grey700};
    }

    .disabled {
        cursor: not-allowed;
    }

    .content {
        align-items: center;
        box-sizing: border-box;
        display: flex;
        height: 42px;
        left: 1px;
        position: relative;
        border: 1px solid ${theme.default};
        border-radius: 4px;
    }

    .dense .content {
        height: 34px;
    }

    .focus .content {
        border-color: ${colors.teal400};
    }

    .valid .content {
        border-color: ${theme.valid};
    }

    .warning .content {
        border-color: ${theme.warning};
    }

    .error .content {
        border-color: ${theme.error};
    }

    .disabled .content {
        border-color: ${theme.disabled};
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

export const Label = ({
    children,
    disabled,
    focus,
    dense,
    valid,
    warning,
    error,
    htmlFor,
    value,
    required,
    label,
    loading,
    className,
}) => (
    <div
        className={cx('label-regular', className, {
            disabled,
            focus,
            dense,
            valid,
            warning,
            error,
            value,
        })}
    >
        {label ? (
            <InternalLabel
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
        ) : null}

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

Label.propTypes = {
    htmlFor: propTypes.string.isRequired,
    children: propTypes.node.isRequired,
    label: propTypes.string,

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
