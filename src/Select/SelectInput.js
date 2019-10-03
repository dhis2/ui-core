import React from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'
import { ArrowDown, ArrowUp } from '../icons/Arrow.js'
import { colors } from '../theme.js'

const SelectInput = ({ placeholder, selected, open, clearable, onClear }) => {
    const Arrow = open ? ArrowUp : ArrowDown
    const hasSelection = 'label' in selected

    return (
        <React.Fragment>
            <div className="container">
                <span className={cx('input', { placeholder: !hasSelection })}>
                    {hasSelection ? selected.label : placeholder}
                </span>
                <span className="right">
                    {clearable && hasSelection && (
                        <a className="clear" onClick={onClear}>
                            Clear
                        </a>
                    )}
                    <Arrow />
                </span>
            </div>

            <style jsx>{`
                .container {
                    align-items: center;
                    border-radius: 3px;
                    border: 1px solid ${colors.grey500};
                    box-sizing: border-box;
                    color: ${colors.grey900};
                    display: flex;
                    font-size: 14px;
                    min-height: 34px;
                    line-height: 16px;
                    padding: 13px 0 11px 11px;
                    position: relative;
                    box-shadow: inset 0 0 0 1px rgba(102, 113, 123, 0.15),
                        inset 0 1px 2px 0 rgba(102, 113, 123, 0.1);
                }

                .input {
                    flex-grow: 1;
                    flex-basis: 0;
                    overflow-wrap: break-word;
                    overflow: auto;
                }

                .placeholder {
                    color: ${colors.grey500};
                }

                .right {
                    margin-left: auto;
                }

                .clear {
                    color: ${colors.grey700};
                    text-decoration: underline;
                    font-size: 14px;
                    cursor: pointer;
                    padding-right: 8px;
                }
            `}</style>
        </React.Fragment>
    )
}

SelectInput.propTypes = {
    clearable: propTypes.bool.isRequired,
    onClear: propTypes.func.isRequired,
    placeholder: propTypes.string.isRequired,
    selected: propTypes.object.isRequired,
    open: propTypes.bool.isRequired,
}

export { SelectInput }
