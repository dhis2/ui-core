import { storiesOf } from '@storybook/react'
import React from 'react'

import { Radio } from '../src'

const logger = ({ name, value, checked }) =>
    console.info(`name: ${name}, value: ${value}, checked: ${checked}`)

storiesOf('Radio', module)
    // Regular
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

    .add('Disabled', () => (
        <>
            <Radio
                name="Ex"
                label="Radio"
                disabled
                value="disabled"
                onChange={logger}
            />
            <Radio
                name="Ex"
                label="Radio"
                disabled
                checked
                value="disabled"
                onChange={logger}
            />
        </>
    ))

    .add('Valid', () => (
        <>
            <Radio
                name="Ex"
                label="Radio"
                valid
                value="valid"
                onChange={logger}
            />
            <Radio
                name="Ex"
                label="Radio"
                valid
                checked
                value="valid"
                onChange={logger}
            />
        </>
    ))

    .add('Warning', () => (
        <>
            <Radio
                name="Ex"
                label="Radio"
                warning
                value="warning"
                onChange={logger}
            />
            <Radio
                name="Ex"
                label="Radio"
                warning
                checked
                value="warning"
                onChange={logger}
            />
        </>
    ))

    .add('Error', () => (
        <>
            <Radio
                name="Ex"
                label="Radio"
                error
                value="error"
                onChange={logger}
            />
            <Radio
                name="Ex"
                label="Radio"
                error
                checked
                value="error"
                onChange={logger}
            />
        </>
    ))

    .add('Image label', () => (
        <Radio
            name="Ex"
            label={<img src="https://picsum.photos/id/82/200/100" />}
            value="with-help"
            onChange={logger}
        />
    ))

    // Dense
    .add('Default - Dense', () => (
        <Radio
            dense
            name="Ex"
            label="Radio"
            value="default"
            onChange={logger}
        />
    ))

    .add('Focused unchecked - Dense', () => (
        <Radio
            dense
            initialFocus
            name="Ex"
            label="Radio"
            value="default"
            onChange={logger}
        />
    ))

    .add('Focused checked - Dense', () => (
        <Radio
            dense
            initialFocus
            checked
            name="Ex"
            label="Radio"
            value="default"
            onChange={logger}
        />
    ))

    .add('Checked - Dense', () => (
        <Radio
            dense
            name="Ex"
            label="Radio"
            checked
            value="checked"
            onChange={logger}
        />
    ))

    .add('Disabled - Dense', () => (
        <>
            <Radio
                dense
                name="Ex"
                label="Radio"
                disabled
                value="disabled"
                onChange={logger}
            />
            <Radio
                dense
                name="Ex"
                label="Radio"
                disabled
                checked
                value="disabled"
                onChange={logger}
            />
        </>
    ))

    .add('Valid - Dense', () => (
        <>
            <Radio
                dense
                name="Ex"
                label="Radio"
                valid
                value="valid"
                onChange={logger}
            />
            <Radio
                dense
                name="Ex"
                label="Radio"
                valid
                checked
                value="valid"
                onChange={logger}
            />
        </>
    ))

    .add('Warning - Dense', () => (
        <>
            <Radio
                dense
                name="Ex"
                label="Radio"
                warning
                value="warning"
                onChange={logger}
            />
            <Radio
                dense
                name="Ex"
                label="Radio"
                warning
                checked
                value="warning"
                onChange={logger}
            />
        </>
    ))

    .add('Error - Dense', () => (
        <>
            <Radio
                dense
                name="Ex"
                label="Radio"
                error
                value="error"
                onChange={logger}
            />
            <Radio
                dense
                name="Ex"
                label="Radio"
                error
                checked
                value="error"
                onChange={logger}
            />
        </>
    ))

    .add('Image label - Dense', () => (
        <Radio
            dense
            name="Ex"
            label={<img src="https://picsum.photos/id/82/200/100" />}
            value="with-help"
            onChange={logger}
        />
    ))
