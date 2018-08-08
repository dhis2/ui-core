import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Button } from '../Button';
import { PRIMARY, RAISED } from '../Button/variants';
import PopoverMenu from './PopoverMenu';

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
        const { variant, ...props } = this.props;
        const { popoverOpen } = this.state;

        return (
            <React.Fragment>
                <Button
                    variant={variant}
                    icon="keyboard_arrow_down"
                    onClick={this.openPopover}
                />
                <PopoverMenu
                    {...props}
                    open={popoverOpen}
                    closePopover={this.closePopover}
                />
            </React.Fragment>
        );
    }
}

DropdownMenu.propTypes = {
    variant: PropTypes.oneOf([PRIMARY, RAISED]).isRequired,
};

export default DropdownMenu;
