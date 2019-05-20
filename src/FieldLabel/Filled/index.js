import propTypes from 'prop-types'
import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { InputContainer } from './InputContainer'
import { Label } from './Label'
import { StatusIconNoDefault } from '../../icons/Status'
import { colors, theme } from '../../theme'

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

    .label-filled:not(.disabled):hover {
        background-color: rgba(0, 0, 10, 0.08);
    }

    .disabled {
        cursor: not-allowed;
    }

    .dense {
        height: 44px;
    }

    .focus {
        border-color: ${colors.teal600};
    }

    .valid {
        border-color: ${theme.valid};
    }

    .valid.focus {
        border-color: ${colors.blue700};
    }

    .warning {
        border-color: ${theme.warning};
    }

    .warning.focus {
        border-color: ${colors.yellow700};
    }

    .error {
        border-color: ${theme.error};
    }

    .error.focus {
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

    .focus .content,
    .value .content {
        z-index: 2;
    }

    .status-icon {
        flex-shrink: 0;
        width: 24px;
        height: 24px;
        margin-right: 4px;
        margin-left: 10px;
    }

    .status-icon:empty {
        display: none;
    }

    .status-icon:last-child {
        margin-right: 10px;
    }
`

export const Filled = ({
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
        className={cx('label-filled', className, {
            disabled,
            focus,
            dense,
            valid,
            warning,
            error,
            value,
        })}
        onClick={onClick}
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
            <InputContainer dense={dense} focus={focus} value={value}>
                {children}
            </InputContainer>

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

Filled.propTypes = {
    label: propTypes.string.isRequired,
    htmlFor: propTypes.string.isRequired,

    onClick: propTypes.func,

    focus: propTypes.bool,
    value: propTypes.bool,
    disabled: propTypes.bool,
    required: propTypes.bool,

    valid: propTypes.bool,
    error: propTypes.bool,
    warning: propTypes.bool,
    loading: propTypes.bool,

    dense: propTypes.bool,

    className: propTypes.string,
}
