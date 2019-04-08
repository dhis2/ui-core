import React from 'react'
import { storiesOf } from '@storybook/react'
import { SplitButton } from '../src'

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
            onClick={() => {
                alert('this is no.3')
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
                                    onClick={() => {
                                        alert('you went deep!')
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
            onClick={() => {
                alert('this is no.2')
            }}
        />
        <MenuItem
            label="Three"
            value="three"
            onClick={() => {
                alert('this is no.3')
            }}
        />
    </Menu>
)

storiesOf('SplitButton', module)
    .add('Default', () => (
        <SplitButton
            label="Drop it!"
            component={<span>Simplest thing!</span>}
        />
    ))

    .add('With Menu', () => (
        <SplitButton label="Drop it with menu!" component={menu} />
    ))

    .add('With Radio component in menu', () => (
        <SplitButton label="Drop it with menu!" component={componentMenu} />
    ))
