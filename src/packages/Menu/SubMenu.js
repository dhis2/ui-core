import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { isRtl } from '../../utils';
import PopoverMenu from './PopoverMenu';
import MenuItem from './MenuItem';

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

    getSubMenuItemIconForDir() {
        return isRtl() ? 'keyboard_arrow_left' : 'keyboard_arrow_right';
    }

    render() {
        const { value, label, icon, menuItems } = this.props;
        const option = {
            value,
            label,
            icon,
            selectHandler: this.openPopover,
        };
        const anchorAttachPoint = { vertical: 'top', horizontal: 'right' };
        const popoverAttachPoint = { vertical: 'top', horizontal: 'left' };

        return (
            <Fragment>
                <MenuItem
                    option={option}
                    secundaryIcon={this.getSubMenuItemIconForDir()}
                    ref={this.setAnchorRef}
                />
                <PopoverMenu
                    getAnchorRef={this.getAnchorRef}
                    options={menuItems}
                    open={this.state.popoverOpen}
                    closePopover={this.closePopover}
                    anchorAttachPoint={anchorAttachPoint}
                    popoverAttachPoint={popoverAttachPoint}
                />
            </Fragment>
        );
    }
}

SubMenu.propTypes = {};

export default SubMenu;
