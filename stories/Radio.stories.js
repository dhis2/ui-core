import React from 'react'
import { storiesOf } from '@storybook/react'
import { Radio } from '../src'

const noop = () => {}

storiesOf('Radio', module)
    .add('Default', () => <Radio name="Ex" label="Radio" onChange={noop} />)

    .add('Default with help', () => (
        <Radio name="Ex" label="Radio" help="A helpful text" onChange={noop} />
    ))

    .add('Default: Disabled', () => (
        <Radio name="Ex" label="Radio" disabled={true} onChange={noop} />
    ))

    .add('Default: Required', () => (
        <Radio name="Ex" required={true} label="Radio" onChange={noop} />
    ))

    .add('Default: Checked', () => (
        <Radio name="Ex" label="Radio" checked={true} onChange={noop} />
    ))

    .add('Status: Valid', () => (
        <Radio
            name="Ex"
            label="Radio"
            checked={true}
            status="valid"
            onChange={noop}
        />
    ))

    .add('Status: Warning', () => (
        <Radio
            name="Ex"
            label="Radio"
            checked={true}
            status="warning"
            onChange={noop}
        />
    ))

    .add('Status: Error', () => (
        <Radio
            name="Ex"
            label="Radio"
            checked={true}
            status="error"
            onChange={noop}
        />
    ))
