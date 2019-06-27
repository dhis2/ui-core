import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { colors } from '../theme.js'

const noop = () => {}

const Tab = forwardRef(
    ({ icon, onClick, selected, disabled, stacked, children }, ref) => (
        <button
            className={`${cx('d2ui-align-icon', {
                selected,
                disabled,
                stacked,
            })}`}
            onClick={disabled ? noop : onClick}
            ref={ref}
        >
            {icon && icon}
            {children}
            <style jsx>{`
                button {
                    display: inline-flex;
                    justify-content: center;
                    align-items: center;
                    vertical-align: bottom;

                    height: 100%;
                    max-width: 320px;
                    padding: 19px 16px 14px 16px;

                    background-color: transparent;
                    border: none;
                    outline: none;
                    border-bottom: 1px solid ${colors.grey400};

                    color: ${colors.grey700};
                    font-size: 14px;
                    line-height: 14px;

                    transition: all 150ms ease-in-out;
                    cursor: pointer;
                }

                button > :global(svg) {
                    fill: ${colors.grey700};
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
                    color: ${colors.grey900};
                }

                button.selected > :global(svg) {
                    fill: ${colors.grey900};
                }

                button.disabled {
                    color: ${colors.grey500};
                    cursor: not-allowed;
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
    stacked: PropTypes.bool,
    children: PropTypes.node,
}

Tab.defaultProps = {
    active: false,
    disabled: false,
    stacked: false,
    onClick: () => {},
}

export { Tab }
