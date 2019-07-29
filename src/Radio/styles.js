import css from 'styled-jsx/css'

import { colors, theme, spacers } from '../theme.js'

export default css`
    div {
        position: relative;
    }

    .focus:before {
        content: '';
        position: absolute;
        border: 2px solid ${colors.blue600};
        border-radius: 50%;
        width: calc(100% + 2px);
        height: calc(100% + 2px);
        top: -1px;
        left: -1px;
        box-sizing: border-box;
    }

    label {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        cursor: pointer;
        pointer-events: all;
        user-select: none;
        color: ${colors.grey900};
    }

    input {
        display: block;
        opacity: 0;
        width: 0;
        height: 0;
    }

    .icon {
        pointer-events: none;
        user-select: none;
        margin: 0 6px 0 0;
    }

    span {
        display: block;
        margin: 0 0 0 2px;
        cursor: pointer;
    }

    .disabled {
        cursor: not-allowed;
        color: ${theme.disabled};
    }

    .required:after {
        padding-left: ${spacers.dp4};
        content: '*';
    }
`
