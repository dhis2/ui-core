import React from 'react'
import propTypes from 'prop-types'
import { ArrowDown, ArrowUp } from '../icons/Arrow.js'
import { colors, spacers } from '../theme.js'
import { Button } from '../Button.js'

const SelectInput = ({
    placeholder,
    selected,
    open,
    clearable,
    onClear,
    label,
    tabIndex,
    children,
}) => {
    const Arrow = open ? ArrowUp : ArrowDown
    const showSelection = 'label' in selected
    const showLabel = label
    const showPlaceholder = !showLabel && !showSelection
    const showClear = clearable && showSelection

    return (
        <React.Fragment>
            <div className="container" tabIndex={tabIndex}>
                {showLabel && <span className="label">{label}</span>}
                {showPlaceholder && (
                    <span className="placeholder">{placeholder}</span>
                )}
                {showSelection && children}
                <span className="right">
                    {showClear && (
                        <Button small onClick={onClear} type="button">
                            Clear
                        </Button>
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
                    padding: 3px 0 3px 11px;
                    position: relative;
                    box-shadow: inset 0 0 0 1px rgba(102, 113, 123, 0.15),
                        inset 0 1px 2px 0 rgba(102, 113, 123, 0.1);
                }

                .container:focus,
                .container:active {
                    border-color: ${colors.teal400};
                    outline: 0;
                }

                .label {
                    color: ${colors.grey600};
                    padding-right: ${spacers.dp4};
                    font-size: 14px;
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
            `}</style>
        </React.Fragment>
    )
}

SelectInput.propTypes = {
    children: propTypes.node,
    clearable: propTypes.bool,
    label: propTypes.string,
    onClear: propTypes.func.isRequired,
    placeholder: propTypes.string.isRequired,
    selected: propTypes.object.isRequired,
    open: propTypes.bool.isRequired,
    tabIndex: propTypes.string.isRequired,
}

export { SelectInput }
