import css from 'styled-jsx/css'

import { colors, theme, fonts } from '../theme.js'

export default css`
    button {
        display: inline-flex;
        position: relative;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        font-weight: 400;
        letter-spacing: 0.5px;
        text-decoration: none;
        cursor: pointer;
        transition: all 0.15s cubic-bezier(0.4, 0, 0.6, 1);
        user-select: none;

        /*medium*/
        height: 36px;
        padding: 0 16px;
        font-size: 14px;
        line-height: 16px;

        /*basic*/
        border: 1px solid #c4c9cc;
        background-color: #f9fafb;
    }

    button:disabled {
        cursor: not-allowed;
    }

    button:focus {
        /* Prevent default browser behavior whcih adds an outline */
        outline: none;
    }

    button:hover {
        border: 1px solid #c4c9cc;
        background-color: #f3f4f5;
    }

    button:active,
    button:active:focus {
        border: 1px solid #c5c9cc;
        background-color: #f3f4f5;
        box-shadow: 0 0 0 1px rgb(0, 0, 0, 0.1) inset;
    }

    button:focus {
        border: 1px solid ${theme.primary600};
        background-color: #f9fafb;
        box-shadow: 0 0 0 1px ${theme.primary600};
    }

    button:disabled {
        border: 1px solid #c4c9cc;
        background-color: #f9fafb;
        box-shadow: none;
        color: ${colors.grey500};
        fill: ${colors.grey500};
    }

    button.icon {
        padding-left: 10px;
    }

    .small {
        height: 28px;
        padding: 0 16px;
        font-size: 14px;
        line-height: 16px;
    }

    .large {
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

    .primary {
        border: 1px solid ${theme.primary800};
        background: linear-gradient(180deg, #1565c0 0%, #0650a3 100%);
        background-color: #2b61b3;
        color: ${colors.white};
        fill: ${colors.white};
        font-weight: 500;
    }

    .primary:hover {
        border: 1px solid ${theme.primary800};
        background: linear-gradient(180deg, #054fa3 0%, #034793 100%);
        background-color: #21539f;
    }

    .primary:active,
    .primary:active:focus {
        border: 1px solid ${theme.primary800};
        background: linear-gradient(180deg, #054fa3 0%, #034793 100%);
        background-color: #1c4a90;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.18) inset;
    }

    .primary:focus {
        border: 1px solid ${colors.yellow300};
        background: linear-gradient(180deg, #1565c0 0%, #0650a3 100%);
        background-color: #285dac;
        box-shadow: 0 0 0 1px ${colors.yellow300} inset;
    }

    .primary:disabled {
        border: 1px solid ${theme.primary800};
        background: linear-gradient(180deg, #1565c0 0%, #0650a3 100%);
        background-color: #b6c8e2;
        box-shadow: none;
        color: ${colors.white};
        fill: ${colors.white};
        opacity: 0.33;
    }

    .secondary {
        border: 1px solid ${colors.grey400};
        background-color: transparent;
    }

    .secondary:hover {
        border: 1px solid ${colors.grey400};
        background-color: rgba(158, 158, 158, 0.07);
    }

    .secondary:active,
    .secondary:active:focus {
        border: 1px solid ${colors.grey400};
        background-color: rgba(158, 158, 158, 0.18);
        box-shadow: none;
    }

    .secondary:focus {
        border: 1px solid ${theme.primary600};
        background-color: transparent;
        box-shadow: 0 0 0 1px ${theme.primary600};
    }

    .secondary:disabled {
        border: 1px solid ${colors.grey400};
        background-color: transparent;
        box-shadow: none;
        color: ${colors.grey500};
        fill: ${colors.grey500};
    }

    .destructive {
        border: 1px solid #a10b0b;
        background: linear-gradient(180deg, #d32f2f 0%, #b71c1c 100%);
        background-color: #b9242b;
        color: ${colors.white};
        fill: ${colors.white};
    }

    .destructive:hover {
        border: 1px solid #a10b0b;
        background: linear-gradient(180deg, #b81c1c 0%, #b80c0b 100%);
        background-color: #ac0f1a;
    }

    .destructive:active,
    .destructive:active:focus {
        border: 1px solid #a10b0b;
        background: linear-gradient(180deg, #b81c1c 0%, #b80c0b 100%);
        background-color: #ac101b;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.18) inset;
    }

    .destructive:focus {
        border: 1px solid #5e0303;
        background: linear-gradient(180deg, #d32f2f 0%, #b71c1c 100%);
        background-color: #b72229;
        box-shadow: 0 0 0 1px #5e0303 inset;
    }

    .destructive:disabled {
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
        button {
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
