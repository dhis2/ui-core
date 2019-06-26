import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const Tab = forwardRef(
    ({ icon, label, onClick, selected, disabled, stacked, children }, ref) => (
        <button
            className={`${cx('d2ui-align-icon', {
                selected,
                disabled,
                stacked,
            })}`}
            onClick={onClick}
            ref={ref}
        >
            {children ? children : <span>{label}</span>}
            <style jsx>{`
                button {
                    background-color: transparent;
                    height: 100%;
                    border: none;
                    outline: none;
                    color: rgba(0, 0, 0, 0.6);
                    transition: all 150ms ease-in-out;
                    cursor: pointer;
                    padding: 0.375rem 1.5rem;
                    text-transform: uppercase;
                    font-size: 0.875rem;
                    line-height: 2.25rem;
                    font-weight: 500;
                    letter-spacing: 0.08929em;
                    display: inline-flex;
                    justify-content: center;
                    align-items: center;
                    max-width: 20rem;
                }

                button.selected {
                    color: #000000;
                }

                button.disabled {
                    color: rgba(0, 0, 0, 0.3);
                    pointer-events: none;
                }

                button.stacked {
                    flex-direction: column;
                }

                button > :global(svg),
                button > :global(svg:first-child),
                button > :global(svg:last-child),
                button > :global(svg:only-child) {
                    margin: 0.6rem 0 0 0;
                }

                button:active {
                    /* Cheap ripple alternative to flash clicked tab */
                    background-color: #e0e0e0;
                }
            `}</style>
        </button>
    )
)

Tab.propTypes = {
    label: PropTypes.string,
    icon: PropTypes.string,
    onClick: PropTypes.func,
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

export default Tab
