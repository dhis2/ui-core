import css from 'styled-jsx/css'

export default css`
    .reset {
        all: initial;
        box-sizing: border-box;
    }

    .base {
        display: block;
        position: relative;

        width: 100%;
        height: 4px;
        margin: 0;
        overflow: hidden;
        overflow-x: hidden;
        overflow-y: hidden;
        background-color: var(--primary050);
    }

    .progress {
        background-color: var(--primary600);
    }

    .progress.determinate {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        transition: width 0.3s linear;
    }

    /* rtl:ignore */
    .progress.indeterminate:before {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        background-color: inherit;
        animation: anim-indeterminate 2.1s
            cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
        content: '';
        will-change: left, right;
    }

    /* rtl:ignore */
    .progress.indeterminate:after {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        background-color: inherit;
        animation: anim-indeterminate-short 2.1s
            cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
        animation-delay: 1.15s;
        content: '';
        will-change: left, right;
    }

    /* rtl:ignore */
    @keyframes anim-indeterminate {
        0% {
            right: 100%;
            left: -35%;
        }

        60% {
            right: -90%;
            left: 100%;
        }

        100% {
            right: -90%;
            left: 100%;
        }
    }

    /* rtl:ignore */
    @keyframes anim-indeterminate-short {
        0% {
            right: 100%;
            left: -200%;
        }

        60% {
            right: -8%;
            left: 107%;
        }

        100% {
            right: -8%;
            left: 107%;
        }
    }
`
