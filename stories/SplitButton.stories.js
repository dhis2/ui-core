import React from 'react'
import { storiesOf } from '@storybook/react'
import { SplitButton } from '../src'

import { Menu, MenuItem, Divider, Switch } from '../src'
import markdown from './info/atoms/button.md'

const options = []

const componentMenu = (
    <Menu>
        <MenuItem
            label={
                <Switch
                    label="Yahoo"
                    name="radio"
                    onChange={(name, value) => {
                        alert(`${name}: ${value}`)
                    }}
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
    .addParameters({
        notes: {
            markdown,
        },
    })

    .add('Default', () => (
        <SplitButton
            name="foo"
            value="bar"
            onClick={(n, v) => alert(`Clicked button ${n} with ${v}`)}
            component={<span>Simplest thing!</span>}
        >
            Drop it with menu!
        </SplitButton>
    ))

    .add('With Menu', () => (
        <SplitButton
            onClick={(n, v) => alert(`Clicked button ${n} with ${v}`)}
            component={menu}
        >
            Drop it with menu!
        </SplitButton>
    ))

    .add('With Radio component in menu', () => (
        <SplitButton
            onClick={(n, v) => alert(`Clicked button ${n} with ${v}`)}
            component={componentMenu}
        >
            Drop it with menu!
        </SplitButton>
    ))
