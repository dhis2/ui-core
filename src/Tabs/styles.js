import css from 'styled-jsx/css'

// import { spacers } from '../theme.js'

export default css`
    div {
        box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
            0px 4px 5px 0px rgba(0, 0, 0, 0.14),
            0px 1px 10px 0px rgba(0, 0, 0, 0.12);
        width: 100%;
        display: flex;
        box-sizing: border-box;
        flex-shrink: 0;
        flex-direction: row;
        background-color: #eceff1;
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
