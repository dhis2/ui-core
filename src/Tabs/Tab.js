import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { colors, theme } from '../theme.js'

const Tab = forwardRef(
    ({ icon, onClick, selected, disabled, fixed, children }, ref) => (
        <button
            className={`${cx({
                selected,
                disabled,
                fixed,
            })}`}
            onClick={disabled ? undefined : onClick}
            ref={ref}
        >
            {icon}
            <span>{children}</span>

            <style jsx>{`
                button {
                    flex-grow: ${fixed ? 1 : 0};
                }
            `}</style>

            <style jsx>{`
                button {
                    display: inline-flex;
                    justify-content: center;
                    align-items: center;
                    vertical-align: bottom;

                    height: 100%;
                    padding: 19px 16px 14px 16px;

                    background-color: transparent;
                    border: none;
                    outline: none;
                    border-bottom: 1px solid ${colors.grey400};

                    color: ${colors.grey600};
                    font-size: 14px;
                    line-height: 14px;

                    transition: all 150ms ease-in-out;
                    cursor: pointer;
                }

                button > span {
                    max-width: 320px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
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
                    color: ${theme.primary800};
                }

                button.selected > :global(svg) {
                    fill: ${theme.primary800};
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
)

Tab.propTypes = {
    icon: PropTypes.string,
    onClick: PropTypes.func,
    addTabRef: PropTypes.func,
    selected: PropTypes.bool,
    disabled: PropTypes.bool,
    children: PropTypes.node,
}

export { Tab }
