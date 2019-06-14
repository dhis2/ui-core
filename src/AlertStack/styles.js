import css from 'styled-jsx/css'
import { layers } from '../theme.js'

export default css`
    div {
        position: fixed;
        top: auto;
        right: auto;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);

        z-index: ${layers.alert};

        display: flex;
        flex-direction: column-reverse;

        pointer-events: none;
    }
`
