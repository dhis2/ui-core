/** @format */

import React from 'react'
import PropTypes from 'prop-types'
import Menu from './Menu'
import Popover from '../Popover'

function PopoverMenu({
    open,
    list,
    animation,
    popoverPosition,
    anchorPosition,
    onSelect,
    onClose,
    getAnchorRef,
}) {
    return (
        <Popover
            open={open}
            onClose={onClose}
            animation={animation}
            getAnchorRef={getAnchorRef}
            anchorPosition={anchorPosition}
            popoverPosition={popoverPosition}
        >
            <Menu list={list} onSelect={onSelect} onClose={onClose} />
        </Popover>
    )
}

PopoverMenu.defaultProps = {
    list: [],
    animation: 'slide-down',
}

PopoverMenu.propTypes = {
    open: PropTypes.bool.isRequired,
    list: PropTypes.array.isRequired,
    animation: PropTypes.string,
    anchorPosition: PropTypes.object,
    popoverPosition: PropTypes.object,
    onClose: PropTypes.func.isRequired,
    onSelect: PropTypes.func,
    getAnchorRef: PropTypes.func.isRequired,
}

PopoverMenu.defaultProps = {
    open: PropTypes.bool.isRequired,
    anchorPosition: { vertical: 'middle', horizontal: 'center' },
    popoverPosition: { vertical: 'middle', horizontal: 'center' },
}

export { PopoverMenu }
export default PopoverMenu
