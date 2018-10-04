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

function onMenuItemSelect(event, value, option) {
    console.log('Menu item click', event.target, value, option)
}

const items = [
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

function onButtonClick(msg) {
    console.log(msg, 'button clicked')
}

const HSpace = () => <span style={{ width: 20, display: 'inline-block' }} />

function Buttons() {
    return (
        <div style={{ margin: '0 20px 0 0' }}>
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
        <div style={{ margin: '20px 20px 20px 0', paddingBottom: 20 }}>
            <DropdownButton
                list={items}
                icon={<Icon name="add" />}
                label="Dropdown Button"
                onSelect={onMenuItemSelect}
                onClick={() => onDropdownClick('primary dropdown')}
            />
            <HSpace />
            <DropdownButton
                kind="raised"
                list={items}
                icon={<Icon name="add" />}
                label="Second Dropdown"
                onSelect={onMenuItemSelect}
                onClick={() => onDropdownClick('raised dropdown')}
            />
        </div>
    )
}

export default function ProgressDemo() {
    return (
        <Paper>
            <div style={{ margin: 20 }}>
                <h6>Button components</h6>
                <br />
                <Buttons />
                <Dropdowns />
            </div>
        </Paper>
    )
}
