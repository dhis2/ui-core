import React, { Component } from 'react'
import propTypes from '@dhis2/prop-types'
import { ArrowDown, ArrowUp } from './icons/Arrow.js'
import { colors } from './theme.js'
import { SelectMenu } from './Select/SelectMenu.js'

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
        this.handleOpen()
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

    // Render the label for a selection if there is one, otherwise return placeholder
    renderValue = () => {
        const { placeholder, value, children } = this.props
        const currentOption =
            value && children.find(child => child.props.value === value)

        if (currentOption) {
            return currentOption.props.label
        }

        return placeholder
    }

    render() {
        const { children, tabIndex, value } = this.props
        const Arrow = this.state.open ? ArrowUp : ArrowDown

        return (
            <div className="container" ref={this.containerRef}>
                <div
                    className="input"
                    tabIndex={tabIndex}
                    onFocus={this.handleFocus}
                >
                    <div>{this.renderValue()}</div>
                    <Arrow className="arrow" />
                </div>
                {this.state.open && (
                    <SelectMenu
                        onOptionClick={this.handleOptionClick}
                        currentValue={value}
                    >
                        {children}
                    </SelectMenu>
                )}

                <style jsx>{`
                    .container {
                        position: relative;
                    }

                    .input {
                        border: 1px solid ${colors.grey500};
                        display: flex;
                        align-items: center;
                        padding: 0 10px;
                        height: 42px;
                        border-radius: 3px;
                        font-size: 14px;
                        line-height: 16px;
                        box-shadow: inset 0 0 0 1px rgba(102, 113, 123, 0.15),
                            inset 0 1px 2px 0 rgba(102, 113, 123, 0.1);
                    }

                    .arrow {
                        margin-left: auto;
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
