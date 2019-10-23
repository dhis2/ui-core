import React from 'react'
import propTypes from 'prop-types'
import { ArrowDown, ArrowUp } from '../icons/Arrow.js'
import { colors } from '../theme.js'

const InputWrapper = ({ open, onToggle, children, tabIndex }) => {
    return (
        <React.Fragment>
            <div className="input" onClick={onToggle} tabIndex={tabIndex}>
                <div className="children">{children}</div>
                <div className="right">
                    {open ? <ArrowUp /> : <ArrowDown />}
                </div>
            </div>

            <style jsx>{`
                .input {
                    align-items: center;
                    border-radius: 3px;
                    border: 1px solid ${colors.grey500};
                    box-sizing: border-box;
                    display: flex;
                    min-height: 34px;
                    padding: 3px 0 3px 11px;
                    box-shadow: inset 0 0 0 1px rgba(102, 113, 123, 0.15),
                        inset 0 1px 2px 0 rgba(102, 113, 123, 0.1);
                }

                .input:focus,
                .input:active {
                    border-color: ${colors.teal400};
                    outline: 0;
                }

                .children {
                    flex-grow: 1;
                }

                .right {
                    margin-left: auto;
                }
            `}</style>
        </React.Fragment>
    )
}

InputWrapper.propTypes = {
    children: propTypes.node,

    open: propTypes.bool.isRequired,
    onToggle: propTypes.func.isRequired,

    tabIndex: propTypes.string.isRequired,
}

export { InputWrapper }
