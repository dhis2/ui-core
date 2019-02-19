import css from 'styled-jsx/css'

export default css`
    .base {
        display: inline-flex;
        position: relative;
        white-space: nowrap;
    }

    .base button:first-child {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    .base button:nth-child(2) {
        padding: 0 9px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    .menu {
        z-index: 1000;
        position: absolute;
        top: 36px;
        left: 0;
    }

    .menu-icon {
        color: inherit;
        font-size: 16px;
        vertical-align: middle;
        pointer-events: none;
    }
`
