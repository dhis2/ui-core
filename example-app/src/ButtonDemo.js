/** @format */

import React, { Component } from 'react'

import Paper from 'ui/core/Paper'

import {
    FlatButton,
    CircleButton,
    RaisedButton,
    PrimaryButton,
    OutlinedButton,
    DropdownButton,
} from 'ui/core/Button'

import Icon from 'ui/core/Icon'
import { MenuItem } from 'ui/core/Menu'

const menuItemSelectTest = (event, value, option) => {
    console.log('Menu item click', event.target, value, option)
}

const menuProps = {
    selectHandler: menuItemSelectTest,
}

const dropdownOptions = [
    {
        value: 1,
        label: 'One ',
        icon: 'alarm',
    },
    { value: 2, label: 'two', icon: 'alarm', disabled: true },
    {
        value: 3,
        label: 'Three',
        icon: 'face',
        menuItems: [
            { value: 1, label: 'sub-one', icon: 'alarm' },
            { value: 2, label: 'sub-two' },
            {
                value: 3,
                label: 'sub-three',
                icon: 'alarm',
                onClick: () => console.log('You rang?'),
            },
        ],
    },
    { value: 4, label: 'Four', icon: 'alarm' },
    { value: 5, label: 'Five', icon: 'alarm' },
]

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

const menuItems = [
    <MenuItem key="jajaja" value={1} menuItems={subMenuItems}>
        Main item 1
    </MenuItem>,
    <MenuItem key="neee" value={2}>
        Main item 2
    </MenuItem>,
    <MenuItem key="misschien" value={3}>
        Main item 3
    </MenuItem>,
]

function onButtonClick(msg) {
    console.log(msg, 'button clicked')
}

export default class ProgressDemo extends Component {
    render() {
        return (
            <Paper>
                <h6>Button components</h6>
                <br />
                <PrimaryButton onClick={() => onButtonClick('primary')}>
                    Primary
                </PrimaryButton>
                <FlatButton disabled onClick={() => onButtonClick('flat')}>
                    Test
                </FlatButton>
                <RaisedButton
                    size="small"
                    onClick={() => onButtonClick('raised(small)')}
                >
                    <Icon name="alarm" /> Raised
                </RaisedButton>
                <RaisedButton
                    size="medium"
                    onClick={() => onButtonClick('raised(medium)')}
                >
                    <Icon name="alarm" />
                    Raised
                </RaisedButton>
                <RaisedButton
                    size="large"
                    onClick={() => onButtonClick('raised(large)')}
                >
                    <Icon name="alarm" />
                    Raised
                </RaisedButton>
                <RaisedButton onClick={() => onButtonClick('raised')}>
                    <Icon name="face" />
                </RaisedButton>
                <OutlinedButton onClick={() => onButtonClick('outlined')}>
                    Outlined
                </OutlinedButton>
                <CircleButton size="small" onClick={() => onButtonClick()}>
                    <Icon name="add" />
                </CircleButton>
                <CircleButton size="small" onClick={() => onButtonClick()}>
                    <Icon name="face" />
                </CircleButton>
                <CircleButton
                    aria-labelledby="test"
                    size="large"
                    onClick={() => onButtonClick()}
                >
                    <Icon name="add" />
                </CircleButton>
                <DropdownButton
                    buttonProps={{
                        kind: 'primary',
                        onClick: () => console.log('clicked main btn'),
                    }}
                    menuProps={menuProps}
                    options={dropdownOptions}
                >
                    <Icon name="add" />
                    Dropdown button
                </DropdownButton>
                <br />
                <br />
                <DropdownButton
                    buttonProps={{
                        kind: 'raised',
                        onClick: () => 'clicked main btn',
                    }}
                    menuProps={{ children: menuItems }}
                    options={dropdownOptions}
                >
                    <Icon name="add" />
                    Second Dropdown
                </DropdownButton>
            </Paper>
        )
    }
}
