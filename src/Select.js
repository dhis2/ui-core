import React, { Component } from 'react'
import propTypes from '@dhis2/prop-types'
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
    menuRef = React.createRef()

    componentDidMount() {
        if (this.props.initialFocus) {
            this.inputRef.current.focus()
        }

        document.addEventListener('click', this.onOutsideClick)
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.onOutsideClick)
    }

    handleFocusInput = () => {
        this.inputRef.current.focus()
    }

    handleOpen = () => {
        this.setState({ open: true })
    }

    handleClose = () => {
        this.setState({ open: false })
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

    /**
     * Note that since this event handler is attached to the document, events that have been
     * stopped from bubbling in the react hierarchy might still call this handler through
     * regular event bubbling.
     *
     * https://github.com/facebook/react/issues/12518#issuecomment-377954226
     */
    onOutsideClick = e => {
        const { onBlur, disabled } = this.props
        const { open } = this.state

        if (!open || disabled) {
            return
        }

        const isInsideSelect = this.selectRef.current.contains(e.target)
        const isInsideMenu =
            this.menuRef.current && this.menuRef.current.contains(e.target)
        const isInsideClick = isInsideSelect || (open && isInsideMenu)

        if (!isInsideClick) {
            if (onBlur) {
                onBlur(e)
            }

            this.handleClose()
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
            return this.handleClose()
        }

        if (shouldOpen) {
            return this.handleOpen()
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
            handleClose: this.handleClose,
            handleFocusInput: this.handleFocusInput,
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
                        menuRef={this.menuRef}
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
