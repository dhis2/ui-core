import React from 'react'
import propTypes from '@dhis2/prop-types'
import { Select } from './Select.js'
import { Input } from './SingleSelect/Input.js'
import { Menu } from './SingleSelect/Menu.js'
import { FilteredMenu } from './SingleSelect/FilteredMenu.js'
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

SingleSelect.propTypes = {
    onChange: propTypes.func.isRequired,

    selected: propTypes.object,
    className: propTypes.string,
    tabIndex: propTypes.string,
    maxHeight: propTypes.string,
    placeholder: propTypes.string,
    prefix: propTypes.string,
    loadingText: propTypes.string.isRequired,
    noMatchText: propTypes.string.isRequired,

    children: propTypes.node,
    empty: propTypes.node,
    loading: propTypes.bool,
    error: propTypes.bool,
    warning: propTypes.bool,
    valid: propTypes.bool,
    clearable: propTypes.bool,
    filtered: propTypes.bool,

    onFocus: propTypes.func,
    onBlur: propTypes.func,
}

export { SingleSelect }
