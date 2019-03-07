import css from 'styled-jsx/css'

import { colors } from '../theme.js'

export default css`
    .base {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        cursor: pointer;
        pointer-events: all;
        user-select: none;
    }

    .base input[type='checkbox'] {
        display: none;
    }

    .icon {
        pointer-events: none;
        user-select: none;
    }

    .label {
        margin: 0 0 0 8px;
        color: ${colors.grey700};
        cursor: pointer;
    }

    .disabled,
    .disabled .label {
        cursor: not-allowed;
        color: ${colors.grey500};
    }

    .required:after {
        padding-left: 4px;
        content: '*';
    }

    .valid,
    .valid-icon {
        color: ${colors.blue600};
    }

    .warning,
    .warning-icon {
        color: ${colors.yellow500};
    }

    .error,
    .error-icon {
        color: ${colors.red500};
    }

    .default-icon {
        color: ${colors.secondary300};
    }

    .disabled {
        color: ${colors.grey300};
    }
`
