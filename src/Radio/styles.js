import css from 'styled-jsx/css'

import { colors, theme } from '../theme.js'

export default css`
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
    }

    span {
        margin: 0 0 0 8px;
        cursor: pointer;
    }

    .disabled {
        cursor: not-allowed;
        color: ${theme.disabled};
    }

    .required:after {
        padding-left: 4px;
        content: '*';
    }
`
