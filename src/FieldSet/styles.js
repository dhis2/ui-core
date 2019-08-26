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
        margin: 0 0 ${spacers.dp12};
    }

    legend.required::after {
        padding-left: ${spacers.dp4};
        content: '*';
    }

    legend.valid {
        color: ${theme.valid};
    }

    legend.warning {
        color: ${theme.warning};
    }

    legend.error {
        color: ${theme.error};
    }
    div {
        display: flex;
        flex-direction: row;
    }

    div.stacked {
        flex-direction: column;
    }

    div > :global(.fieldset-input) {
        margin-right: ${spacers.dp12};
    }

    div.stacked > :global(.fieldset-input) {
        margin-bottom: ${spacers.dp8};
    }
`
