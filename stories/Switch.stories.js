import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { Switch, Help } from '../src'

const logger = (name, value) => console.info(`${name}: ${value}`)

storiesOf('Switch', module)
    .add('Default', () => <Switch name="Ex" label="Switch" onChange={logger} />)

    .add('with Help', () => (
        <>
            <Switch name="Ex" label="Switch" onChange={logger} />
            <Help>A helpful text</Help>
        </>
    ))

    .add('Disabled', () => (
        <Switch name="Ex" label="Switch" disabled onChange={logger} />
    ))

    .add('Required', () => (
        <Switch name="Ex" required label="Switch" onChange={logger} />
    ))

    .add('Default checked', () => (
        <Switch name="Ex" label="Switch" defaultChecked onChange={logger} />
    ))

    .add('Checked', () => (
        <Switch name="Ex" label="Switch" checked onChange={logger} />
    ))

    .add('Valid', () => (
        <Switch name="Ex" label="Switch" valid onChange={logger} />
    ))

    .add('Warning', () => (
        <Switch name="Ex" label="Switch" warning onChange={logger} />
    ))

    .add('Error', () => (
        <Switch name="Ex" label="Switch" checked onChange={logger} />
    ))
