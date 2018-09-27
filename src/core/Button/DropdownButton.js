/** @format */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import { DropdownMenu } from '../Menu'

class DropdownButton extends Component {
    anchorRef = null
    getAnchorRef = () => this.anchorRef

    render() {
        const { options, buttonProps, menuProps, children } = this.props

        const mergedMenuProps = {
            ...menuProps,
            options,
        }

        return (
            <div
                ref={c => (this.anchorRef = c)}
                className="d2ui-dropdown-button"
            >
                <Button {...buttonProps}>{children}</Button>
                <DropdownMenu
                    buttonKind={buttonProps.kind}
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

export { DropdownButton }
export default DropdownButton
