import css from 'styled-jsx/css'

export default css`
    .base {
        display: block;
        position: relative;
        width: 100%;
        margin: 0;

        padding: 8px 0;
        user-select: none;
    }

    .item {
        display: flex;
        position: relative;
        flex-direction: row;
        align-items: center;
        height: 48px;
        padding: 0 24px;
        cursor: pointer;
    }

    .item div.label:not(:first-child) {
        margin-left: 8px;
    }

    .item:hover,
    .item.active {
        background-color: #f7f7f7;
    }

    .base.dense .item {
        height: 32px;
    }

    .label {
        color: rgba(0, 0, 0, 0.87);
        font-size: 15px;
        white-space: nowrap;

        user-select: none;
    }
    .base.dense .label {
        font-size: 13px;
    }

    .icon {
        box-sizing: border-box;

        margin-right: 18px;
        color: #404040;
        font-size: 24px;
        user-select: none;
    }

    .base.dense .icon {
        font-size: 20px;
    }

    .base.dense .divider {
        margin: 4px 0;
    }

    .item.disabled {
        cursor: not-allowed;
        pointer-events: none;
        user-select: none;
    }

    .item.disabled .icon,
    .item.disabled .label {
        color: rgba(0, 0, 0, 0.3);
    }

    /* SUB-MENU */
    .sub-menu {
        display: none;
        position: absolute;
        top: 0;
        left: 100%;
        white-space: nowrap;
    }

    .item:hover .sub-menu {
        display: block;
    }
`
