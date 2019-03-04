import css from 'styled-jsx/css'
import { colors, theme } from '../colors.js'

export default css`
    input {
        display: none;
    }
    .label {
        display: inline-block;
        position: relative;
        padding: 0 0 0 44px;
        font-weight: 400;
        text-align: left;
        cursor: pointer;
        user-select: none;
    }
    .label:before,
    .label:after {
        position: absolute;
        top: 50%;
        margin: 0;
        transform: translate(0, -50%);
        outline: 0;
        content: '';
    }
    .label::before {
        left: 1px;
        width: 34px;
        height: 14px;
        border-radius: 8px;
        background-color: #bbbaba;
        opacity: 0.5;
    }
    .label::after {
        left: 0;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #efefef;
        box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.12),
            0 1px 1px 0 rgba(0, 0, 0, 0.24);
    }

    input:checked + .label::before {
        background-color: ${colors.teal400};
    }
    input:checked + .label::after {
        transform: translate(80%, -50%);
        background-color: ${colors.teal400};
    }

    .status-valid.label::before,
    input:checked + .status-valid.label::before {
        background-color: ${colors.blue600};
    }
    .status-valid.label::after,
    input:checked + .status-valid.label::after {
        background-color: ${colors.blue600};
    }

    .status-warning.label::before,
    input:checked + .status-warning.label::before {
        background-color: ${colors.yellow500};
    }
    .status-warning.label::after,
    input:checked + .status-warning.label::after {
        background-color: ${colors.yellow500};
    }

    .status-error.label::before,
    input:checked + .status-error.label::before {
        background-color: ${colors.red500};
    }
    .status-error.label::after,
    input:checked + .status-error.label::after {
        background-color: ${colors.red500};
    }

    .disabled,
    .disabled .label {
        cursor: not-allowed;
        color: ${colors.grey500};
    }
    input:disabled + .label::before {
        background-color: #dadada;
    }
    input:disabled + .label::after {
        background-color: #f5f5f5;
    }

    .required::after {
        padding-left: 4px;
        content: '*';
    }
`
