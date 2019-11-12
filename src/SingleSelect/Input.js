import React from 'react'
import propTypes from '@dhis2/prop-types'
import cx from 'classnames'
import { singleSelectedPropType } from '../common-prop-types.js'
import { colors } from '../theme.js'
import { Selection } from './Selection.js'
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
}) => {
    const hasSelection = 'label' in selected && 'value' in selected
    const onClear = e => {
        const data = { selected: {} }

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
                <div>
                    {/* the wrapper div above is necessary to enforce wrapping on overflow */}
                    <Selection selected={selected} options={options} />
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

                .root-right {
                    margin-left: auto;
                    margin-right: 10px;
                }
            `}</style>
        </div>
    )
}

Input.propTypes = {
    className: propTypes.string,
    selected: singleSelectedPropType,
    onChange: propTypes.func,
    options: propTypes.node,
    clearable: propTypes.bool,
    clearText: propTypes.requiredIf(props => props.clearable, propTypes.string),
    prefix: propTypes.string,
    placeholder: propTypes.string,
    disabled: propTypes.bool,
}

export { Input }
