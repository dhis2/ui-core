/** @format */

import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import SubMenu from './SubMenu'
import Icon from '../Icon'

import s from './styles'

class MenuItem extends Component {
    onClick = event => {
        const handler = this.props.onClick || this.props.onSelect
        handler && handler(event, this.props.value, this.props)
        this.props.onClose && this.props.onClose()
    }

    render() {
        const { disabled, menuItems, label, icon } = this.props

        if (menuItems) {
            return <SubMenu label={label} icon={icon} list={menuItems} />
        }

        return (
            <li className={s('item', { disabled })} onClick={this.onClick}>
                {this.props.children || (
                    <Fragment>
                        {icon && <Icon name={icon} />}
                        <span>{label}</span>
                    </Fragment>
                )}
            </li>
        )
    }
}

MenuItem.propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    label: PropTypes.string,
    icon: PropTypes.string,
    // onClick is bound to a menuItem itself
    onClick: PropTypes.func,
    // selecthandler is passed down from parent, a generic handler for each item
    onSelect: PropTypes.func,
    onClose: PropTypes.func,
    menuItems: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.element, PropTypes.object])
    ),
    closePopover: PropTypes.func,
}

export { MenuItem }
export default MenuItem
