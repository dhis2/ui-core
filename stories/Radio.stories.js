import React from 'react'
import { storiesOf } from '@storybook/react'
import { Radio, Help } from '../src'

const noop = () => {}

storiesOf('Radio', module)
    .add('Default', () => <Radio name="Ex" label="Radio" onChange={noop} />)

    .add('Default with help', () => (
        <div>
            <Radio name="Ex" label="Radio" onChange={noop} />
            <Help>A lil' help text</Help>
        </div>
    ))

    .add('Default: Disabled', () => (
        <Radio name="Ex" label="Radio" disabled onChange={noop} />
    ))

    .add('Default: Required', () => (
        <Radio name="Ex" required label="Radio" onChange={noop} />
    ))

    .add('Default: Checked', () => (
        <Radio name="Ex" label="Radio" checked onChange={noop} />
    ))

    .add('Status: Valid', () => (
        <Radio name="Ex" label="Radio" checked valid onChange={noop} />
    ))

    .add('Status: Warning', () => (
        <Radio name="Ex" label="Radio" checked warning onChange={noop} />
    ))

    .add('Status: Error', () => (
        <Radio name="Ex" label="Radio" checked error onChange={noop} />
    ))
