import React, { Component } from 'react'
import propTypes from 'prop-types'
import {
    statusPropType,
    singleSelectedPropType,
    multiSelectedPropType,
} from './common-prop-types.js'
import { InputWrapper } from './Select/InputWrapper.js'
import { MenuWrapper } from './Select/MenuWrapper.js'

// Keycodes for the keypress event handlers
const ESCAPE_KEY = 27
const SPACE_KEY = 32
const UP_KEY = 38
const DOWN_KEY = 40

export class Select extends Component {
    state = {
        open: false,
    }

    selectRef = React.createRef()
    inputRef = React.createRef()

    componentDidMount() {
        if (this.props.initialFocus) {
            this.inputRef.current.focus()
        }

        document.addEventListener('click', this.onOutsideClick)
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.onOutsideClick)
    }

    onFocus = e => {
        const { onFocus, disabled } = this.props

        if (disabled) {
            return
        }

        if (onFocus) {
            onFocus(e)
        }
    }

    onToggle = e => {
        if (this.props.disabled) {
            return
        }

        e.stopPropagation()

        this.setState(prevState => ({ open: !prevState.open }))
    }

    onClose = () => {
        this.setState({ open: false })
    }

    onOutsideClick = e => {
        const { onBlur, disabled } = this.props
        const isInsideClick = this.selectRef.current.contains(e.target)

        if (disabled) {
            return
        }

        if (!isInsideClick) {
            if (onBlur) {
                onBlur(e)
            }

            this.onClose()
        }
    }

    onKeyDown = e => {
        if (this.props.disabled) {
            return
        }

        e.stopPropagation()

        const { open } = this.state
        const { keyCode } = e
        const shouldOpen =
            !open &&
            (keyCode === SPACE_KEY ||
                keyCode === UP_KEY ||
                keyCode === DOWN_KEY)
        const shouldClose = open && keyCode === ESCAPE_KEY

        if (shouldClose) {
            return this.setState({ open: false })
        }

        if (shouldOpen) {
            return this.setState({ open: true })
        }
    }

    render() {
        const { open } = this.state
        const {
            children,
            className,
            selected,
            onChange,
            tabIndex,
            maxHeight,
            error,
            warning,
            valid,
            disabled,
            dense,
        } = this.props

        // Create the input
        const inputProps = {
            selected,
            onChange,
            options: children,
            disabled,
        }
        const input = React.cloneElement(this.props.input, inputProps)

        // Create the menu
        const menuProps = {
            selected,
            onChange,
            options: children,
            onClose: this.onClose,
        }
        const menu = React.cloneElement(this.props.menu, menuProps)

        return (
            <div
                className={className}
                ref={this.selectRef}
                onFocus={this.onFocus}
                onKeyDown={this.onKeyDown}
            >
                <InputWrapper
                    onToggle={this.onToggle}
                    inputRef={this.inputRef}
                    open={open}
                    tabIndex={tabIndex}
                    error={error}
                    warning={warning}
                    valid={valid}
                    disabled={disabled}
                    dense={dense}
                >
                    {input}
                </InputWrapper>
                {open && (
                    <MenuWrapper
                        maxHeight={maxHeight}
                        selectRef={this.selectRef}
                    >
                        {menu}
                    </MenuWrapper>
                )}

                <style jsx>{`
                    div {
                        position: relative;
                    }
                `}</style>
            </div>
        )
    }
}

Select.propTypes = {
    className: propTypes.string,
    initialFocus: propTypes.bool,
    onChange: propTypes.func.isRequired,
    selected: propTypes.oneOfType([
        singleSelectedPropType,
        multiSelectedPropType,
    ]).isRequired,
    onFocus: propTypes.func,
    onBlur: propTypes.func,
    children: propTypes.node,
    input: propTypes.element.isRequired,
    menu: propTypes.element.isRequired,
    tabIndex: propTypes.string,
    maxHeight: propTypes.string,
    valid: statusPropType,
    warning: statusPropType,
    error: statusPropType,
    disabled: propTypes.bool,
    dense: propTypes.bool,
}
