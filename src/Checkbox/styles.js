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

    label input[type='checkbox'] {
        display: none;
    }

    .icon {
        pointer-events: none;
        user-select: none;
    }

    .label {
        margin: 0 0 0 8px;
        color: ${colors.grey900};
        cursor: pointer;
    }

    .disabled,
    .disabled .label {
        cursor: not-allowed;
        color: ${theme.disabled};
    }

    .required:after {
        padding-left: 4px;
        content: '*';
    }
`
