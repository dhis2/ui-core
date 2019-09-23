import React, { Component } from 'react'
import propTypes from '@dhis2/prop-types'
import { ArrowDown, ArrowUp } from './icons/Arrow.js'
import { colors } from './theme.js'
import { SelectMenu } from './SelectMenu.js'

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
        if (this.props.onFocus) {
            this.props.onFocus(e)
        }

        this.handleOpen()
    }

    handleOptionClick = value => {
        this.props.onChange(value)
        this.handleClose()
    }

    handleOutsideClick = e => {
        const hasRef = this.containerRef.current
        const isInsideClick = hasRef && this.containerRef.current.contains(e.target)

        if (!isInsideClick) {
            this.handleClose()
        }
    }

    render() {
        const { children, tabIndex, placeholder } = this.props
        const Arrow = this.state.open ? ArrowUp : ArrowDown

        return (
            <div className="container" ref={this.containerRef}>
                <div
                    className="input"
                    tabIndex={tabIndex}
                    onFocus={this.handleFocus}
                >
                    <div>{placeholder}</div>
                    <Arrow className="arrow" />
                </div>
                {this.state.open && (
                    <SelectMenu onOptionClick={this.handleOptionClick}>
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
