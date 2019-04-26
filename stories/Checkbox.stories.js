import React from 'react'
import { storiesOf } from '@storybook/react'
import { Checkbox, Help } from '../src'

const logger = (name, value) => console.info(`${name}: ${value}`)

storiesOf('Checkbox', module)
    .add('Default', () => (
        <Checkbox name="Ex" label="Checkbox" onChange={logger} />
    ))

    .add('Default with help', () => (
        <div>
            <Checkbox name="Ex" label="Checkbox" onChange={logger} />
            <Help>A lil' help text</Help>
        </div>
    ))

    .add('Default: Disabled', () => (
        <Checkbox name="Ex" label="Checkbox" disabled onChange={logger} />
    ))

    .add('Default: Required', () => (
        <Checkbox name="Ex" required label="Checkbox" onChange={logger} />
    ))

    .add('Default: Checked', () => (
        <Checkbox name="Ex" label="Checkbox" checked onChange={logger} />
    ))

    .add('Status: Valid', () => (
        <Checkbox name="Ex" label="Checkbox" checked valid onChange={logger} />
    ))

    .add('Status: Warning', () => (
        <Checkbox
            name="Ex"
            label="Checkbox"
            checked
            warning
            onChange={logger}
        />
    ))

    .add('Status: Error', () => (
        <Checkbox name="Ex" label="Checkbox" error checked onChange={logger} />
    ))
