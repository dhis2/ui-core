import React from 'react';
import PropTypes from 'prop-types';
import Menu from './Menu';
import Popover from '../Popover';

const PopoverMenu = ({
    open,
    getAnchorRef,
    closePopover,
    anchorAttachPoint,
    popoverAttachPoint,
    ...props
}) => (
    <Popover
        open={open}
        closePopover={closePopover}
        getAnchorRef={getAnchorRef}
        anchorAttachPoint={anchorAttachPoint}
        popoverAttachPoint={popoverAttachPoint}
    >
        <Menu closePopover={closePopover} {...props} />
    </Popover>
);

PopoverMenu.propTypes = {
    open: PropTypes.bool.isRequired,
    options: PropTypes.array.isRequired,
    getAnchorRef: PropTypes.func.isRequired,
    itemSelectHandler: PropTypes.func,
    closePopover: PropTypes.func.isRequired,
    anchorAttachPoint: PropTypes.object,
    popoverAttachPoint: PropTypes.object,
};

PopoverMenu.defaultProps = {
    open: PropTypes.bool.isRequired,
    anchorAttachPoint: { vertical: 'bottom', horizontal: 'right' },
    popoverAttachPoint: { vertical: 'top', horizontal: 'right' },
};

export default PopoverMenu;
