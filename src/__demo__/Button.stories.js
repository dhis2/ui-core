import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from '../index.js'

const logger = ({ name, value }) => console.info(`${name}: ${value}`)

createStory('Button: Basic', {
    onClick: logger,
    name: 'Button',
    value: 'default',
})

createStory('Button: Primary', {
    onClick: logger,
    name: 'Button',
    value: 'default',
    primary: true,
})

createStory('Button: Secondary', {
    onClick: logger,
    name: 'Button',
    value: 'default',
    secondary: true,
})

createStory('Button: Destructive', {
    onClick: logger,
    name: 'Button',
    value: 'default',
    destructive: true,
})

window.onClick = (payload, event) => {
    console.log('onClick payload', payload)
    console.log('onClick event', event)
}
const onClick = (...args) => window.onClick(...args)

function createStory(name, props) {
    storiesOf(name, module)
        .add('Default', () => (
            <Button {...props} onClick={onClick}>
                Label me!
            </Button>
        ))

        .add('Disabled', () => (
            <Button {...props} disabled onClick={onClick}>
                Label me!
            </Button>
        ))

        .add('Small', () => (
            <Button {...props} small onClick={onClick}>
                Label me!
            </Button>
        ))

        .add('Large', () => (
            <Button {...props} large onClick={onClick}>
                Label me!
            </Button>
        ))

        .add('Focus', () => (
            <Button {...props} initialFocus onClick={onClick}>
                Label me!
            </Button>
        ))
}
