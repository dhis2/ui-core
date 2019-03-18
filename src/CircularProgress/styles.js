import css from 'styled-jsx/css'

import { theme } from '../theme.js'

export default css`
    .base {
        display: inline-block;
        margin: 16px;
        color: ${theme.primary600};
        animation: anim-rotate 1.4s linear infinite;
    }

    /* rtl:ignore */
    .base.small {
        width: 24px;
        height: 24px;
    }

    /* rtl:ignore */
    .base.medium {
        width: 50px;
        height: 50px;
    }

    /* rtl:ignore */
    .base.large {
        width: 80px;
        height: 80px;
    }

    /* rtl:ignore */
    .circle {
        stroke: currentColor;
        stroke-dasharray: 80px, 200px;
        stroke-dashoffset: 0;
        animation: anim-dash 1.4s ease-in-out infinite;
    }

    /* rtl:ignore */
    @keyframes anim-rotate {
        100% {
            transform: rotate(360deg);
        }
    }

    /* rtl:ignore */
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
