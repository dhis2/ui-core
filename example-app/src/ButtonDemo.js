/** @format */

import React from 'react'

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

const HSpace = () => <span style={{ width: 20, display: 'inline-block' }} />

function Buttons() {
    return (
        <div style={{ marginBottom: 20 }}>
            <PrimaryButton onClick={() => onButtonClick('primary')}>
                Primary
            </PrimaryButton>
            <HSpace />
            <FlatButton disabled onClick={() => onButtonClick('flat')}>
                Test
            </FlatButton>
            <HSpace />
            <RaisedButton
                size="small"
                onClick={() => onButtonClick('raised(small)')}
            >
                <Icon name="alarm" /> Raised
            </RaisedButton>
            <HSpace />
            <RaisedButton
                size="medium"
                onClick={() => onButtonClick('raised(medium)')}
            >
                <Icon name="alarm" />
                Raised
            </RaisedButton>
            <HSpace />
            <RaisedButton
                size="large"
                onClick={() => onButtonClick('raised(large)')}
            >
                <Icon name="alarm" />
                Raised
            </RaisedButton>
            <HSpace />
            <RaisedButton onClick={() => onButtonClick('raised')}>
                <Icon name="face" />
            </RaisedButton>
            <HSpace />
            <OutlinedButton onClick={() => onButtonClick('outlined')}>
                Outlined
            </OutlinedButton>
            <HSpace />
            <CircleButton size="small" onClick={() => onButtonClick()}>
                <Icon name="add" />
            </CircleButton>
            <HSpace />
            <CircleButton size="small" onClick={() => onButtonClick()}>
                <Icon name="face" />
            </CircleButton>
            <HSpace />
            <CircleButton
                aria-labelledby="test"
                size="large"
                onClick={() => onButtonClick()}
            >
                <Icon name="add" />
            </CircleButton>
            <HSpace />
        </div>
    )
}

function onDropdownClick(msg) {
    console.log('onDropdownClick', msg)
}

function Dropdowns() {
    return (
        <div style={{ marginBottom: 20 }}>
            <DropdownButton
                buttonProps={{
                    kind: 'primary',
                    onClick: () => onDropdownClick('first'),
                }}
                menuProps={menuProps}
                options={dropdownOptions}
            >
                <Icon name="add" />
                Dropdown button
            </DropdownButton>
            <HSpace />
            <DropdownButton
                buttonProps={{
                    kind: 'raised',
                    onClick: () => onDropdownClick('second'),
                }}
                menuProps={{ children: menuItems }}
                options={dropdownOptions}
            >
                <Icon name="add" />
                Second Dropdown
            </DropdownButton>
        </div>
    )
}

export default function ProgressDemo() {
    return (
        <Paper>
            <h6>Button components</h6>
            <br />
            <Buttons />
            <Dropdowns />
        </Paper>
    )
}
