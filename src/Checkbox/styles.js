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
    }

    .icon {
        pointer-events: none;
        user-select: none;
    }

    .disabled,
    .disabled .label {
        cursor: not-allowed;
        color: ${theme.disabled};
    }
`
