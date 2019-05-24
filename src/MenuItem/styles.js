import css from 'styled-jsx/css'
import { colors, theme } from '../theme'

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
        background-color: ${colors.grey200};
    }

    .label {
        color: ${colors.grey900};
        font-size: 15px;
        white-space: nowrap;

        user-select: none;
        padding-right: 12px;
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
        padding: 0 24px 0 12px;
    }

    .dense .label {
        font-size: 14px;
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
