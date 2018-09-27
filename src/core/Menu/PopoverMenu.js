/** @format */

import React from 'react'
import PropTypes from 'prop-types'
import Menu from './Menu'
import Popover from '../Popover'

function PopoverMenu({
    anchorPosition,
    closePopover,
    getAnchorRef,
    menuProps,
    open,
    popoverPosition,
    appearAnimation,
}) {
    return (
        <Popover
            anchorPosition={anchorPosition}
            closePopover={closePopover}
            getAnchorRef={getAnchorRef}
            open={open}
            popoverPosition={popoverPosition}
            animation={appearAnimation}
        >
            <Menu closePopover={closePopover} {...menuProps} />
        </Popover>
    )
}

PopoverMenu.propTypes = {
    anchorPosition: PropTypes.object,
    closePopover: PropTypes.func.isRequired,
    getAnchorRef: PropTypes.func.isRequired,
    menuProps: PropTypes.object,
    open: PropTypes.bool.isRequired,
    popoverPosition: PropTypes.object,
    animation: PropTypes.string,
}

PopoverMenu.defaultProps = {
    open: PropTypes.bool.isRequired,
    anchorPosition: { vertical: 'middle', horizontal: 'center' },
    popoverPosition: { vertical: 'middle', horizontal: 'center' },
}

export { PopoverMenu }
export default PopoverMenu
