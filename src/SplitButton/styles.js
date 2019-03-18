import css from 'styled-jsx/css'
import { colors, theme } from '../theme.js'

export default css`
    div {
        display: inline-flex;
        position: relative;
        white-space: nowrap;
    }

    .menu {
        z-index: 1000;
        position: absolute;
        top: 36px;
        left: 0;
    }

    button:first-child {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    button:nth-child(2) {
        padding: 0 9px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
`
