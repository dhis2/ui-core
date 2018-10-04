/** @format */

import PropTypes from 'prop-types'
import React, { Component, Fragment, isValidElement } from 'react'
import { isDocRTL } from '../../utils'
import PopoverMenu from './PopoverMenu'
import MenuItem from './MenuItem'
import Icon from '../Icon'

const anchorPosition = { vertical: 'top', horizontal: 'right' }
const popoverPosition = { vertical: 'top', horizontal: 'left' }

class SubMenu extends Component {
    state = {
        open: false,
    }

    onOpen = () => this.setState({ open: true })
    onClose = () => this.setState({ open: false })

    getAnchorRef = () => this.anchorRef
    setAnchorRef = node => (this.anchorRef = node)

    render() {
        const { children, label, icon, menuItems } = this.props
        const arrowIconName = isDocRTL()
            ? 'keyboard_arrow_left'
            : 'keyboard_arrow_right'
        // There MUST be a better way of doing this!
        const menuProps = isValidElement(menuItems[0])
            ? { children: menuItems }
            : { options: menuItems }

        return (
            <Fragment>
                <MenuItem ref={this.setAnchorRef} onClick={this.onOpen}>
                    {children
                        ? children
                        : [icon && <Icon key="icon" name={icon} />, label]}
                    <Icon name={arrowIconName} />
                </MenuItem>
                <PopoverMenu
                    list={menuItems}
                    onSelect={() => null}
                    onClose={this.onClose}
                    getAnchorRef={this.getAnchorRef}
                    open={this.state.open}
                    menuProps={menuProps}
                    anchorPosition={anchorPosition}
                    popoverPosition={popoverPosition}
                    animation="slide-x-y"
                />
            </Fragment>
        )
    }
}

SubMenu.propTypes = {
    children: PropTypes.node,
    label: PropTypes.string,
    icon: PropTypes.string,
    menuItems: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.element, PropTypes.object])
    ).isRequired,
    selectHandler: PropTypes.func,
}

export { SubMenu }
export default SubMenu
