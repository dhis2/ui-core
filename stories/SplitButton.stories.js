import React from 'react'
import { storiesOf } from '@storybook/react'
import { SplitButton } from '../src'

import { Menu, MenuItem, Divider, Switch } from '../src'
import markdown from './info/atoms/button.md'

const options = []

const componentMenu = (
    <Menu>
        <MenuItem
            label={<Switch label="Yahoo" name="radio" onChange={() => {}} />}
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

const Simple = <span>Simplest thing</span>

createStory('SplitButton: Basic', {
    name: 'Button',
    value: 'default',
    onClick: e =>
        alert(`Clicked button ${e.target.name} with ${e.target.value}`),
    component: Simple,
})

createStory('SplitButton: Primary', {
    name: 'Button',
    value: 'default',
    onClick: e =>
        alert(`Clicked button ${e.target.name} with ${e.target.value}`),
    primary: true,
    component: Simple,
})

createStory('SplitButton: Secondary', {
    name: 'Button',
    value: 'default',
    onClick: e =>
        alert(`Clicked button ${e.target.name} with ${e.target.value}`),
    secondary: true,
    component: Simple,
})

createStory('SplitButton: Destructive', {
    name: 'Button',
    value: 'default',
    onClick: e =>
        alert(`Clicked button ${e.target.name} with ${e.target.value}`),
    destructive: true,
    component: Simple,
})

function createStory(name, props) {
    storiesOf(name, module)
        .addParameters({
            notes: {
                markdown,
            },
        })

        .add('Default', () => <SplitButton {...props}>Label me!</SplitButton>)

        .add('Disabled', () => (
            <SplitButton {...props} disabled>
                Label me!
            </SplitButton>
        ))

        .add('Small', () => (
            <SplitButton {...props} small>
                Label me!
            </SplitButton>
        ))

        .add('Large', () => (
            <SplitButton {...props} large>
                Label me!
            </SplitButton>
        ))

        .add('With Menu', () => (
            <SplitButton {...props} component={menu}>
                Drop it with menu!
            </SplitButton>
        ))

        .add('With Radio component in menu', () => (
            <SplitButton {...props} component={componentMenu}>
                Drop it with menu!
            </SplitButton>
        ))
}
