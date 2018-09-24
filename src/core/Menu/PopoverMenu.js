/** @format */

import React from 'react'
import PropTypes from 'prop-types'
import Menu from './Menu'
import Popover from '../Popover/index'

const PopoverMenu = ({
    anchorAttachPoint,
    closePopover,
    getAnchorRef,
    menuProps,
    open,
    popoverAttachPoint,
    appearAnimation,
}) => (
    <Popover
        anchorAttachPoint={anchorAttachPoint}
        closePopover={closePopover}
        getAnchorRef={getAnchorRef}
        open={open}
        popoverAttachPoint={popoverAttachPoint}
        appearAnimation={appearAnimation}
    >
        <Menu closePopover={closePopover} {...menuProps} />
    </Popover>
)

PopoverMenu.propTypes = {
    anchorAttachPoint: PropTypes.object,
    closePopover: PropTypes.func.isRequired,
    getAnchorRef: PropTypes.func.isRequired,
    menuProps: PropTypes.object,
    open: PropTypes.bool.isRequired,
    popoverAttachPoint: PropTypes.object,
    appearAnimation: PropTypes.string,
}

PopoverMenu.defaultProps = {
    open: PropTypes.bool.isRequired,
    anchorAttachPoint: { vertical: 'middle', horizontal: 'center' },
    popoverAttachPoint: { vertical: 'middle', horizontal: 'center' },
}

export default PopoverMenu
