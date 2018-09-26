/** @format */

import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Button } from '../Button'
import PopoverMenu from './PopoverMenu'
import Icon from '../Icon'

class DropdownMenu extends Component {
    state = {
        open: false,
    }

    openMenu = () => this.setState({ open: true })
    closeMenu = () => this.setState({ open: false })

    render() {
        const { buttonKind, getAnchorRef, menuProps } = this.props

        return (
            <React.Fragment>
                <Button kind={buttonKind} onClick={this.openMenu}>
                    <Icon name="keyboard_arrow_down" />
                </Button>
                <PopoverMenu
                    menuProps={menuProps}
                    getAnchorRef={getAnchorRef}
                    open={this.state.open}
                    closePopover={this.closeMenu}
                    anchorAttachPoint={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    popoverAttachPoint={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    appearAnimation="slide-down"
                />
            </React.Fragment>
        )
    }
}

DropdownMenu.propTypes = {
    buttonKind: PropTypes.oneOf(['primary', 'raised']).isRequired,
    getAnchorRef: PropTypes.func.isRequired,
    menuProps: PropTypes.object.isRequired,
}

export { DropdownMenu }
export default DropdownMenu
