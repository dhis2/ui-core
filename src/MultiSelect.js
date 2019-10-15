import React, { Component } from 'react'
import propTypes from '@dhis2/prop-types'
import { SelectDropdown } from './MultiSelect/SelectDropdown.js'
import { SelectInput } from './MultiSelect/SelectInput.js'
import { OptionsToSelected } from './MultiSelect/OptionsToSelected.js'
import { Empty } from './Select/Empty.js'

// Keycodes for the keypress event handlers
const ESCAPE_KEY = 27
const SPACE_KEY = 32
const UP_KEY = 38
const DOWN_KEY = 40

export class MultiSelect extends Component {
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

    handleOptionRemove = ({ value, label }) => {
        const { selected, onChange } = this.props

        return onChange(
            selected.filter(option => {
                const matchesValue = option.value === value
                const matchesLabel = option.label === label

                return !(matchesValue && matchesLabel)
            })
        )
    }

    handleOptionClick = ({ value, label }) => {
        const { selected, onChange } = this.props

        const wasSelected = selected.find(option => {
            const matchesValue = option.value === value
            const matchesLabel = option.label === label
            return matchesValue && matchesLabel
        })

        if (wasSelected) {
            return this.handleOptionRemove({ value, label })
        }

        return onChange(selected.concat([{ value, label }]))
    }

    handleInputClick = e => {
        e.stopPropagation()

        this.state.open ? this.handleClose() : this.handleOpen()
    }

    handleClear = e => {
        e.stopPropagation()
        this.props.onChange([])
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

    render() {
        const {
            children,
            selected,
            placeholder,
            clearable,
            maxHeight,
            tabIndex,
            label,
            empty,
            filterable,
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
                    <OptionsToSelected
                        options={children}
                        selected={selected}
                        onOptionRemove={this.handleOptionRemove}
                    />
                </SelectInput>
                {open && (
                    <SelectDropdown
                        maxHeight={maxHeight}
                        options={children}
                        empty={empty}
                        selected={selected}
                        onOptionClick={this.handleOptionClick}
                        filterable={filterable}
                    />
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

MultiSelect.defaultProps = {
    tabIndex: '0',
    placeholder: '',
    empty: Empty,
}

MultiSelect.propTypes = {
    tabIndex: propTypes.string,
    filterable: propTypes.bool,
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
