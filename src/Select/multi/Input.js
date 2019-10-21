import React from 'react'
import propTypes from 'prop-types'
import { colors, spacers } from '../../theme.js'
import { Button } from '../../Button.js'
import { SelectionList } from './SelectionList.js'

const Input = ({ selected, onChange, clearable, placeholder, prefix }) => {
    const hasSelection = selected.length > 0
    const showPlaceholder = !prefix && !hasSelection
    const showClear = clearable && hasSelection
    const handleClick = e => {
        e.stopPropagation()
        onChange([])
    }

    return (
        <div className="input">
            {prefix && <div className="prefix">{prefix}</div>}
            {showPlaceholder && (
                <div className="placeholder">{placeholder}</div>
            )}
            {hasSelection && (
                <SelectionList selected={selected} onChange={onChange} />
            )}
            {showClear && (
                <div className="right">
                    <Button
                        className="right"
                        small
                        secondary
                        onClick={handleClick}
                        type="button"
                    >
                        Clear
                    </Button>
                </div>
            )}

            <style jsx>{`
                .input {
                    display: flex;
                    align-items: center;
                    color: ${colors.grey900};
                    font-size: 14px;
                    line-height: 16px;
                }

                .prefix {
                    color: ${colors.grey600};
                    padding-right: ${spacers.dp4};
                    font-size: 14px;
                    user-select: none;
                }

                .placeholder {
                    color: ${colors.grey500};
                    user-select: none;
                }

                .right {
                    margin-left: auto;
                }
            `}</style>
        </div>
    )
}

Input.propTypes = {
    selected: propTypes.array.isRequired,
    onChange: propTypes.func.isRequired,

    clearable: propTypes.bool,

    prefix: propTypes.string,
    placeholder: propTypes.string,
}

export { Input }
