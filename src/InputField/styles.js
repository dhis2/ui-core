import css from 'styled-jsx/css'

import { theme, colors } from '../theme.js'

const inputFontSize = '16px'

export default css`
    .base {
        display: inline-block;
        width: 100%;
        color: ${colors.grey700};
    }

    .field {
        display: flex;
        position: relative;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding-left: 12px;
    }

    /* we have disabled the pointer-events for the fieldset so we can click
   through it, that's why we target it through the parent's hover */
    .field:hover .flatline,
    .field:hover .flatline.idle.filled,
    .field:hover .flatline.focused {
        border: 1px solid ${colors.grey700};
    }

    .icon {
        margin: 0 8px 0 0;
        color: ${colors.grey700};
    }

    input {
        background-color: transparent;
        border: 0;
        box-sizing: border-box;
        font-size: ${inputFontSize};
        height: 100%;
        line-height: 19px;
        outline: 0;
        padding: 18.5px 0;
        user-select: text;
        width: 100%;
    }

    /*
 * OUTLINE
 *
 */
    .flatline {
        bottom: 0;
        border: 1px solid ${colors.grey500};
        border-radius: 5px;
        box-sizing: border-box;
        display: block;
        height: 100%;
        left: 0;
        padding-left: 8px;
        pointer-events: none;
        position: absolute;
        right: 0;
    }

    .flatline.idle.filled {
        border: 1.5px solid ${colors.grey500};
    }

    .flatline.focused {
        border: 1.5px solid ${theme.secondary600};
    }

    /*
 * flatlined fieldset status states
 */
    .flatline.valid,
    .flatline.valid.idle.filled,
    .flatline.valid.focused {
        border: 1.5px solid ${colors.blue600};
    }
    .flatline.warning,
    .flatline.warning.idle.filled,
    .flatline.warning.focused {
        border: 1.5px solid ${colors.yellow500};
    }
    .flatline.error,
    .flatline.error.idle.filled,
    .flatline.error.focused {
        border: 1.5px solid ${colors.red500};
    }

    /*
 *
 * LABEL
 *
 */

    .label {
        background: white;
        color: ${colors.grey700};
        display: block;
        font-size: ${inputFontSize};
        padding: 0 10px 0 2px;
        pointer-events: none;
        position: absolute;
        transform-origin: top left;
        transform: translate(-2px, 0) scale(1);
        transition: all 0.1s;
        white-space: nowrap;
    }

    .label.required::after {
        content: '*';
    }

    .label.filled.focused {
        color: ${theme.secondary600};
    }

    .label.filled.shrink {
        transform: translate(-2px, -12px) scale(0.75);
    }

    .label.filled.dense.shrink {
        transform: translate(-2px, -8px) scale(0.75);
    }

    .label.filled.has-icon {
        left: 24px;
    }

    .label.filled.shrink.has-icon {
        left: 24px;
    }

    .label.outlined.focused {
        color: ${theme.secondary600};
    }

    .label.outlined.shrink {
        transform: translate(-2px, -24px) scale(0.75);
    }

    .label.outlined.shrink.dense {
        transform: translate(-2px, -18px) scale(0.75);
    }

    .label.outlined.has-icon {
        left: 24px;
    }

    .label.outlined.shrink.has-icon {
        left: 8px;
    }

    /*
 * label status states
 */
    .icon-valid,
    .label.filled.valid,
    .label.outlined.valid {
        color: ${colors.blue600};
    }

    .icon-warning,
    .label.filled.warning,
    .label.outlined.warning {
        color: ${colors.yellow500};
    }

    .icon-error,
    .label.filled.error,
    .label.outlined.error {
        color: ${colors.red500};
    }

    .size-default {
        height: 56px;
    }

    .size-dense {
        height: 44px;
    }

    .field.kind-filled {
        border-bottom: 2px solid transparent;
        border-radius: 5px;
        background-color: rgba(0, 0, 10, 0.05);
    }

    .field.kind-filled:hover,
    .field.kind-filled.focused {
        border-bottom: 2px solid ${theme.secondary600};
        background-color: rgba(0, 0, 10, 0.08);
    }

    .field.kind-filled input {
        padding-top: 14px;
    }

    /*
 * filled field states
 */
    .field.kind-filled.status-valid:hover,
    .field.kind-filled.focused.status-valid {
        border-bottom: 2px solid ${colors.blue600};
    }
    .field.kind-filled.status-warning:hover,
    .field.kind-filled.focused.status-warning {
        border-bottom: 2px solid ${colors.yellow500};
    }
    .field.kind-filled.status-error:hover,
    .field.kind-filled.focused.status-error {
        border-bottom: 2px solid ${colors.red500};
    }

    /* disabled */

    .label.filled.disabled,
    .field.kind-filled.disabled:hover,
    .field.kind-filled.disabled {
        border: 2px solid transparent;
        background-color: rgba(0, 0, 10, 0.02);
        color: ${colors.grey500};
    }

    .label.filled.disabled {
        background-color: transparent;
    }

    .field.disabled .flatline,
    .field.disabled:hover .flatline {
        border: 1px solid rgba(196, 196, 196, 0.2);
    }

    .label.kind-outlined.disabled {
        color: ${colors.grey500};
    }

    .disabled,
    .disabled::placeholder {
        color: ${colors.grey500};
        cursor: not-allowed;
    }

    /* IE */
    _:-ms-input-placeholder,
    :root .flatline,
    _:-ms-input-placeholder,
    :root .field.kind-filled {
        border-radius: 0px;
    }

    _:-ms-input-placeholder,
    :root .label {
        transform: translate(-2px, -8px) scale(1);
    }

    _:-ms-input-placeholder,
    :root .label.filled.shrink {
        transform: translate(-2px, -20px) scale(0.75);
    }
    _:-ms-input-placeholder,
    :root .label.filled.dense.shrink {
        transform: translate(-2px, -18px) scale(0.75);
    }
    _:-ms-input-placeholder,
    :root .label.outlined.shrink {
        transform: translate(-2px, -32px) scale(0.75);
    }

    _:-ms-input-placeholder,
    :root .label.outlined.shrink.dense {
        transform: translate(-2px, -26px) scale(0.75);
    }
`
