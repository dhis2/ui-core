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
        this.props.onFocus(e)
    }

    handleBlur = e => {
        const hasRef = this.containerRef.current
        const isInsideClick =
            hasRef && this.containerRef.current.contains(e.target)

        if (!isInsideClick) {
            this.props.onBlur(e)
            this.handleClose()
        }
    }

    handleOptionClick = value => {
        this.props.onChange(value)
        this.handleClose()
    }

    render() {
        const { children, tabIndex, value, placeholder } = this.props
        const { open } = this.state.open

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
                    selected={value}
                    open={open}
                />
                {open && (
                    <SelectDropdown
                        onClick={this.handleOptionClick}
                        value={value}
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
    onFocus: () => {},
    onBlur: () => {},
    placeholder: '',
}

Select.propTypes = {
    onChange: propTypes.func.isRequired,
    value: propTypes.string.isRequired,
    children: propTypes.node.isRequired,
    tabIndex: propTypes.number,
    onFocus: propTypes.func,
    onBlur: propTypes.func,
    placeholder: propTypes.string,
}
