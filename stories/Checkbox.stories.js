import React from 'react'
import { storiesOf } from '@storybook/react'
import { Checkbox, Help } from '../src'

const noop = () => {}

storiesOf('Checkbox', module)
    .add('Default', () => (
        <Checkbox name="Ex" label="Checkbox" onChange={noop} />
    ))

    .add('Default with help', () => (
        <div>
            <Checkbox name="Ex" label="Checkbox" onChange={noop} />
            <Help>A lil' help text</Help>
        </div>
    ))

    .add('Default: Disabled', () => (
        <Checkbox name="Ex" label="Checkbox" disabled onChange={noop} />
    ))

    .add('Default: Required', () => (
        <Checkbox name="Ex" required label="Checkbox" onChange={noop} />
    ))

    .add('Default: Checked', () => (
        <Checkbox name="Ex" label="Checkbox" checked onChange={noop} />
    ))

    .add('Status: Valid', () => (
        <Checkbox name="Ex" label="Checkbox" checked valid onChange={noop} />
    ))

    .add('Status: Warning', () => (
        <Checkbox name="Ex" label="Checkbox" checked warning onChange={noop} />
    ))

    .add('Status: Error', () => (
        <Checkbox name="Ex" label="Checkbox" error checked onChange={noop} />
    ))
