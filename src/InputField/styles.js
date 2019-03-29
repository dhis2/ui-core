import css from 'styled-jsx/css'

import { theme, colors } from '../theme.js'
import {
    inputFontSizeValue,
    heightDefault,
    heightDense,
} from '../forms/constants'

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

    /**
     *
     * FIELD
     *
     */
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
