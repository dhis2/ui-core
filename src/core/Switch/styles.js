import css from 'styled-jsx/css'

export default css`
    .input {
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

    .input:checked + .label::before {
        background-color: #009688;
    }
    .input:checked + .label::after {
        transform: translate(80%, -50%);
        background-color: #009688;
    }

    .status-valid.label::before,
    .input:checked + .status-valid.label::before {
        background-color: #3d9305;
    }
    .status-valid.label::after,
    .input:checked + .status-valid.label::after {
        background-color: #3d9305;
    }

    .status-warning.label::before,
    .input:checked + .status-warning.label::before {
        background-color: #e59635;
    }
    .status-warning.label::after,
    .input:checked + .status-warning.label::after {
        background-color: #e59635;
    }

    .status-error.label::before,
    .input:checked + .status-error.label::before {
        background-color: var(--red500);
    }
    .status-error.label::after,
    .input:checked + .status-error.label::after {
        background-color: var(--red500);
    }

    .disabled,
    .disabled .label {
        cursor: not-allowed;
    }
    .input:disabled + .label::before {
        background-color: #dadada;
    }
    .input:disabled + .label::after {
        background-color: #f5f5f5;
    }

    .required::after {
        padding-left: 4px;
        content: '*';
    }
`
