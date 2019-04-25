import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { Switch, Help } from '../src'

const noop = () => {}

storiesOf('Switch', module)
    .add('Default', () => <Switch name="Ex" label="Switch" onChange={noop} />)

    .add('Default with help', () => (
        <>
            <Switch name="Ex" label="Switch" onChange={noop} />
            <Help>A helpful text</Help>
        </>
    ))

    .add('Default: Disabled', () => (
        <Switch name="Ex" label="Switch" disabled={true} onChange={noop} />
    ))

    .add('Default: Required', () => (
        <Switch name="Ex" required={true} label="Switch" onChange={noop} />
    ))

    .add('Default: Checked', () => (
        <Switch name="Ex" label="Switch" checked={true} onChange={noop} />
    ))

    .add('Status: Valid', () => (
        <Switch
            name="Ex"
            label="Switch"
            checked={true}
            status="valid"
            onChange={noop}
        />
    ))

    .add('Status: Warning', () => (
        <Switch
            name="Ex"
            label="Switch"
            checked={true}
            status="warning"
            onChange={noop}
        />
    ))

    .add('Status: Error', () => (
        <Switch
            name="Ex"
            label="Switch"
            checked={true}
            status="error"
            onChange={noop}
        />
    ))
