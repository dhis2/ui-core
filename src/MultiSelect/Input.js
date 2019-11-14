import React from 'react'
import propTypes from '@dhis2/prop-types'
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
    options,
    className,
    disabled,
    inputMaxHeight,
}) => {
    const hasSelection = selected.length > 0
    const onClear = e => {
        const data = { selected: [] }

        e.stopPropagation()
        onChange(data, e)
    }

    return (
        <div className={cx('root', className)}>
            <InputPrefix prefix={prefix} />
            {!hasSelection && !prefix && (
                <InputPlaceholder placeholder={placeholder} />
            )}
            {hasSelection && (
                <div className="root-input">
                    {/* the wrapper div above is necessary to enforce wrapping on overflow */}
                    <SelectionList
                        selected={selected}
                        onChange={onChange}
                        options={options}
                        disabled={disabled}
                    />
                </div>
            )}
            {hasSelection && clearable && !disabled && (
                <div className="root-right">
                    <InputClearButton onClear={onClear} clearText={clearText} />
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

                .root-input {
                    overflow-y: auto;
                    flex: 1;
                }

                .root-right {
                    margin-left: auto;
                    margin-right: 10px;
                }
            `}</style>

            <style jsx>{`
                .root-input {
                    max-height: ${inputMaxHeight};
                }
            `}</style>
        </div>
    )
}

Input.defaultProps = {
    inputMaxHeight: '100px',
}

Input.propTypes = {
    className: propTypes.string,
    selected: multiSelectedPropType,
    onChange: propTypes.func,
    options: propTypes.node,
    clearable: propTypes.bool,
    clearText: propTypes.requiredIf(props => props.clearable, propTypes.string),
    prefix: propTypes.string,
    placeholder: propTypes.string,
    disabled: propTypes.bool,
    inputMaxHeight: propTypes.string,
}

export { Input }
