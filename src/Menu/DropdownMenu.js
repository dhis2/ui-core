import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Button } from '../Button';
import { PRIMARY, RAISED } from '../Button/variants';
import PopoverMenu from './PopoverMenu';
import Icon from '../Icon';

class DropdownMenu extends Component {
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

    render() {
        const { buttonVariant, getAnchorRef, menuProps } = this.props;
        const { popoverOpen } = this.state;

        return (
            <React.Fragment>
                <Button variant={buttonVariant} onClick={this.openPopover}>
                    <Icon name="keyboard_arrow_down" />
                </Button>
                <PopoverMenu
                    menuProps={menuProps}
                    getAnchorRef={getAnchorRef}
                    open={popoverOpen}
                    closePopover={this.closePopover}
                    anchorAttachPoint={{ vertical: 'bottom', horizontal: 'right' }}
                    popoverAttachPoint={{ vertical: 'top', horizontal: 'right' }}
                />
            </React.Fragment>
        );
    }
}

DropdownMenu.propTypes = {
    buttonVariant: PropTypes.oneOf([PRIMARY, RAISED]).isRequired,
    getAnchorRef: PropTypes.func.isRequired,
    menuProps: PropTypes.object.isRequired,
};

export default DropdownMenu;
