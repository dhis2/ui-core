/** @format */

import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Field, { bem as fieldBem } from './Field'
import FieldWrap from './FieldWrap'
import { PopoverMenu } from '../Menu'
import { bemClassNames } from '../../utils'
import './selectfield.css'

const bem = bemClassNames('select')
const inputClassName = `${bem.e('input')} ${fieldBem.e('input')}`

// React uses a "value" property on the <select/> which can't be null so we use this magic string instead
const EMPTY_NATIVE_OPTION_VALUE = '#^NONE^#'

class SelectField extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dropdownOpen: false,
        }
        this.inputRef = null
        this.isEmptyOptionSelected = false
    }

    openDropdown = () => {
        this.setState({ dropdownOpen: true })
    }

    closeDropdown = () => {
        this.setState({ dropdownOpen: false })
        this.inputRef.focus()
    }

    setInputRef = node => {
        this.inputRef = node
    }

    getInputRef = () => {
        return this.inputRef
    }

    selectHandler = (event, value) => {
        this.closeDropdown()
        this.changeHandler(value)
    }

    nativeSelectHandler = event => {
        const elValue = event.target.value
        const value = elValue === EMPTY_NATIVE_OPTION_VALUE ? null : elValue
        this.changeHandler(value)
    }

    changeHandler(value) {
        const { emptyOption, onChange } = this.props
        this.isEmptyOptionSelected =
            emptyOption && value === null ? true : false
        onChange(value)
    }

    getOptions() {
        const { emptyOption, options, native } = this.props

        if (!emptyOption) {
            return options
        }

        const emptyOptionObject = native
            ? { value: EMPTY_NATIVE_OPTION_VALUE, label: emptyOption }
            : { value: null, label: emptyOption }

        return [emptyOptionObject, ...options]
    }

    renderCustomSelect(displayValue) {
        return (
            <input
                className={inputClassName}
                value={displayValue}
                onClick={this.openDropdown}
                // input type "button" is focusable, which ensures the correct :focus styles are applied
                // input type "button" does not show a caret when focussed
                type="button"
                ref={this.setInputRef}
            />
        )
    }

    renderNativeSelect() {
        const options = this.getOptions()
        const value = this.props.value || EMPTY_NATIVE_OPTION_VALUE
        return (
            <select
                ref={this.setInputRef}
                className={inputClassName}
                onChange={this.nativeSelectHandler}
                value={value}
            >
                {options.map(({ value, label }) => (
                    <option key={value} value={value}>
                        {label}
                    </option>
                ))}
            </select>
        )
    }

    getLabelOfValue() {
        const { options, value, emptyOption } = this.props
        const selectedOption = options.find(option => option.value === value)
        // If some valid option is selected always display this
        if (selectedOption && selectedOption.label) {
            return selectedOption.label
        }
        // If the user selected the "None" option, display it
        if (this.isEmptyOptionSelected) {
            return emptyOption
        }
        // Otherwise return an empty value so the floating label text shows
        return ''
    }

    render() {
        const {
            label,
            variant,
            leadingIcon,
            helpText,
            dense,
            valid,
            error,
            warning,
            native,
            disabled,
            required,
            block,
        } = this.props
        const displayValue = this.getLabelOfValue()
        const inputComponent = native
            ? this.renderNativeSelect()
            : this.renderCustomSelect(displayValue)

        return (
            <Fragment>
                <FieldWrap
                    {...{
                        valid,
                        warning,
                        disabled,
                        error,
                        dense,
                        block,
                        helpText,
                        className: bem.b({ native }),
                    }}
                >
                    <Field
                        {...{
                            variant,
                            dense,
                            label,
                            value: displayValue,
                            leadingIcon,
                            trailingIcon: 'keyboard_arrow_down',
                            error,
                            valid,
                            warning,
                            disabled,
                            inputComponent,
                            block,
                            required,
                        }}
                    />
                </FieldWrap>
                {!native && (
                    <PopoverMenu
                        menuProps={{
                            options: this.getOptions(),
                            selectHandler: this.selectHandler,
                        }}
                        getAnchorRef={this.getInputRef}
                        open={this.state.dropdownOpen}
                        closePopover={this.closeDropdown}
                        anchorAttachPoint={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        popoverAttachPoint={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        appearAnimation="slide-down"
                    />
                )}
            </Fragment>
        )
    }
}

SelectField.propTypes = {
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    variant: PropTypes.string,
    leadingIcon: PropTypes.string,
    helpText: PropTypes.string,
    dense: PropTypes.bool,
    disabled: PropTypes.bool,
    block: PropTypes.bool,
    valid: PropTypes.bool,
    error: PropTypes.bool,
    warning: PropTypes.bool,
    native: PropTypes.bool,
    required: PropTypes.bool,
    emptyOption: PropTypes.string,
}

export { SelectField }
export default SelectField
