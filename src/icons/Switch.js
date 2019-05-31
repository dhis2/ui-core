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
        position: relative;
        transition: transform 0.1s ease-in;
    }

    .toggle:before {
        box-sizing: content-box;
        border: 2px solid ${colors.blue600};
        border-radius: 50%;
        height: calc(100% + 1px);
        left: 50%;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        width: calc(100% + 1px);
        z-index: 2;
    }

    .focus .toggle:before {
        content: '';
    }

    .toggle:after {
        background-color: #efefef;
        border: 2px solid white;
        border-radius: 50%;
        box-sizing: content-box;
        content: '';
        height: 100%;
        left: 50%;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        z-index: 1;
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
        transition: transform 0.1s ease-out;
    }

    .checked .toggle:after {
        background-color: ${colors.teal400};
    }

    .valid .path {
        background-color: ${theme.valid};
    }

    .valid .toggle:after {
        background-color: ${theme.valid};
    }

    .warning .path {
        background-color: ${theme.warning};
    }

    .warning .toggle:after {
        background-color: ${theme.warning};
    }

    .error .path {
        background-color: ${theme.error};
    }

    .error .toggle:after {
        background: ${theme.error};
    }

    .disabled {
        cursor: not-allowed;
        color: ${theme.disabled};
    }

    .disabled .path {
        background-color: #dadada;
    }

    .disabled .toggle:after {
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
