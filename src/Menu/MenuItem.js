/** @format */

import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { wrapTextNodesInSpans, bemClassNames } from '../utils'
import SubMenu from './SubMenu'
import Icon from '../Icon'

const bem = bemClassNames('d2ui-menu-item')

class MenuItem extends Component {
    selectHandler = event => {
        const { value, onClick, selectHandler, closePopover } = this.props
        const handler = onClick || selectHandler
        handler(event, value, this.props)
        closePopover && closePopover()
    }

    render() {
        const { children, disabled, menuItems, label, icon } = this.props

        if (menuItems) {
            return (
                <SubMenu
                    children={children}
                    label={label}
                    icon={icon}
                    menuItems={menuItems}
                />
            )
        }

        return (
            <li className={bem.b({ disabled })} onClick={this.selectHandler}>
                {children ? (
                    wrapTextNodesInSpans(children)
                ) : (
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
    selectHandler: PropTypes.func,
    menuItems: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.element, PropTypes.object])
    ),
    closePopover: PropTypes.func,
}

export default MenuItem
