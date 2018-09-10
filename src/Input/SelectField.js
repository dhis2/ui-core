import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField, { bem as textFieldBem } from './TextField';
import { PopoverMenu } from '../Menu';
import { bemClassNames, noop } from '../utils';
import './selectfield.css';

const bem = bemClassNames('d2ui-select');

class SelectField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false,
        };
        this.inputRef = null;
        this.inputClassName = `${bem.e('input')} ${textFieldBem.e('input')}`;
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
        this.props.onChange(value);
    };

    nativeSelectHandler = event => {
        this.props.onChange(event.target.value);
    };

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
        const options = [{ value: null, label: '' }, ...this.props.options];
        return (
            <select
                ref={this.setInputRef}
                className={this.inputClassName}
                onChange={this.nativeSelectHandler}
                value={this.props.value}
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
        const { options, value } = this.props;
        const selectedOption = options.find(option => option.value === value);
        return selectedOption ? selectedOption.label : '';
    }

    render() {
        const {
            options,
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
                        menuProps={{ options, selectHandler: this.selectHandler }}
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
};

export default SelectField;
