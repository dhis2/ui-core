/** @format */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import { DropdownMenu } from '../Menu/index'

class DropdownButton extends Component {
    constructor(props) {
        super(props)
        this.anchorRef = null
    }

    getAnchorRef = () => this.anchorRef
    setAnchorRef = node => (this.anchorRef = node)

    render() {
        const { options, buttonProps, menuProps, children } = this.props

        const mergedMenuProps = {
            ...menuProps,
            options,
        }

        return (
            <div ref={this.setAnchorRef} className="d2ui-dropdown-button">
                <Button {...buttonProps}>{children}</Button>
                <DropdownMenu
                    buttonVariant={buttonProps.variant}
                    getAnchorRef={this.getAnchorRef}
                    menuProps={mergedMenuProps}
                />
            </div>
        )
    }
}

DropdownButton.propTypes = {
    children: PropTypes.node.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.object, PropTypes.element])
    ).isRequired,
    buttonProps: PropTypes.object.isRequired,
    menuProps: PropTypes.object,
}

export default DropdownButton
