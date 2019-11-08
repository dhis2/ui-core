import { storiesOf } from '@storybook/react'
import React from 'react'

import { Switch } from '../src'

const logger = ({ name, value, checked }) =>
    console.info(`name: ${name}, value: ${value}, checked: ${checked}`)

storiesOf('Switch', module)
    // Regular
    .add('Default', () => (
        <Switch name="Ex" label="Switch" value="default" onChange={logger} />
    ))

    .add('Focused unchecked', () => (
        <Switch
            initialFocus
            name="Ex"
            label="Switch"
            value="default"
            onChange={logger}
        />
    ))

    .add('Focused checked', () => (
        <Switch
            initialFocus
            checked
            name="Ex"
            label="Switch"
            value="default"
            onChange={logger}
        />
    ))

    .add('Checked', () => (
        <Switch
            name="Ex"
            label="Switch"
            checked
            value="checked"
            onChange={logger}
        />
    ))

    .add('Disabled', () => (
        <>
            <Switch
                name="Ex"
                label="Switch"
                disabled
                value="disabled"
                onChange={logger}
            />
            <Switch
                name="Ex"
                label="Switch"
                disabled
                checked
                value="disabled"
                onChange={logger}
            />
        </>
    ))

    .add('Valid', () => (
        <>
            <Switch
                name="Ex"
                label="Switch"
                valid
                value="valid"
                onChange={logger}
            />
            <Switch
                name="Ex"
                label="Switch"
                valid
                checked
                value="valid"
                onChange={logger}
            />
        </>
    ))

    .add('Warning', () => (
        <>
            <Switch
                name="Ex"
                label="Switch"
                warning
                value="warning"
                onChange={logger}
            />
            <Switch
                name="Ex"
                label="Switch"
                warning
                checked
                value="warning"
                onChange={logger}
            />
        </>
    ))

    .add('Error', () => (
        <>
            <Switch
                name="Ex"
                label="Switch"
                error
                value="error"
                onChange={logger}
            />
            <Switch
                name="Ex"
                label="Switch"
                error
                checked
                value="error"
                onChange={logger}
            />
        </>
    ))

    .add('Image label', () => (
        <Switch
            name="Ex"
            label={<img src="https://picsum.photos/id/82/200/100" />}
            value="with-help"
            onChange={logger}
        />
    ))

    // Dense
    .add('Default - Dense', () => (
        <Switch
            dense
            name="Ex"
            label="Switch"
            value="default"
            onChange={logger}
        />
    ))

    .add('Focused unchecked - Dense', () => (
        <Switch
            dense
            initialFocus
            name="Ex"
            label="Switch"
            value="default"
            onChange={logger}
        />
    ))

    .add('Focused checked - Dense', () => (
        <Switch
            dense
            initialFocus
            checked
            name="Ex"
            label="Switch"
            value="default"
            onChange={logger}
        />
    ))

    .add('Checked - Dense', () => (
        <Switch
            dense
            name="Ex"
            label="Switch"
            checked
            value="checked"
            onChange={logger}
        />
    ))

    .add('Disabled - Dense', () => (
        <>
            <Switch
                dense
                name="Ex"
                label="Switch"
                disabled
                value="disabled"
                onChange={logger}
            />
            <Switch
                dense
                name="Ex"
                label="Switch"
                disabled
                checked
                value="disabled"
                onChange={logger}
            />
        </>
    ))

    .add('Valid - Dense', () => (
        <>
            <Switch
                dense
                name="Ex"
                label="Switch"
                valid
                value="valid"
                onChange={logger}
            />
            <Switch
                dense
                name="Ex"
                label="Switch"
                valid
                checked
                value="valid"
                onChange={logger}
            />
        </>
    ))

    .add('Warning - Dense', () => (
        <>
            <Switch
                dense
                name="Ex"
                label="Switch"
                warning
                value="warning"
                onChange={logger}
            />
            <Switch
                dense
                name="Ex"
                label="Switch"
                warning
                checked
                value="warning"
                onChange={logger}
            />
        </>
    ))

    .add('Error - Dense', () => (
        <>
            <Switch
                dense
                name="Ex"
                label="Switch"
                error
                value="error"
                onChange={logger}
            />
            <Switch
                dense
                name="Ex"
                label="Switch"
                error
                checked
                value="error"
                onChange={logger}
            />
        </>
    ))

    .add('Image label - Dense', () => (
        <Switch
            dense
            name="Ex"
            label={<img src="https://picsum.photos/id/82/200/100" />}
            value="with-help"
            onChange={logger}
        />
    ))
