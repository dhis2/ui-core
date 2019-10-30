import React from 'react'
import propTypes from '@dhis2/prop-types'
import { singleSelectedPropType, statusPropType } from './common-prop-types.js'
import { Select } from './Select.js'
import { Input } from './SingleSelect/Input.js'
import { Menu } from './SingleSelect/Menu.js'
import { FilterableMenu } from './SingleSelect/FilterableMenu.js'
import { Loading } from './Select/Loading.js'

/**
 * @module
 *
 * @param {SingleSelect.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { SingleSelect } from '@dhis2/ui-core'
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/molecules/select.md|Design system}
 */
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

SingleSelect.defaultProps = {
    selected: {},
}

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {function} onChange
 * @prop {Object} [selected]
 * @prop {string} [className]
 * @prop {string} [tabIndex]
 * @prop {Array|Object} [children]
 * @prop {boolean} [disabled]
 * @prop {boolean} [dense]
 * @prop {boolean} [valid] - `valid`, `warning`, `error`, `loading`, are mutually exclusive
 * @prop {boolean} [warning]
 * @prop {boolean} [error]
 * @prop {boolean} [loading]
 * @prop {function} [onFocus]
 * @prop {function} [onBlur]
 * @prop {boolean} [initialFocus]
 * @prop {string} clearText
 * @prop {boolean} [clearable]
 * @prop {Array|Object} empty
 * @prop {string} filterPlaceholder
 * @prop {boolean} [filterable]
 * @prop {string} [loadingText]
 * @prop {string} [maxHeight]
 * @prop {string} noMatchText
 * @prop {string} [placeholder]
 * @prop {string} [prefix]
 */
SingleSelect.propTypes = {
    onChange: propTypes.func.isRequired,
    selected: singleSelectedPropType,
    className: propTypes.string,
    tabIndex: propTypes.string,
    children: propTypes.node,
    disabled: propTypes.bool,
    dense: propTypes.bool,
    valid: statusPropType,
    warning: statusPropType,
    error: statusPropType,
    loading: propTypes.bool,
    onFocus: propTypes.func,
    onBlur: propTypes.func,
    initialFocus: propTypes.bool,
    clearText: propTypes.string.isRequired,
    clearable: propTypes.bool,
    empty: propTypes.node.isRequired,
    filterPlaceholder: propTypes.string,
    filterable: propTypes.bool,
    loadingText: propTypes.string,
    maxHeight: propTypes.string,
    noMatchText: propTypes.string.isRequired,
    placeholder: propTypes.string,
    prefix: propTypes.string,
}

export { SingleSelect }
