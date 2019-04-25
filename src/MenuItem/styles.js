import css from 'styled-jsx/css'

export default css`
    li {
        display: flex;
        position: relative;
        flex-direction: row;
        align-items: center;
        height: 48px;
        padding: 0 24px;
        cursor: pointer;
    }

    li div.label:not(:first-child) {
        margin-left: 8px;
    }

    li:hover,
    li.active {
        background-color: #f7f7f7;
    }

    .label {
        color: rgba(0, 0, 0, 0.87);
        font-size: 15px;
        white-space: nowrap;

        user-select: none;
    }

    .icon {
        box-sizing: border-box;

        margin-right: 18px;
        color: #404040;
        font-size: 24px;
        pointer-events: none;
        user-select: none;
    }

    .dense {
        height: 32px;
    }

    .dense .label {
        font-size: 13px;
    }

    .dense .icon {
        font-size: 20px;
    }

    .disabled {
        cursor: not-allowed;
        pointer-events: none;
        user-select: none;
    }

    .disabled .icon,
    .disabled .label {
        color: rgba(0, 0, 0, 0.3);
    }
`
