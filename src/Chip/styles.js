import css from 'styled-jsx/css'

import { colors, theme } from '../theme.js'

export default css`
    div {
        display: inline-flex;
        align-items: center;
        height: 32px;
        margin: 4px;
        border-radius: 16px;
        background-color: ${colors.grey200};
        font-size: 14px;
        line-height: 16px;
        cursor: pointer;
        user-select: none;
        color: ${colors.grey900};
    }

    div:hover {
        background-color: ${colors.grey300};
    }

    .selected,
    .selected.static:hover {
        background-color: ${theme.secondary600};
        font-weight: 500;
    }

    .selected:hover {
        background-color: #00695c;
    }

    .selected,
    .selected .icon,
    .selected .remove-icon {
        color: ${colors.white};
    }

    .static {
        pointer-events: none;
    }

    .static:hover {
        background-color: ${colors.grey200};
    }

    .disabled {
        cursor: not-allowed;
        opacity: 0.3;
    }

    .disabled .remove-icon {
        pointer-events: none;
    }

    .dragging {
        box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
            0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    }

    .icon {
        margin-left: 5px;
        color: ${colors.grey700};
        font-size: 20px;
    }

    span {
        margin: 0 12px;
        color: inherit;
        white-space: nowrap;
    }

    span.overflow {
        max-width: 150px;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`
