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

    componentDidMount() {
        document.addEventListener('click', this.handleOutsideClick)
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleOutsideClick)
    }

    handleFocus = e => {
        const { onFocus } = this.props

        if (onFocus) {
            onFocus(e)
        }
    }

    handleToggle = e => {
        e.stopPropagation()

        this.setState(prevState => ({ open: !prevState.open }))
    }

    handleClose = () => {
        this.setState({ open: false })
    }

    handleOutsideClick = e => {
        const { onBlur } = this.props
        const isInsideClick = this.selectRef.current.contains(e.target)

        if (!isInsideClick) {
            if (onBlur) {
                onBlur(e)
            }

            this.handleClose()
        }
    }

    handleKeyPress = e => {
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
            selected,
            onChange,
            tabIndex,
            maxHeight,
            error,
            warning,
            valid,
        } = this.props

        // Create the input
        const inputProps = {
            selected,
            onChange,
            options: children,
        }
        const input = React.cloneElement(this.props.input, inputProps)

        // Create the menu
        const menuProps = {
            selected,
            onChange,
            options: children,
            handleClose: this.handleClose,
        }
        const menu = React.cloneElement(this.props.menu, menuProps)

        return (
            <div
                className="select"
                ref={this.selectRef}
                onFocus={this.handleFocus}
                onKeyDown={this.handleKeyPress}
            >
                <InputWrapper
                    onToggle={this.handleToggle}
                    open={open}
                    tabIndex={tabIndex}
                    error={error}
                    warning={warning}
                    valid={valid}
                >
                    {input}
                </InputWrapper>
                {open && (
                    <MenuWrapper maxHeight={maxHeight}>{menu}</MenuWrapper>
                )}

                <style jsx>{`
                    .select {
                        position: relative;
                    }
                `}</style>
            </div>
        )
    }
}

Select.propTypes = {
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
}
