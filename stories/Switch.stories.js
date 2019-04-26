import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { Switch, Help } from '../src'

const logger = (name, value) => console.info(`${name}: ${value}`)

storiesOf('Switch', module)
    .add('Default', () => <Switch name="Ex" label="Switch" onChange={logger} />)

    .add('Default with help', () => (
        <>
            <Switch name="Ex" label="Switch" onChange={logger} />
            <Help>A helpful text</Help>
        </>
    ))

    .add('Default: Disabled', () => (
        <Switch name="Ex" label="Switch" disabled onChange={logger} />
    ))

    .add('Default: Required', () => (
        <Switch name="Ex" required label="Switch" onChange={logger} />
    ))

    .add('Default: Checked', () => (
        <Switch name="Ex" label="Switch" checked onChange={logger} />
    ))

    .add('Status: Valid', () => (
        <Switch name="Ex" label="Switch" checked valid onChange={logger} />
    ))

    .add('Status: Warning', () => (
        <Switch name="Ex" label="Switch" checked warning onChange={logger} />
    ))

    .add('Status: Error', () => (
        <Switch name="Ex" label="Switch" error checked onChange={logger} />
    ))
