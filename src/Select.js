import React, { Component } from 'react'
import propTypes from '@dhis2/prop-types'
import { SelectDropdown } from './Select/SelectDropdown.js'
import { SelectInput } from './Select/SelectInput.js'

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
            >
                <SelectInput
                    placeholder={placeholder}
                    selected={selected}
                    label={label}
                    clearable={clearable}
                    onClear={this.handleClear}
                    open={open}
                />
                {open && (
                    <SelectDropdown
                        onClick={this.handleOptionClick}
                        selected={selected}
                        maxHeight={maxHeight}
                    >
                        {children}
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
}

Select.propTypes = {
    onChange: propTypes.func.isRequired,
    clearable: propTypes.bool,
    label: propTypes.string,
    maxHeight: propTypes.string,
    selected: propTypes.object.isRequired,
    children: propTypes.node.isRequired,
    tabIndex: propTypes.number,
    onFocus: propTypes.func,
    onBlur: propTypes.func,
    placeholder: propTypes.string,
}
