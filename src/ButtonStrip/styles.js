import css from 'styled-jsx/css'

export default css`
    div {
        display: flex;
    }
    div.align-end {
        justify-content: flex-end;
    }
    div > :global(button) {
        margin-left: 16px;
    }
    div.compact > :global(button),
    div > :global(button:first-child) {
        margin-left: 0;
    }
    div.compact > :global(button:not(:first-child):not(:last-child)) {
        border-radius: 0;
    }
    div.compact > :global(button:first-child) {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
    div.compact > :global(button:last-child) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
`
