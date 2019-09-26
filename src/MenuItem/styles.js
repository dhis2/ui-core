import css from 'styled-jsx/css'
import { colors, spacers } from '../theme.js'

export default css`
    li {
        position: relative;
        height: 48px;
        padding: 0;
        cursor: pointer;
        list-style: none;
    }

    li div.label:not(:first-child) {
        margin-left: ${spacers.dp8};
    }

    li:hover {
        background-color: ${colors.grey200};
    }

    li:active,
    li.active {
        background-color: ${colors.grey400};
    }

    .dense {
        height: 32px;
        padding: 0 ${spacers.dp24} 0 ${spacers.dp12};
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

    .link {
        display: block;
        height: 100%;
        padding: 0 ${spacers.dp24};
        text-decoration: none;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .label {
        color: ${colors.grey900};
        font-size: 15px;

        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        user-select: none;
        padding-right: ${spacers.dp12};
    }

    .icon {
        box-sizing: border-box;

        margin-right: ${spacers.dp16};
        color: #404040;
        font-size: 24px;
        pointer-events: none;
        user-select: none;
    }
`
