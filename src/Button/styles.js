import css from 'styled-jsx/css'

import { colors, theme, fonts } from '../theme.js'

export default css`
    .base {
        display: inline-flex;
        position: relative;
        align-items: center;
        justify-content: center;
        border: 1px solid transparent;
        border-radius: 4px;
        background-color: transparent;
        font-weight: 400;
        letter-spacing: 0.5px;
        text-decoration: none;
        cursor: pointer;
        transition: all 0.15s cubic-bezier(0.4, 0, 0.6, 1);
        user-select: none;
    }

    .base:disabled {
        cursor: not-allowed;
    }

    .base:focus {
        /* Prevent default browser behavior whcih adds an outline */
        outline: none;
    }

    .base.icon {
        padding-left: 10px;
    }

    .size-small {
        height: 28px;
        padding: 0 16px;
        font-size: 14px;
        line-height: 16px;
    }

    .size-medium {
        height: 36px;
        padding: 0 16px;
        font-size: 14px;
        line-height: 16px;
    }

    .size-large {
        height: 43px;
        padding: 0 24px;
        font-size: 16px;
        letter-spacing: 0.57px;
        line-height: 19px;
    }

    .icon-only i {
        margin-right: 0;
        margin-left: 0;
    }

    .kind-basic {
        border: 1px solid #c4c9cc;
        background-color: #f9fafb;
    }

    .kind-basic:hover {
        border: 1px solid #c4c9cc;
        background-color: #f3f4f5;
    }

    .kind-basic:active,
    .kind-basic:active:focus {
        border: 1px solid #c5c9cc;
        background-color: #f3f4f5;
        box-shadow: 0 0 0 1px rgb(0, 0, 0, 0.1) inset;
    }

    .kind-basic:focus {
        border: 1px solid ${theme.primary600};
        background-color: #f9fafb;
        box-shadow: 0 0 0 1px ${theme.primary600};
    }

    .kind-basic:disabled {
        border: 1px solid #c4c9cc;
        background-color: #f9fafb;
        box-shadow: none;
        color: ${colors.grey500};
        fill: ${colors.grey500};
    }

    .kind-primary {
        border: 1px solid ${theme.primary800};
        background: linear-gradient(180deg, #1565c0 0%, #0650a3 100%);
        background-color: #2b61b3;
        color: ${colors.white};
        fill: ${colors.white};
    }

    .kind-primary:hover {
        border: 1px solid ${theme.primary800};
        background: linear-gradient(180deg, #054fa3 0%, #034793 100%);
        background-color: #21539f;
    }

    .kind-primary:active,
    .kind-primary:active:focus {
        border: 1px solid ${theme.primary800};
        background: linear-gradient(180deg, #054fa3 0%, #034793 100%);
        background-color: #1c4a90;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.18) inset;
    }

    .kind-primary:focus {
        border: 1px solid #001d47;
        background: linear-gradient(180deg, #1565c0 0%, #0650a3 100%);
        background-color: #285dac;
        box-shadow: 0 0 0 1px #001d47 inset;
    }

    .kind-primary:disabled {
        border: 1px solid ${theme.primary800};
        background: linear-gradient(180deg, #1565c0 0%, #0650a3 100%);
        background-color: #b6c8e2;
        box-shadow: none;
        color: ${colors.white};
        fill: ${colors.white};
        opacity: 0.33;
    }

    .kind-secondary {
        border: 1px solid ${colors.grey300};
        background-color: transparent;
    }

    .kind-secondary:hover {
        border: 1px solid ${colors.grey300};
        background-color: rgba(158, 158, 158, 0.07);
    }

    .kind-secondary:active,
    .kind-secondary:active:focus {
        border: 1px solid ${colors.grey300};
        background-color: rgba(158, 158, 158, 0.18);
        box-shadow: none;
    }

    .kind-secondary:focus {
        border: 1px solid ${theme.primary600};
        background-color: transparent;
        box-shadow: 0 0 0 1px ${theme.primary600};
    }

    .kind-secondary:disabled {
        border: 1px solid ${colors.grey300};
        background-color: transparent;
        box-shadow: none;
        color: ${colors.grey500};
        fill: ${colors.grey500};
    }

    .kind-destructive {
        border: 1px solid #a10b0b;
        background: linear-gradient(180deg, #d32f2f 0%, #b71c1c 100%);
        background-color: #b9242b;
        color: ${colors.white};
        fill: ${colors.white};
    }

    .kind-destructive:hover {
        border: 1px solid #a10b0b;
        background: linear-gradient(180deg, #b81c1c 0%, #b80c0b 100%);
        background-color: #ac0f1a;
    }

    .kind-destructive:active,
    .kind-destructive:active:focus {
        border: 1px solid #a10b0b;
        background: linear-gradient(180deg, #b81c1c 0%, #b80c0b 100%);
        background-color: #ac101b;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.18) inset;
    }

    .kind-destructive:focus {
        border: 1px solid #5e0303;
        background: linear-gradient(180deg, #d32f2f 0%, #b71c1c 100%);
        background-color: #b72229;
        box-shadow: 0 0 0 1px #5e0303 inset;
    }

    .kind-destructive:disabled {
        border: 1px solid #a10b0b;
        background: linear-gradient(180deg, #d32f2f 0%, #b71c1c 100%);
        background-color: #e5b5b7;
        box-shadow: none;
        color: ${colors.white};
        fill: ${colors.white};
        opacity: 0.33;
    }

    /* IE11 hacks */
    @media all and (-ms-high-contrast: none) {
        /*
       Graceful degradation: remove the rounded corners on all buttons apart from circle.
       These are not rendered correctly in IE11, where they produce white pixels in the corners
    */
        .base {
            border-radius: 0;
        }
    }

    .button-icon {
        margin-right: 10px;
        color: inherit;
        fill: inherit;
        font-size: 26px;
        vertical-align: middle;
        pointer-events: none;
    }
`
