import css from 'styled-jsx/css'

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

    .base input[type='radio'] {
        display: none;
    }

    .icon {
        pointer-events: none;
        user-select: none;
    }

    .label {
        margin: 0 0 0 8px;
        cursor: pointer;
    }

    .disabled,
    .disabled .label {
        cursor: not-allowed;
    }

    .required:after {
        padding-left: 4px;
        content: '*';
    }

    .default {
        color: var(--grey700);
    }

    .valid,
    .valid-icon {
        color: var(--blue600);
    }

    .warning,
    .warning-icon {
        color: var(--yellow500);
    }

    .error,
    .error-icon {
        color: var(--red500);
    }

    .default-icon {
        color: var(--secondary300);
    }

    .disabled {
        color: var(--grey300);
    }
`
