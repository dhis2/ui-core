import React from 'react'
import { storiesOf } from '@storybook/react'
import { Radio, Help } from '../src'

import markdown from './info/atoms/radio.md'

const logger = (name, value) => console.info(`${name}: ${value}`)

storiesOf('Radio', module)
    .addParameters({
        notes: {
            markdown,
        },
    })

    .add('Default', () => (
        <Radio name="Ex" label="Radio" value="default" onChange={logger} />
    ))

    .add('with default checked', () => (
        <Radio
            name="Ex"
            label="Radio"
            value="default"
            defaultChecked
            onChange={logger}
        />
    ))

    .add('Default with help', () => (
        <Radio name="Ex" label="Radio" value="with-help" onChange={logger} />
    ))

    .add('Default: Disabled', () => (
        <Radio
            name="Ex"
            label="Radio"
            disabled
            value="disabled"
            onChange={logger}
        />
    ))

    .add('Default: Required', () => (
        <Radio
            name="Ex"
            required
            label="Radio"
            value="required"
            onChange={logger}
        />
    ))

    .add('Default: Checked', () => (
        <Radio
            name="Ex"
            label="Radio"
            checked
            value="checked"
            onChange={logger}
        />
    ))

    .add('Status: Valid', () => (
        <Radio
            name="Ex"
            label="Radio"
            checked
            valid
            value="valid"
            onChange={logger}
        />
    ))

    .add('Status: Warning', () => (
        <Radio
            name="Ex"
            label="Radio"
            checked
            warning
            value="warning"
            onChange={logger}
        />
    ))

    .add('Status: Error', () => (
        <Radio
            name="Ex"
            label="Radio"
            checked
            error
            value="error"
            onChange={logger}
        />
    ))
