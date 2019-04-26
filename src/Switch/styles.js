import css from 'styled-jsx/css'
import { theme } from '../theme.js'

export default css`
    input {
        display: none;
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
        padding-left: 4px;
        content: '*';
    }
`
