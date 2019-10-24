import React from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'
import { multiSelectedPropType } from '../common-prop-types.js'
import { colors } from '../theme.js'
import { SelectionList } from './SelectionList.js'
import { InputPlaceholder } from '../Select/InputPlaceholder.js'
import { InputPrefix } from '../Select/InputPrefix.js'
import { InputClearButton } from '../Select/InputClearButton.js'

const Input = ({
    selected,
    onChange,
    clearable,
    clearText,
    placeholder,
    prefix,
    className,
    disabled,
}) => {
    const hasSelection = selected.length > 0
    const handleClear = e => {
        e.stopPropagation()
        onChange([])
    }

    return (
        <div className={cx('root', className)}>
            <InputPrefix prefix={prefix} />
            {!hasSelection && !prefix && (
                <InputPlaceholder placeholder={placeholder} />
            )}
            {hasSelection && (
                <div>
                    <SelectionList
                        selected={selected}
                        onChange={onChange}
                        disabled={disabled}
                    />
                </div>
            )}
            {hasSelection && clearable && !disabled && (
                <div className="root-right">
                    <InputClearButton
                        handleClear={handleClear}
                        clearText={clearText}
                    />
                </div>
            )}

            <style jsx>{`
                .root {
                    display: flex;
                    align-items: center;
                    color: ${colors.grey900};
                    font-size: 14px;
                    line-height: 16px;
                }

                .root-right {
                    margin-left: auto;
                }
            `}</style>
        </div>
    )
}

Input.propTypes = {
    className: propTypes.string,
    selected: multiSelectedPropType,
    onChange: propTypes.func,
    clearable: propTypes.bool,
    clearText: propTypes.string.isRequired,
    prefix: propTypes.string,
    placeholder: propTypes.string,
    disabled: propTypes.bool,
}

export { Input }
