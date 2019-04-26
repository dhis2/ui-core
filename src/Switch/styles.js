import css from 'styled-jsx/css'
import { colors, theme } from '../theme.js'

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
        color: ${colors.grey500};
    }

    .required::after {
        padding-left: 4px;
        content: '*';
    }
`
