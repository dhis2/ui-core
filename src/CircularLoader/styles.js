import css from 'styled-jsx/css'

import { theme, spacers } from '../theme.js'

export default css`
    div {
        display: inline-block;
        margin: ${spacers.dp16};
        color: ${theme.primary600};
        animation: anim-rotate 1.4s linear infinite;

        width: 50px;
        height: 50px;
    }

    .small {
        width: 24px;
        height: 24px;
    }

    .large {
        width: 80px;
        height: 80px;
    }

    .circle {
        stroke: currentColor;
        stroke-dasharray: 80px, 200px;
        stroke-dashoffset: 0;
        animation: anim-dash 1.4s ease-in-out infinite;
    }

    @keyframes anim-rotate {
        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes anim-dash {
        0% {
            stroke-dasharray: 1px, 200px;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 100px, 200px;
            stroke-dashoffset: -15px;
        }
        100% {
            stroke-dasharray: 100px, 200px;
            stroke-dashoffset: -120px;
        }
    }
`
