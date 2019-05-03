import React from 'react'
import { storiesOf } from '@storybook/react'
import { Checkbox, Help } from '../src'

import markdown from './info/atoms/checkbox.md'

const logger = ({ target }) => console.info(`${target.name}: ${target.checked}`)

storiesOf('Checkbox', module)
    .addParameters({
        notes: {
            markdown,
        },
    })

    .add('Default', () => (
        <Checkbox name="Ex" name="ex" label="Checkbox" onChange={logger} />
    ))

    .add('Checked', () => (
        <Checkbox
            name="Ex"
            label="Set with checked"
            checked
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
        <Checkbox name="Ex" label="Checkbox" valid checked onChange={logger} />
    ))

    .add('Status: Warning', () => (
        <Checkbox
            name="Ex"
            label="Checkbox"
            warning
            checked
            onChange={logger}
        />
    ))

    .add('Status: Error', () => (
        <Checkbox name="Ex" label="Checkbox" error checked onChange={logger} />
    ))
