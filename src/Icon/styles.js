import css from 'styled-jsx/css'

export default css`
    i {
        word-wrap: normal;
        -webkit-font-feature-settings: 'liga';
        -webkit-font-smoothing: antialiased;
        display: inline-block;
        margin: 0;
        padding: 0;
        font-family: 'Material Icons';
        font-feature-settings: 'liga';
        font-size: 24px;
        font-style: normal;
        font-weight: normal;
        letter-spacing: normal;

        line-height: 1;
        direction: ltr;
        text-transform: none;
        white-space: nowrap;
        content: ' ';
    }

    .align-icon .material-icons {
        width: 24px;
        height: 0.9375rem;
        line-height: 0.9375rem;
        pointer-events: none;
    }
    .align-icon .material-icons:first-child {
        margin-right: 0.75rem;
        margin-left: 0;
    }

    .align-icon .material-icons:last-child {
        margin-right: 0;
        margin-left: 0.75rem;
    }

    .align-icon .material-icons:only-child {
        margin-right: 0;
        margin-left: 0;
    }
`
