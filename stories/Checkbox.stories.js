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
        <Checkbox name="Ex" label="Checkbox" disabled={true} onChange={noop} />
    ))

    .add('Default: Required', () => (
        <Checkbox name="Ex" required={true} label="Checkbox" onChange={noop} />
    ))

    .add('Default: Checked', () => (
        <Checkbox name="Ex" label="Checkbox" checked={true} onChange={noop} />
    ))

    .add('Status: Valid', () => (
        <Checkbox
            name="Ex"
            label="Checkbox"
            checked={true}
            status="valid"
            onChange={noop}
        />
    ))

    .add('Status: Warning', () => (
        <Checkbox
            name="Ex"
            label="Checkbox"
            checked={true}
            status="warning"
            onChange={noop}
        />
    ))

    .add('Status: Error', () => (
        <Checkbox
            name="Ex"
            label="Checkbox"
            checked={true}
            status="error"
            onChange={noop}
        />
    ))
