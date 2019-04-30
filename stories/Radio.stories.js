import React from 'react'
import { storiesOf } from '@storybook/react'
import { Radio, Help } from '../src'

const logger = (name, value) => console.info(`${name}: ${value}`)

storiesOf('Radio', module)
    .add('Default', () => (
        <Radio name="Ex" label="Radio" value="default" onChange={logger} />
    ))

    .add('Checked', () => (
        <Radio
            name="Ex"
            label="Radio"
            checked
            value="checked"
            onChange={logger}
        />
    ))

    .add('Default checked', () => (
        <Radio
            name="Ex"
            label="Radio"
            value="default"
            defaultChecked
            onChange={logger}
        />
    ))

    .add('ith Help', () => (
        <Radio name="Ex" label="Radio" value="with-help" onChange={logger} />
    ))

    .add('Disabled', () => (
        <Radio
            name="Ex"
            label="Radio"
            disabled
            value="disabled"
            onChange={logger}
        />
    ))

    .add('Required', () => (
        <Radio
            name="Ex"
            required
            label="Radio"
            value="required"
            onChange={logger}
        />
    ))

    .add('Valid', () => (
        <Radio name="Ex" label="Radio" valid value="valid" onChange={logger} />
    ))

    .add('Warning', () => (
        <Radio
            name="Ex"
            label="Radio"
            warning
            value="warning"
            onChange={logger}
        />
    ))

    .add('Error', () => (
        <Radio name="Ex" label="Radio" error value="error" onChange={logger} />
    ))
