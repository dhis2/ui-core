import React, { Component } from 'react'
import propTypes from '@dhis2/prop-types'
import { SelectDropdown } from './Select/SelectDropdown.js'
import { SelectInput } from './Select/SelectInput.js'
import { DecorateOptions } from './Select/DecorateOptions.js'
import { OptionsToSelected } from './Select/OptionsToSelected.js'
import { Empty } from './Select/Empty.js'

// Keycodes for the keypress event handlers
const ESCAPE_KEY = 27
const SPACE_KEY = 32
const UP_KEY = 38
const DOWN_KEY = 40

export class Select extends Component {
    state = {
        open: false,
    }

    containerRef = React.createRef()

    componentDidMount() {
        document.addEventListener('click', this.handleOutsideClick)
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleOutsideClick)
    }

    handleOpen = () => {
        this.setState({ open: true })
    }

    handleClose = () => {
        this.setState({ open: false })
    }

    handleFocus = e => {
        const { onFocus } = this.props

        if (onFocus) {
            onFocus(e)
        }
    }

    handleOutsideClick = e => {
        const { onBlur } = this.props
        const hasRef = this.containerRef.current
        const isInsideClick =
            hasRef && this.containerRef.current.contains(e.target)

        if (!isInsideClick) {
            if (onBlur) {
                onBlur(e)
            }

            this.handleClose()
        }
    }

    handleOptionClick = selected => {
        this.props.onChange(selected)
        this.handleClose()
    }

    handleInputClick = e => {
        e.stopPropagation()

        this.state.open ? this.handleClose() : this.handleOpen()
    }

    handleClear = e => {
        e.stopPropagation()
        this.props.onChange({})
    }

    handleKeyPress = e => {
        const { open } = this.state
        const { keyCode } = e
        const shouldOpen =
            keyCode === SPACE_KEY || keyCode === UP_KEY || keyCode === DOWN_KEY
        const shouldClose = keyCode === ESCAPE_KEY

        if (shouldClose && open) {
            this.handleClose()
        }

        if (shouldOpen && !open) {
            this.handleOpen()
        }
    }

    renderDropdownChildren = () => {
        const { empty: Empty, selected, children } = this.props
        const hasChildren = React.Children.count(children) > 0

        if (hasChildren) {
            return (
                <DecorateOptions
                    onClick={this.handleOptionClick}
                    selected={selected}
                >
                    {children}
                </DecorateOptions>
            )
        }

        return <Empty />
    }

    render() {
        const {
            children,
            selected,
            placeholder,
            clearable,
            maxHeight,
            tabIndex,
            label,
        } = this.props
        const { open } = this.state

        return (
            <div
                className="container"
                ref={this.containerRef}
                onFocus={this.handleFocus}
                onKeyDown={this.handleKeyPress}
            >
                <SelectInput
                    placeholder={placeholder}
                    selected={selected}
                    tabIndex={tabIndex}
                    options={children}
                    label={label}
                    clearable={clearable}
                    onClick={this.handleInputClick}
                    onClear={this.handleClear}
                    open={open}
                >
                    <OptionsToSelected options={children} selected={selected} />
                </SelectInput>
                {open && (
                    <SelectDropdown maxHeight={maxHeight}>
                        {this.renderDropdownChildren()}
                    </SelectDropdown>
                )}

                <style jsx>{`
                    .container {
                        position: relative;
                    }
                `}</style>
            </div>
        )
    }
}

Select.defaultProps = {
    tabIndex: '0',
    placeholder: '',
    empty: Empty,
}

Select.propTypes = {
    tabIndex: propTypes.string,
    onChange: propTypes.func.isRequired,
    clearable: propTypes.bool,
    label: propTypes.string,
    maxHeight: propTypes.string,
    selected: propTypes.object.isRequired,
    children: propTypes.node,
    onFocus: propTypes.func,
    onBlur: propTypes.func,
    placeholder: propTypes.string,
    empty: propTypes.elementType,
}
