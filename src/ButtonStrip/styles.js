import css from 'styled-jsx/css'

import { spacers } from '../theme.js'

export default css`
    div {
        display: flex;
    }
    div.middle {
        justify-content: center;
    }
    div.end {
        justify-content: flex-end;
    }
    div > :global(button) {
        margin-left: ${spacers.dp16};
    }
`
