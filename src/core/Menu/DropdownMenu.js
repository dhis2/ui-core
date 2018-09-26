/** @format */

import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../Button'
import PopoverMenu from './PopoverMenu'
import Icon from '../Icon'

const anchorAttachPoint = {
    vertical: 'bottom',
    horizontal: 'right',
}

const popoverAttachPoint = {
    vertical: 'top',
    horizontal: 'right',
}

class DropdownMenu extends React.Component {
    state = {
        open: false,
    }

    openMenu = () => this.setState({ open: true })
    closeMenu = () => this.setState({ open: false })

    render() {
        return (
            <React.Fragment>
                <Button kind={this.props.buttonKind} onClick={this.openMenu}>
                    <Icon name="keyboard_arrow_down" />
                </Button>
                <PopoverMenu
                    menuProps={this.props.menuProps}
                    getAnchorRef={this.props.getAnchorRef}
                    open={this.state.open}
                    closePopover={this.closeMenu}
                    appearAnimation="slide-down"
                    anchorAttachPoint={anchorAttachPoint}
                    popoverAttachPoint={popoverAttachPoint}
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
