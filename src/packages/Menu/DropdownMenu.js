import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Menu from './Menu';
import { Button } from '../Button';
import { PRIMARY, RAISED } from '../Button/variants';
import Popover from '../Popover';

class DropdownMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            popupOpen: false,
        };
    }

    openPopup = () => {
        this.setState({ popupOpen: true });
    };
    closePopover = () => {
        this.setState({ popupOpen: false });
    };

    render() {
        const {
            options,
            variant,
            itemSelectHandler,
            getAnchorRef,
            ...props
        } = this.props;
        const { popupOpen } = this.state;
        return (
            <React.Fragment>
                <Button
                    variant={variant}
                    icon="keyboard_arrow_down"
                    onClick={this.openPopup}
                />
                <Popover
                    open={popupOpen}
                    closePopover={this.closePopover}
                    getAnchorRef={getAnchorRef}
                >
                    <Menu
                        options={options}
                        itemSelectHandler={itemSelectHandler}
                        closePopover={this.closePopover}
                        {...props}
                    />
                </Popover>
            </React.Fragment>
        );
    }
}

DropdownMenu.propTypes = {
    variant: PropTypes.oneOf([PRIMARY, RAISED]).isRequired,
    options: PropTypes.array.isRequired,
    getAnchorRef: PropTypes.func.isRequired,
    itemSelectHandler: PropTypes.func,
};

export default DropdownMenu;
