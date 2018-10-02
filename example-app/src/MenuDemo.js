/** @format */

import React, { Component } from 'react'

import Paper from 'ui/core/Paper'
import Icon from 'ui/core/Icon'

import { Menu, MenuItem } from 'ui/core/Menu'

const subSubMenuItems = [
    <MenuItem key="jajaja" value={1}>
        Sub item 1
    </MenuItem>,
    <MenuItem key="neee" value={2}>
        Sub item 2
    </MenuItem>,
    <MenuItem key="misschien" value={3}>
        Sub item 3
    </MenuItem>,
]

const subMenuItems = [
    <MenuItem key="jajaja" value={1}>
        Sub item 1
    </MenuItem>,
    <MenuItem key="neee" value={2} menuItems={subSubMenuItems}>
        Sub item 2
    </MenuItem>,
    <MenuItem key="misschien" value={3}>
        Sub item 3
    </MenuItem>,
]

export default class MenuDemo extends Component {
    render() {
        return (
            <Paper>
                <h3>Menu components</h3>
                <hr />
                <Menu>
                    <MenuItem menuItems={subMenuItems} value={1}>
                        <Icon name="face" />
                        Static item 1
                    </MenuItem>
                    <MenuItem value={2}>
                        <Icon name="face" />
                        Static item 2
                    </MenuItem>
                    <MenuItem value={3}>
                        Static item 3<Icon name="face" />
                    </MenuItem>
                    <MenuItem
                        value={4}
                        onClick={() => console.log('Select handler on item')}
                    >
                        <Icon name="face" />
                        Static item 4<Icon name="face" />
                    </MenuItem>
                </Menu>
            </Paper>
        )
    }
}
