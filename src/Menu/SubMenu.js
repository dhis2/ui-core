import PropTypes from 'prop-types';
import React, { Component, Fragment, isValidElement } from 'react';
import { isRtl } from '../utils';
import PopoverMenu from './PopoverMenu';
import MenuItem from './MenuItem';
import Icon from '../Icon';

const anchorAttachPoint = { vertical: 'top', horizontal: 'right' };
const popoverAttachPoint = { vertical: 'top', horizontal: 'left' };

class SubMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            popoverOpen: false,
        };
    }

    openPopover = () => {
        this.setState({ popoverOpen: true });
    };

    closePopover = () => {
        this.setState({ popoverOpen: false });
    };

    getAnchorRef = () => this.anchorRef;
    setAnchorRef = node => (this.anchorRef = node);

    render() {
        const { children, label, icon, menuItems } = this.props;
        const arrowIconName = isRtl() ? 'keyboard_arrow_left' : 'keyboard_arrow_right';
        // There MUST be a better way of doing this!
        const menuProps = isValidElement(menuItems[0])
            ? { children: menuItems }
            : { options: menuItems };

        return (
            <Fragment>
                <MenuItem ref={this.setAnchorRef} onClick={this.openPopover}>
                    {children
                        ? children
                        : [icon && <Icon key="icon" name={icon} />, label]}
                    <Icon name={arrowIconName} />
                </MenuItem>
                <PopoverMenu
                    anchorAttachPoint={anchorAttachPoint}
                    closePopover={this.closePopover}
                    getAnchorRef={this.getAnchorRef}
                    open={this.state.popoverOpen}
                    menuProps={menuProps}
                    popoverAttachPoint={popoverAttachPoint}
                />
            </Fragment>
        );
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
};

export default SubMenu;
