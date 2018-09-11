import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField, { bem as textFieldBem } from './TextField';
import { PopoverMenu } from '../Menu';
import { bemClassNames, noop } from '../utils';
import './selectfield.css';

const bem = bemClassNames('d2ui-select');
// React uses a "value" property on the <select/> which can't be null so we use this magig string instead
const EMPTY_NATIVE_OPTION_VALUE = '#^NONE^#';
const DEFAULT_EMPTY_OPTION_TEXT = '--------';

class SelectField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false,
        };
        this.inputRef = null;
        this.inputClassName = `${bem.e('input')} ${textFieldBem.e('input')}`;
        this.selectedEmptyOption = false;
    }

    openDropdown = () => {
        this.setState({ dropdownOpen: true });
    };

    closeDropdown = () => {
        this.setState({ dropdownOpen: false });
        this.inputRef.focus();
    };

    setInputRef = node => {
        this.inputRef = node;
    };

    getInputRef = () => {
        return this.inputRef;
    };

    selectHandler = (event, value) => {
        this.closeDropdown();
        this.changeHandler(value);
    };

    nativeSelectHandler = event => {
        const elValue = event.target.value;
        const value = elValue === EMPTY_NATIVE_OPTION_VALUE ? null : elValue;
        this.changeHandler(value);
    };

    changeHandler(value) {
        const { includeEmpty, onChange } = this.props;
        this.selectedEmptyOption = includeEmpty & (value === null) ? true : false;
        onChange(value);
    }

    getOptions() {
        const { includeEmpty, emptyOptionText, options, native } = this.props;

        if (!includeEmpty) {
            return options;
        }

        const label = emptyOptionText || DEFAULT_EMPTY_OPTION_TEXT;
        const emptyOption = native
            ? { value: EMPTY_NATIVE_OPTION_VALUE, label }
            : { value: null, label };

        return [emptyOption, ...options];
    }

    renderCustomSelect(displayValue) {
        return (
            <input
                className={this.inputClassName}
                value={displayValue}
                onClick={this.openDropdown}
                // input type "button" is focusable, which ensures the correct :focus styles are applied
                // input type "button" does not show a caret when focussed
                type="button"
                ref={this.setInputRef}
            />
        );
    }

    renderNativeSelect() {
        const options = this.getOptions();
        const value = this.props.value || EMPTY_NATIVE_OPTION_VALUE;
        return (
            <select
                ref={this.setInputRef}
                className={this.inputClassName}
                onChange={this.nativeSelectHandler}
                value={value}
            >
                {options.map(({ value, label }) => (
                    <option key={value} value={value}>
                        {label}
                    </option>
                ))}
            </select>
        );
    }

    getLabelOfValue() {
        const { options, value, emptyOptionText } = this.props;
        const selectedOption = options.find(option => option.value === value);
        // If some valid option is selected always display this
        if (selectedOption && selectedOption.label) {
            return selectedOption.label;
        }
        // If the user selected the "None" option, display it
        if (this.selectedEmptyOption) {
            return emptyOptionText || DEFAULT_EMPTY_OPTION_TEXT;
        }
        // Otherwise return an empty value so the floating label text shows
        return '';
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
        } = this.props;
        const displayValue = this.getLabelOfValue();
        const inputComponent = native
            ? this.renderNativeSelect()
            : this.renderCustomSelect(displayValue);
        const textFieldProps = {
            variant,
            label,
            leadingIcon,
            helpText,
            dense,
            valid,
            error,
            warning,
        };
        return (
            <div className={bem.b({ native })}>
                <TextField
                    inputComponent={inputComponent}
                    onChange={noop}
                    value={displayValue}
                    trailingIcon="keyboard_arrow_down"
                    {...textFieldProps}
                />
                {!native && (
                    <PopoverMenu
                        menuProps={{
                            options: this.getOptions(),
                            selectHandler: this.selectHandler,
                        }}
                        getAnchorRef={this.getInputRef}
                        open={this.state.dropdownOpen}
                        closePopover={this.closeDropdown}
                        anchorAttachPoint={{ vertical: 'top', horizontal: 'center' }}
                        popoverAttachPoint={{ vertical: 'top', horizontal: 'center' }}
                    />
                )}
            </div>
        );
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
    valid: PropTypes.bool,
    error: PropTypes.bool,
    warning: PropTypes.bool,
    native: PropTypes.bool,
    includeEmpty: PropTypes.bool,
    emptyOptionText: PropTypes.string,
};

export default SelectField;
