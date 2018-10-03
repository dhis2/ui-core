/** @format */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import { DropdownMenu } from '../Menu'
import s from './styles'

class DropdownButton extends Component {
    anchorRef = null
    getAnchorRef = () => this.anchorRef

    render() {
        const { options, buttonProps, menuProps } = this.props

        const mergedMenuProps = {
            ...menuProps,
            options,
        }

        return (
            <div ref={c => (this.anchorRef = c)} className={s('dropdown')}>
                <Button {...buttonProps}>{this.props.children}</Button>
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
