import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { colors, theme } from '../theme.js'

const Tab = ({ icon, onClick, selected, disabled, children }) => (
    <button
        className={`${cx('tab', {
            selected,
            disabled,
        })}`}
        onClick={disabled ? undefined : onClick}
    >
        {icon}
        <span>{children}</span>

        <style jsx>{`
            button {
                flex-grow: 0;
                position: relative;
                display: inline-flex;
                justify-content: center;
                align-items: center;
                vertical-align: bottom;

                height: 100%;
                padding: 19px 16px 14px 16px;

                background-color: transparent;
                outline: none;
                border: none;
                border-bottom: 1px solid ${colors.grey400};

                color: ${colors.grey600};
                font-size: 14px;
                line-height: 14px;

                transition: all 150ms ease-in-out;
                transition-property: color, background-color;
                cursor: pointer;
            }

            :global(.fixed) > button {
                flex-grow: 1;
            }

            button::after {
                content: ' ';
                display: block;
                position: absolute;
                bottom: -1px;
                left: 0;
                height: 4px;
                width: 100%;
                transition: background-color 150ms ease-in-out;
                background-color: transparent;
            }

            span {
                max-width: 320px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                transition: fill 150ms ease-in-out;
            }

            button > :global(svg) {
                fill: ${colors.grey600};
                width: 14px;
                height: 14px;
                margin: 0 4px 0 0;
            }

            button:hover {
                background-color: ${colors.grey100};
            }

            button:active {
                /* Briefly highlight clicked tab */
                background-color: ${colors.grey200};
            }

            button.selected {
                color: ${theme.primary700};
            }

            button.selected::after {
                background-color: ${theme.primary700};
            }

            button.selected > :global(svg) {
                fill: ${theme.primary700};
            }

            button.disabled {
                color: ${colors.grey500};
                cursor: not-allowed;
            }

            button.disabled:hover,
            button.selected:hover {
                background-color: transparent;
            }

            button.disabled > :global(svg) {
                fill: ${colors.grey500};
            }
        `}</style>
    </button>
)

Tab.propTypes = {
    icon: PropTypes.element,
    onClick: PropTypes.func,
    addTabRef: PropTypes.func,
    selected: PropTypes.bool,
    disabled: PropTypes.bool,
    children: PropTypes.node,
}

export { Tab }