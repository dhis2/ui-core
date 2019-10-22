import React, { Component } from 'react'
import propTypes from '@dhis2/prop-types'
import { InputWrapper } from './InputWrapper.js'
import { MenuWrapper } from './MenuWrapper.js'

// Keycodes for the keypress event handlers
const ESCAPE_KEY = 27
const SPACE_KEY = 32
const UP_KEY = 38
const DOWN_KEY = 40

export class SelectWrapper extends Component {
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

    handleOutsideClick = e => {
        const { onBlur } = this.props
        const hasRef = this.selectRef.current
        const isInsideClick =
            hasRef && this.selectRef.current.contains(e.target)

        if (!isInsideClick) {
            if (onBlur) {
                onBlur(e)
            }

            this.setState({ open: false })
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
        const { children, selected, onChange, tabIndex, maxHeight } = this.props

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

SelectWrapper.defaultProps = {
    tabIndex: '0',
    maxHeight: '280px',
}

SelectWrapper.propTypes = {
    selected: propTypes.any.isRequired,
    onChange: propTypes.func.isRequired,

    onFocus: propTypes.func,
    onBlur: propTypes.func,

    children: propTypes.node,

    input: propTypes.element.isRequired,
    menu: propTypes.element.isRequired,

    tabIndex: propTypes.string,
    maxHeight: propTypes.string,
}
