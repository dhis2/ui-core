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

    /* These styles should be extracted to components */
    div :global(.scroll-button) {
        flex: 0 0 3rem;
        color: inherit;
        border-radius: 8px;
        background-color: transparent;
        transition: all 150ms ease-in-out;
        border: none;
        outline: none;
        cursor: pointer;
        opacity: 1;
        transition: opacity 150ms ease-in-out;

        height: 4px;
    }

    div :global(.scroll-button:active) {
        /* Cheap ripple alternative to flash clicked tab */
        background-color: #e0e0e0;
    }

    div :global(.scroll-button.hidden) {
        pointer-events: none;
        opacity: 0;
    }

    div :global(.scroll-box-clipper) {
        overflow-y: hidden;
    }

    div :global(.test-horizontal-scrollbar-height) {
        position: absolute;
        top: -9999px;
        width: 100px;
        height: 100px;
        overflow-x: scroll;
    }

    div :global(.scroll-box) {
        flex-grow: 1;
        overflow-x: scroll;
        -webkit-overflow-scrolling: touch;
        display: -ms-flexbox;
        display: flex;
    }

    :global(.test-horizontal-scrollbar-height::-webkit-scrollbar),
    div :global(.scroll-box::-webkit-scrollbar) {
        display: none;
    }

    div :global(.scroll-area) {
        position: relative;
        display: flex;
        flex: 1 0 auto;
        transform: none;
        will-change: transform;
    }

    div :global(.tab-container) {
        position: relative;
        overflow-y: hidden;
    }

    div :global(.tab-container.contained) {
        display: flex;
        flex-grow: 1;
        overflow-x: hidden;
    }

    div :global(.tab-container.contained) :global(.d2ui-tab) {
        line-height: 0.8rem;
    }

    div :global(.tab-container.cluster-left) {
        justify-content: flex-start;
    }

    div :global(.tab-container.cluster-centered) {
        justify-content: center;
    }

    div :global(.tab-container.cluster-right) {
        justify-content: flex-end;
    }

    /* FIREFOX HACK */
    @-moz-document url-prefix() {
        .div :global(.scroll-area) :global(.tab-container) {
            /* Forces all the tabs to be on one line */
            width: -moz-max-content;
        }
    }
`
