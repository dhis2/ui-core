import css from 'styled-jsx/css'

import { spacers, theme } from '../theme.js'

export default css`
    fieldset {
        border: none;
        margin: 0;
        padding: 0;
    }

    legend {
        font-size: 16px;
        color: ${theme.default};
        margin: ${spacers.dp12} 0 ${spacers.dp12};
    }
`
