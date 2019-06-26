import css from 'styled-jsx/css'

import { colors } from '../theme.js'

export default css`
    div {
        width: 100%;
        display: flex;
        box-sizing: border-box;
        flex-shrink: 0;
        flex-direction: row;
        background-color: ${colors.white};
        border-bottom: 1px solid ${colors.grey400};
    }
    div.relative {
        position: relative;
    }

    div.fixed {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9001;
    }

    div.absolute {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 9000;
    }

    div.sticky {
        position: sticky;
        top: 0;
        z-index: 9000;
    }
`
