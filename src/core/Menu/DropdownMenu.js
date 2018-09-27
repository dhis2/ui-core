/** @format */

import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../Button'
import PopoverMenu from './PopoverMenu'
import Icon from '../Icon'

const anchorPosition = {
    vertical: 'bottom',
    horizontal: 'right',
}

const popoverPosition = {
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
                    animation="slide-down"
                    anchorPosition={anchorPosition}
                    popoverPosition={popoverPosition}
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
