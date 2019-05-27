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
        position: relative;
    }

    .toggle:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0.5);
        transition: transform 0.05s ease-in;
        width: 200%;
        height: 200%;
        background-color: #efefef;
        border-radius: 50%;
        z-index: -1;
        opacity: 0.4;
    }

    .focus .toggle:before {
        transform: translate(-50%, -50%) scale(1);
        transition: transform 0.05s ease-out;
    }

    .toggle:after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        background-color: #efefef;
        border-radius: 50%;
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

    .checked .toggle:before,
    .checked .toggle:after {
        background-color: ${colors.teal400};
    }

    .valid .path,
    .valid .toggle {
        background-color: ${theme.valid};
    }

    .valid .toggle:before,
    .valid .toggle:after {
        background-color: ${colors.valid};
    }

    .warning .path,
    .warning .toggle {
        background-color: ${theme.warning};
    }

    .warning .toggle:before,
    .warning .toggle:after {
        background-color: ${colors.warning};
    }

    .error .path,
    .error .toggle {
        background-color: ${theme.error};
    }

    .error .toggle:before,
    .error .toggle:after {
        background: ${colors.error};
    }

    .disabled {
        cursor: not-allowed;
        color: ${theme.disabled};
    }

    .disabled .path {
        background-color: #dadada;
    }
    .disabled .toggle {
        background-color: #f5f5f5;
    }
`

const SwitchIcon = ({ checked, valid, warning, error, disabled, focus }) => {
    const classes = cx({
        checked: checked,
        disabled,
        valid,
        error,
        warning,
        focus,
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
