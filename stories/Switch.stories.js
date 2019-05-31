import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { Switch, Help } from '../src'

const logger = ({ target }) => console.info(`${target.name}: ${target.checked}`)

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

    .add('Focus unchecked', () => (
        <Switch name="Ex" focus label="Switch" onChange={logger} />
    ))

    .add('Focus checked', () => (
        <Switch name="Ex" checked focus label="Switch" onChange={logger} />
    ))

    .add('Focus valid', () => (
        <Switch
            name="Ex"
            checked
            valid
            focus
            label="Switch"
            onChange={logger}
        />
    ))

    .add('Focus warning', () => (
        <Switch
            name="Ex"
            checked
            warning
            focus
            label="Switch"
            onChange={logger}
        />
    ))

    .add('Focus error', () => (
        <Switch
            name="Ex"
            checked
            error
            focus
            label="Switch"
            onChange={logger}
        />
    ))

    .add('Checked', () => (
        <Switch name="Ex" label="Switch" checked onChange={logger} />
    ))

    .add('Valid', () => (
        <Switch name="Ex" label="Switch" checked valid onChange={logger} />
    ))

    .add('Warning', () => (
        <Switch name="Ex" label="Switch" checked warning onChange={logger} />
    ))

    .add('Error', () => (
        <Switch name="Ex" label="Switch" checked error onChange={logger} />
    ))
