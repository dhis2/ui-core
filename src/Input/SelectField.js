import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField, { bem as textFieldBem } from './TextField';
import { PopoverMenu } from '../Menu';
import { bemClassNames, noop } from '../utils';
import './selectfield.css';

const bem = bemClassNames('d2ui-select');

class Select extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false,
        };
        this.anchorRef = null;
    }

    openDropdown = () => {
        this.setState({ dropdownOpen: true });
    };

    closeDropdown = () => {
        this.setState({ dropdownOpen: false });
    };

    setAnchorRef = node => {
        this.anchorRef = node;
    };

    getAnchorRef = () => {
        return this.anchorRef;
    };

    selectHandler = (event, value) => {
        this.closeDropdown();
        this.props.onChange(value);
    };

    renderCustomSelect(displayValue) {
        const className = `${bem.e('input')} ${textFieldBem.e('input')}`;
        return (
            <input
                className={className}
                value={displayValue}
                onClick={this.openDropdown}
                // input type "button" is focusable, which ensures the correct :focus styles are applied
                // input type "button" does not show a caret when focussed
                type="button"
                ref={this.setAnchorRef}
            />
        );
    }

    renderNativeSelect() {
        return <div>Not implemented yet</div>;
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
            <div className={bem.b()}>
                <TextField
                    inputComponent={inputComponent}
                    onChange={noop}
                    value={displayValue}
                    trailingIcon="keyboard_arrow_down"
                    {...textFieldProps}
                />
                <PopoverMenu
                    menuProps={{ options, selectHandler: this.selectHandler }}
                    getAnchorRef={this.getAnchorRef}
                    open={this.state.dropdownOpen}
                    closePopover={this.closeDropdown}
                    anchorAttachPoint={{ vertical: 'bottom', horizontal: 'right' }}
                    popoverAttachPoint={{ vertical: 'top', horizontal: 'right' }}
                />
            </div>
        );
    }
}

Select.propTypes = {
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

export default Select;
