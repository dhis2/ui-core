import React from 'react'
import { storiesOf } from '@storybook/react'
import { DropdownButton } from '../src'

import { Menu, MenuItem, Divider, Switch } from '../src'

const options = []

const componentMenu = (
    <Menu>
        <MenuItem
            label={
                <Switch
                    label="Yahoo"
                    onChange={v => {
                        alert('would need state, but would set to: ' + v)
                    }}
                    checked={false}
                />
            }
        />
        <Divider />
        <MenuItem
            label="Three"
            value="three"
            onClick={val => {
                alert(`this is ${val}`)
            }}
        />
    </Menu>
)

const menu = (
    <Menu>
        <MenuItem label="One" value="one">
            <Menu>
                <MenuItem label="Sub One" value="subone">
                    <Menu>
                        <MenuItem label="Sub One-One" value="suboneone">
                            <Menu>
                                <MenuItem
                                    label="Sub One-One-One"
                                    value="suboneoneone"
                                    onClick={val => {
                                        alert(`this is ${val}`)
                                    }}
                                />
                            </Menu>
                        </MenuItem>
                    </Menu>
                </MenuItem>
            </Menu>
        </MenuItem>

        <Divider />
        <MenuItem
            label="Two"
            value="two"
            onClick={val => {
                alert(`this is ${val}`)
            }}
        />
        <MenuItem
            label="Three"
            value="three"
            onClick={val => {
                alert(`this is ${val}`)
            }}
        />
    </Menu>
)

storiesOf('DropdownButton', module)
    .add('Default', () => (
        <DropdownButton component={<span>Simplest thing</span>}>
            Default
        </DropdownButton>
    ))

    .add('With Menu', () => (
        <DropdownButton label="Drop it with menu!" component={menu} />
    ))

    .add('With Radio component in menu', () => (
        <DropdownButton label="Drop it with menu!" component={componentMenu} />
    ))
