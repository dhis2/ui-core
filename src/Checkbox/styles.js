import css from 'styled-jsx/css'

import { colors, theme } from '../theme.js'

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
        color: ${colors.grey900};
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
        color: ${theme.valid};
    }

    .warning,
    .warning-icon {
        color: ${theme.warning};
    }

    .error,
    .error-icon {
        color: ${theme.error};
    }

    .default-icon {
        color: ${colors.secondary300};
    }

    .disabled {
        color: ${colors.grey300};
    }
`
