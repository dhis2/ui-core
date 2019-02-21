import css from 'styled-jsx/css'

export default css`
    .base {
        display: inline-flex;
        position: relative;
        color: inherit;
        white-space: nowrap;
    }

    .menu {
        z-index: 1000;
        position: absolute;
        top: 36px;
        left: 0;
    }

    .menu-label {
        margin: 0 10px 0 0;
        background: transparent;
        color: inherit;
        text-transform: capitalize;
    }

    .menu-icon {
        color: inherit;
        font-size: 16px;
        vertical-align: middle;
        pointer-events: none;
    }
`
