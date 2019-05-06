import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button, Divider } from '../src'

import markdown from './info/atoms/button.md'

const logger = ({ target }) => console.info(`${target.name}: ${target.value}`)

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

function createStory(name, props) {
    storiesOf(name, module)
        .addParameters({
            notes: {
                markdown,
            },
        })

        .add('Default', () => <Button {...props}>Label me!</Button>)

        .add('Disabled', () => (
            <Button {...props} disabled>
                Label me!
            </Button>
        ))

        .add('Small', () => (
            <Button {...props} small>
                Label me!
            </Button>
        ))

        .add('Large', () => (
            <Button {...props} large>
                Label me!
            </Button>
        ))
}
