import React from 'react'
import { storiesOf } from '@storybook/react'
import { Checkbox, Help } from '../src'

const logger = (name, value) => console.info(`${name}: ${value}`)

storiesOf('Checkbox', module)
    .add('Default', () => (
        <Checkbox name="Ex" label="Checkbox" onChange={logger} />
    ))

    .add('Checked', () => (
        <Checkbox
            name="Ex"
            label="Set with checked"
            checked
            onChange={logger}
        />
    ))

    .add('Default checked', () => (
        <Checkbox
            name="Ex"
            label="Set with defaultChecked"
            defaultChecked
            onChange={logger}
        />
    ))

    .add('With Help', () => (
        <div>
            <Checkbox name="Ex" label="Checkbox" onChange={logger} />
            <Help>A lil' help text</Help>
        </div>
    ))

    .add('Indeterminate', () => (
        <Checkbox name="Ex" label="Checkbox" onChange={logger} indeterminate />
    ))

    .add('Disabled', () => (
        <Checkbox name="Ex" label="Checkbox" disabled onChange={logger} />
    ))

    .add('Required', () => (
        <Checkbox name="Ex" required label="Checkbox" onChange={logger} />
    ))

    .add('Status: Valid', () => (
        <Checkbox name="Ex" label="Checkbox" valid onChange={logger} />
    ))

    .add('Status: Warning', () => (
        <Checkbox name="Ex" label="Checkbox" warning onChange={logger} />
    ))

    .add('Status: Error', () => (
        <Checkbox name="Ex" label="Checkbox" error onChange={logger} />
    ))
