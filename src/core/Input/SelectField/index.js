/** @format */

import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import LabelField, { bem as labelFieldBem } from '../shared/LabelField'

import { PopoverMenu } from '../../Menu'
import { bemClassNames } from '../../../utils'

import './styles.css'

const bem = bemClassNames('select')
const inputClassName = `${bem.e('input')} ${labelFieldBem.e('input')}`

// React uses a "value" property on the <select/> which can't be null so we use this magic string instead
const EMPTY_NATIVE_OPTION_VALUE = '#^NONE^#'

class SelectField extends Component {
    state = {
        open: false,
    }

    inputRef = null
    isEmptyOptionSelected = false

    onOpen = () => this.setState({ open: true })

    onClose = () => {
        this.setState({ open: false })
        this.inputRef.focus()
    }

    getInputRef = () => {
        return this.inputRef
    }

    selectHandler = (event, value) => {
        this.onClose()
        this.changeHandler(value)
    }

    nativeSelectHandler = event => {
        const elValue = event.target.value
        const value = elValue === EMPTY_NATIVE_OPTION_VALUE ? null : elValue
        this.changeHandler(value)
    }

    changeHandler(value) {
        this.isEmptyOptionSelected =
            this.props.emptyOption && value === null ? true : false
        this.props.onChange(value)
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
                onClick={this.onOpen}
                // input type "button" is focusable, which ensures the correct :focus styles are applied
                // input type "button" does not show a caret when focussed
                type="button"
                ref={c => (this.inputRef = c)}
            />
        )
    }

    renderNativeSelect() {
        const options = this.getOptions()
        const value = this.props.value || EMPTY_NATIVE_OPTION_VALUE
        const nativeClass = inputClassName + ' ' + bem.b({ native: true })
        return (
            <select
                ref={c => (this.inputRef = c)}
                className={nativeClass}
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
        const option = this.props.options.find(
            o => o.value === this.props.value
        )
        if (option && option.label) {
            return option.label
        }

        if (this.isEmptyOptionSelected) {
            return this.props.emptyOption
        }

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
                <LabelField
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
                        block,
                        required,
                        helpText,
                    }}
                >
                    {inputComponent}
                </LabelField>
                {!native && (
                    <PopoverMenu
                        menuProps={{
                            options: this.getOptions(),
                            selectHandler: this.selectHandler,
                        }}
                        getAnchorRef={this.getInputRef}
                        open={this.state.open}
                        closePopover={this.onClose}
                        anchorPosition={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        popoverPosition={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        animation="slide-down"
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
