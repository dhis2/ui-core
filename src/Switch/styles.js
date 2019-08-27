import css from 'styled-jsx/css'
import { theme, spacers } from '../theme.js'

export default css`
    label {
        display: flex;
        height: 22px;
        align-items: center;
    }

    input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    span {
        text-align: left;
        cursor: pointer;
        user-select: none;
    }

    .disabled {
        cursor: not-allowed;
        color: ${theme.disabled};
    }

    .required::after {
        padding-left: ${spacers.dp4};
        content: '*';
    }
`
