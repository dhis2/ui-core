import React from 'react'
import propTypes from 'prop-types'
import { singleSelectedPropType } from '../common-prop-types.js'
import { colors, spacers } from '../theme.js'
import { Button } from '../Button.js'
import { SelectionList } from './SelectionList.js'

const Input = ({
    selected,
    onChange,
    clearable,
    placeholder,
    prefix,
    options,
}) => {
    const hasSelection = 'label' in selected && 'value' in selected
    const showPlaceholder = !prefix && !hasSelection
    const showClear = clearable && hasSelection
    const handleClear = e => {
        e.stopPropagation()
        onChange({})
    }

    return (
        <div className="input">
            {prefix && <div className="prefix">{prefix}</div>}
            {showPlaceholder && (
                <div className="placeholder">{placeholder}</div>
            )}
            {hasSelection && (
                <SelectionList options={options} selected={selected} />
            )}
            {showClear && (
                <div className="right">
                    <Button
                        className="right"
                        small
                        secondary
                        onClick={handleClear}
                        type="button"
                    >
                        Clear
                    </Button>
                </div>
            )}

            <style jsx>{`
                .input {
                    display: flex;
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
    selected: singleSelectedPropType,
    onChange: propTypes.func,
    options: propTypes.node,
    clearable: propTypes.bool,
    prefix: propTypes.string,
    placeholder: propTypes.string,
}

export { Input }
