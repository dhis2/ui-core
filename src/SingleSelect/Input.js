import React from 'react'
import propTypes from 'prop-types'
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
}) => {
    const hasSelection = 'label' in selected && 'value' in selected
    const handleClear = e => {
        e.stopPropagation()
        onChange({})
    }

    return (
        <div className={cx('root', className)}>
            <InputPrefix prefix={prefix} />
            {!hasSelection && !prefix && (
                <InputPlaceholder placeholder={placeholder} />
            )}
            {hasSelection && (
                <div>
                    <Selection selected={selected} options={options} />
                </div>
            )}
            {hasSelection && clearable && (
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
    selected: singleSelectedPropType,
    onChange: propTypes.func,
    options: propTypes.node,
    clearable: propTypes.bool,
    clearText: propTypes.string.isRequired,
    prefix: propTypes.string,
    placeholder: propTypes.string,
}

export { Input }
