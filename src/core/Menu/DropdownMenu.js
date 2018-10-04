/** @format */

import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../Button'
import PopoverMenu from './PopoverMenu'
import Icon from '../Icon'

const anchorPosition = {
    vertical: 'bottom',
    horizontal: 'right',
}

const popoverPosition = {
    vertical: 'top',
    horizontal: 'right',
}

class DropdownMenu extends React.Component {
    state = {
        open: false,
    }

    onOpen = () => this.setState({ open: true })
    onClose = () => this.setState({ open: false })

    render() {
        return (
            <React.Fragment>
                <Button kind={this.props.kind} onClick={this.onOpen}>
                    <Icon name="keyboard_arrow_down" />
                </Button>
                <PopoverMenu
                    popoverPosition={popoverPosition}
                    anchorPosition={anchorPosition}
                    open={this.state.open}
                    list={this.props.list}
                    onClose={this.onClose}
                    onSelect={this.props.onSelect}
                    getAnchorRef={this.props.getAnchorRef}
                />
            </React.Fragment>
        )
    }
}

DropdownMenu.propTypes = {
    kind: PropTypes.oneOf(['primary', 'raised']).isRequired,
    list: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
    getAnchorRef: PropTypes.func.isRequired,
}

export { DropdownMenu }
export default DropdownMenu
