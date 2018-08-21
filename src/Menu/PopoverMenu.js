import React from 'react';
import PropTypes from 'prop-types';
import Menu from './Menu';
import Popover from '../Popover';

const PopoverMenu = ({
    anchorAttachPoint,
    closePopover,
    getAnchorRef,
    menuProps,
    open,
    popoverAttachPoint,
}) => (
    <Popover
        anchorAttachPoint={anchorAttachPoint}
        closePopover={closePopover}
        getAnchorRef={getAnchorRef}
        open={open}
        popoverAttachPoint={popoverAttachPoint}
    >
        <Menu closePopover={closePopover} {...menuProps} />
    </Popover>
);

PopoverMenu.propTypes = {
    anchorAttachPoint: PropTypes.object,
    closePopover: PropTypes.func.isRequired,
    getAnchorRef: PropTypes.func.isRequired,
    menuProps: PropTypes.object,
    open: PropTypes.bool.isRequired,
    popoverAttachPoint: PropTypes.object,
};

PopoverMenu.defaultProps = {
    anchorAttachPoint: { vertical: 'middle', horizontal: 'center' },
    open: PropTypes.bool.isRequired,
    popoverAttachPoint: { vertical: 'middle', horizontal: 'center' },
};

export default PopoverMenu;
