import React from 'react'
import { storiesOf } from '@storybook/react'
import { Radio, Help } from '../src'

import markdown from './info/atoms/radio.md'

const logger = ({ target }) => console.info(`${target.name}: ${target.value}`)

storiesOf('Radio', module)
    .addParameters({
        notes: {
            markdown,
        },
    })

    .add('Default', () => (
        <Radio name="Ex" label="Radio" value="default" onChange={logger} />
    ))

    .add('Focused unchecked', () => (
        <Radio
            initialFocus
            name="Ex"
            label="Radio"
            value="default"
            onChange={logger}
        />
    ))

    .add('Focused checked', () => (
        <Radio
            initialFocus
            checked
            name="Ex"
            label="Radio"
            value="default"
            onChange={logger}
        />
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

    .add('With Help', () => (
        <div>
            <Radio
                name="Ex"
                label="Radio"
                value="with-help"
                onChange={logger}
            />
            <Help>A lil' help text</Help>
        </div>
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
        <Radio
            name="Ex"
            label="Radio"
            valid
            checked
            value="valid"
            onChange={logger}
        />
    ))

    .add('Warning', () => (
        <Radio
            name="Ex"
            label="Radio"
            warning
            checked
            value="warning"
            onChange={logger}
        />
    ))

    .add('Error', () => (
        <Radio
            name="Ex"
            label="Radio"
            error
            checked
            value="error"
            onChange={logger}
        />
    ))
