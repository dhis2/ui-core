import React from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'
import { statusPropType } from '../common-prop-types.js'
import { ArrowDown, ArrowUp } from '../icons/Arrow.js'
import { colors, theme } from '../theme.js'

const InputWrapper = ({
    open,
    onToggle,
    children,
    tabIndex,
    error,
    warning,
    valid,
    disabled,
    className,
    inputRef,
}) => {
    const classNames = cx(className, 'root', {
        error,
        warning,
        valid,
        disabled,
    })

    return (
        <React.Fragment>
            <div
                className={classNames}
                onClick={onToggle}
                tabIndex={tabIndex}
                ref={inputRef}
            >
                <div className="root-children">{children}</div>
                <div className="root-right">
                    {open ? <ArrowUp /> : <ArrowDown />}
                </div>
            </div>

            <style jsx>{`
                .root {
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

                .root:focus,
                .root:active {
                    border-color: ${colors.teal400};
                    outline: 0;
                }

                .root.valid {
                    border-color: ${theme.valid};
                }

                .root.warning {
                    border-color: ${theme.warning};
                }

                .root.error {
                    border-color: ${theme.error};
                }

                .root.disabled {
                    background-color: ${colors.grey100};
                    border-color: ${colors.grey500};
                    color: ${theme.disabled};
                    cursor: not-allowed;
                }

                .root-children {
                    flex-grow: 1;
                }

                .root-right {
                    margin-left: auto;
                }
            `}</style>
        </React.Fragment>
    )
}

InputWrapper.propTypes = {
    children: propTypes.element,
    className: propTypes.string,

    open: propTypes.bool.isRequired,
    onToggle: propTypes.func.isRequired,

    tabIndex: propTypes.string.isRequired,
    inputRef: propTypes.object.isRequired,
    valid: statusPropType,
    warning: statusPropType,
    error: statusPropType,
    disabled: propTypes.bool,
}

export { InputWrapper }
