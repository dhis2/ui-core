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
    div.compact > :global(button),
    div > :global(button:first-child) {
        margin-left: 0;
    }
    div.compact > :global(button:not(:first-child):not(:last-child)) {
        border-radius: 0;
        border-right: 0;
    }
    div.compact > :global(button:first-child) {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-right: 0;
    }
    div.compact > :global(button:last-child) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
`
