import React from 'react'
import css from 'styled-jsx/css'
import cx from 'classnames'
import propTypes from 'prop-types'

import { colors, theme } from '../theme.js'

const common = css`
    div {
        display: inline-block;
        position: relative;
        width: 44px;
        height: 14px;
        cursor: pointer;
    }

    .path {
        left: 1px;
        width: 34px;
        height: 14px;
        border-radius: 8px;
        opacity: 0.5;
        background-color: #bbbaba;
    }

    .toggle {
        left: 0;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.12),
            0 1px 1px 0 rgba(0, 0, 0, 0.24);
        background-color: #efefef;
    }

    .path,
    .toggle {
        position: absolute;
        top: 50%;
        margin: 0;
        transform: translate(0, -50%);
        outline: 0;
        content: '';
    }

    .checked .path {
        background-color: ${colors.teal400};
    }

    .checked .toggle {
        transform: translate(80%, -50%);
        background-color: ${colors.teal400};
    }

    .valid .path,
    .valid .toggle {
        background-color: ${theme.valid};
    }

    .warning .path,
    .warning .toggle {
        background-color: ${theme.warning};
    }

    .error .path,
    .error .toggle {
        background-color: ${theme.error};
    }

    .disabled {
        cursor: not-allowed;
        color: ${colors.grey500};
    }

    .disabled .path {
        background-color: #dadada;
    }
    .disabled .toggle {
        background-color: #f5f5f5;
    }
`

const SwitchIcon = ({ checked, valid, warning, error, disabled }) => {
    const classes = cx({
        checked: checked,
        disabled,
        valid,
        error,
        warning,
    })

    return (
        <div className={classes}>
            <span className="path" />
            <span className="toggle" />

            <style jsx>{common}</style>
        </div>
    )
}

SwitchIcon.propTypes = {
    checked: propTypes.bool,
    disabled: propTypes.bool,
    valid: propTypes.bool,
    warning: propTypes.bool,
    error: propTypes.bool,
}

export { SwitchIcon }
