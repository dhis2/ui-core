import React from 'react'
import propTypes from '@dhis2/prop-types'
import { multiSelectedPropType, statusPropType } from './common-prop-types.js'
import { Select } from './Select.js'
import { Input } from './MultiSelect/Input.js'
import { Menu } from './MultiSelect/Menu.js'
import { FilteredMenu } from './MultiSelect/FilteredMenu.js'
import { Loading } from './Select/Loading.js'

const MultiSelect = ({
    className,
    selected,
    tabIndex,
    maxHeight,
    onChange,
    onFocus,
    onBlur,
    loading,
    error,
    warning,
    valid,
    children,
    clearable,
    filtered,
    placeholder,
    prefix,
    empty,
    loadingText,
    noMatchText,
}) => (
    <Select
        className={className}
        selected={selected}
        input={
            <Input
                clearable={clearable}
                placeholder={placeholder}
                prefix={prefix}
            />
        }
        menu={
            filtered ? (
                <FilteredMenu empty={empty} noMatchText={noMatchText} />
            ) : (
                <Menu empty={empty} />
            )
        }
        tabIndex={tabIndex}
        maxHeight={maxHeight}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        error={error}
        warning={warning}
        valid={valid}
    >
        {loading ? <Loading message={loadingText} /> : children}
    </Select>
)

MultiSelect.propTypes = {
    onChange: propTypes.func.isRequired,
    selected: multiSelectedPropType.isRequired,
    className: propTypes.string,
    tabIndex: propTypes.string,
    maxHeight: propTypes.string,
    placeholder: propTypes.string,
    prefix: propTypes.string,
    loadingText: propTypes.string,
    noMatchText: propTypes.string.isRequired,
    children: propTypes.node,
    empty: propTypes.node.isRequired,
    loading: propTypes.bool,
    valid: statusPropType,
    warning: statusPropType,
    error: statusPropType,
    clearable: propTypes.bool,
    filtered: propTypes.bool,
    onFocus: propTypes.func,
    onBlur: propTypes.func,
}

export { MultiSelect }
