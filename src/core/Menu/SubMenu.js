import PropTypes from 'prop-types'
import React, { Component, Fragment } from 'react'
import { isDocRTL } from '../../utils'
import PopoverMenu from './PopoverMenu'
import MenuItem from './MenuItem'
import Icon from '../Icon'

const anchorPosition = { vertical: 'top', horizontal: 'right' }
const popoverPosition = { vertical: 'top', horizontal: 'left' }

class SubMenu extends Component {
    state = {
        open: false,
    }

    onOpen = () => this.setState({ open: true })
    onClose = () => this.setState({ open: false })

    getAnchorRef = () => this.anchorRef
    setAnchorRef = node => (this.anchorRef = node)

    render() {
        const { children, icon } = this.props

        return (
            <Fragment>
                <MenuItem ref={this.setAnchorRef} onClick={this.onOpen}>
                    {children
                        ? children
                        : [
                              icon && <Icon key="icon" name={icon} />,
                              this.props.label,
                          ]}
                    <Icon
                        name={
                            isDocRTL()
                                ? 'keyboard_arrow_left'
                                : 'keyboard_arrow_right'
                        }
                    />
                </MenuItem>
                <PopoverMenu
                    animation="slide-x-y"
                    open={this.state.open}
                    list={this.props.list}
                    anchorPosition={anchorPosition}
                    popoverPosition={popoverPosition}
                    onClose={this.onClose}
                    getAnchorRef={this.getAnchorRef}
                />
            </Fragment>
        )
    }
}

SubMenu.propTypes = {
    children: PropTypes.node,
    label: PropTypes.string,
    icon: PropTypes.string,
    list: PropTypes.array.isRequired,
}

export { SubMenu }
export default SubMenu
