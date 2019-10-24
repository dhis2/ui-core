import React from 'react'
import propTypes from '@dhis2/prop-types'
import { singleSelectedPropType, statusPropType } from './common-prop-types.js'
import { Select } from './Select.js'
import { Input } from './SingleSelect/Input.js'
import { Menu } from './SingleSelect/Menu.js'
import { FilterableMenu } from './SingleSelect/FilterableMenu.js'
import { Loading } from './Select/Loading.js'

const SingleSelect = ({
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
    disabled,
    children,
    clearable,
    clearText,
    filterable,
    filterPlaceholder,
    placeholder,
    prefix,
    empty,
    loadingText,
    noMatchText,
    initialFocus,
    dense,
}) => (
    <Select
        className={className}
        selected={selected}
        input={
            <Input
                clearable={clearable}
                clearText={clearText}
                placeholder={placeholder}
                prefix={prefix}
            />
        }
        menu={
            filterable ? (
                <FilterableMenu
                    empty={empty}
                    noMatchText={noMatchText}
                    placeholder={filterPlaceholder}
                />
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
        disabled={disabled}
        initialFocus={initialFocus}
        dense={dense}
    >
        {loading ? <Loading message={loadingText} /> : children}
    </Select>
)

SingleSelect.propTypes = {
    onChange: propTypes.func.isRequired,
    selected: singleSelectedPropType.isRequired,
    className: propTypes.string,
    tabIndex: propTypes.string,
    maxHeight: propTypes.string,
    placeholder: propTypes.string,
    prefix: propTypes.string,
    loadingText: propTypes.string,
    noMatchText: propTypes.string.isRequired,
    clearText: propTypes.string.isRequired,
    children: propTypes.node,
    empty: propTypes.node.isRequired,
    loading: propTypes.bool,
    valid: statusPropType,
    warning: statusPropType,
    error: statusPropType,
    disabled: propTypes.bool,
    clearable: propTypes.bool,
    filterable: propTypes.bool,
    filterPlaceholder: propTypes.string,
    onFocus: propTypes.func,
    onBlur: propTypes.func,
    initialFocus: propTypes.bool,
    dense: propTypes.bool,
}

export { SingleSelect }
