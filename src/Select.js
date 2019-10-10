import React, { Component } from 'react'
import propTypes from '@dhis2/prop-types'
import { SelectDropdown } from './Select/SelectDropdown.js'
import { SelectInput } from './Select/SelectInput.js'
import { DecorateOptions } from './Select/DecorateOptions.js'
import { OptionsToSelected } from './Select/OptionsToSelected.js'
import { Empty } from './Select/Empty.js'

const ESCAPE_KEY = 27

export class Select extends Component {
    state = {
        open: false,
    }

    containerRef = React.createRef()

    componentDidMount() {
        document.addEventListener('click', this.handleBlur)
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleBlur)
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

    handleBlur = e => {
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

    handleClear = e => {
        e.stopPropagation()
        this.props.onChange({})
    }

    handleKeyPress = e => {
        if (e.keyCode === ESCAPE_KEY && this.state.open) {
            this.handleClose()
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
            tabIndex,
            selected,
            placeholder,
            clearable,
            maxHeight,
            label,
        } = this.props
        const { open } = this.state

        return (
            <div
                className="container"
                ref={this.containerRef}
                tabIndex={tabIndex}
                onFocus={this.handleFocus}
                onClick={this.handleOpen}
                onKeyDown={this.handleKeyPress}
            >
                <SelectInput
                    placeholder={placeholder}
                    selected={selected}
                    options={children}
                    label={label}
                    clearable={clearable}
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
                        outline: 0;
                    }
                `}</style>
            </div>
        )
    }
}

Select.defaultProps = {
    tabIndex: 0,
    placeholder: '',
    empty: Empty,
}

Select.propTypes = {
    onChange: propTypes.func.isRequired,
    clearable: propTypes.bool,
    label: propTypes.string,
    maxHeight: propTypes.string,
    selected: propTypes.object.isRequired,
    children: propTypes.node,
    tabIndex: propTypes.number,
    onFocus: propTypes.func,
    onBlur: propTypes.func,
    placeholder: propTypes.string,
    empty: propTypes.elementType,
}
