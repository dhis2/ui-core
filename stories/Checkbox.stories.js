import { storiesOf } from '@storybook/react'
import React from 'react'

import { Checkbox } from '../src'

const logger = ({ name, value, checked }) =>
    console.info(`name: ${name}, value: ${value}, checked: ${checked}`)

storiesOf('Checkbox', module)
    // Regular
    .add('Default', () => (
        <Checkbox
            name="Ex"
            label="Checkbox"
            value="default"
            onChange={logger}
        />
    ))

    .add('Focused unchecked', () => (
        <Checkbox
            initialFocus
            name="Ex"
            label="Checkbox"
            value="default"
            onChange={logger}
        />
    ))

    .add('Focused checked', () => (
        <Checkbox
            initialFocus
            checked
            name="Ex"
            label="Checkbox"
            value="default"
            onChange={logger}
        />
    ))

    .add('Checked', () => (
        <Checkbox
            name="Ex"
            label="Checkbox"
            checked
            value="checked"
            onChange={logger}
        />
    ))

    .add('Indeterminate', () => (
        <Checkbox
            name="Ex"
            label="Checkbox"
            indeterminate
            value="checked"
            onChange={logger}
        />
    ))

    .add('Disabled', () => (
        <>
            <Checkbox
                name="Ex"
                label="Checkbox"
                disabled
                value="disabled"
                onChange={logger}
            />
            <Checkbox
                name="Ex"
                label="Checkbox"
                disabled
                checked
                value="disabled"
                onChange={logger}
            />
        </>
    ))

    .add('Valid', () => (
        <>
            <Checkbox
                name="Ex"
                label="Checkbox"
                valid
                value="valid"
                onChange={logger}
            />
            <Checkbox
                name="Ex"
                label="Checkbox"
                valid
                checked
                value="valid"
                onChange={logger}
            />
        </>
    ))

    .add('Warning', () => (
        <>
            <Checkbox
                name="Ex"
                label="Checkbox"
                warning
                value="warning"
                onChange={logger}
            />
            <Checkbox
                name="Ex"
                label="Checkbox"
                warning
                checked
                value="warning"
                onChange={logger}
            />
        </>
    ))

    .add('Error', () => (
        <>
            <Checkbox
                name="Ex"
                label="Checkbox"
                error
                value="error"
                onChange={logger}
            />
            <Checkbox
                name="Ex"
                label="Checkbox"
                error
                checked
                value="error"
                onChange={logger}
            />
        </>
    ))

    .add('Image label', () => (
        <Checkbox
            name="Ex"
            label={<img src="https://picsum.photos/id/82/200/100" />}
            value="with-help"
            onChange={logger}
        />
    ))

    // Dense
    .add('Default - Dense', () => (
        <Checkbox
            dense
            name="Ex"
            label="Checkbox"
            value="default"
            onChange={logger}
        />
    ))

    .add('Focused unchecked - Dense', () => (
        <Checkbox
            dense
            initialFocus
            name="Ex"
            label="Checkbox"
            value="default"
            onChange={logger}
        />
    ))

    .add('Focused checked - Dense', () => (
        <Checkbox
            dense
            initialFocus
            checked
            name="Ex"
            label="Checkbox"
            value="default"
            onChange={logger}
        />
    ))

    .add('Checked - Dense', () => (
        <Checkbox
            dense
            name="Ex"
            label="Checkbox"
            checked
            value="checked"
            onChange={logger}
        />
    ))

    .add('Indeterminate - Dense', () => (
        <Checkbox
            dense
            name="Ex"
            label="Checkbox"
            indeterminate
            value="checked"
            onChange={logger}
        />
    ))

    .add('Disabled - Dense', () => (
        <>
            <Checkbox
                dense
                name="Ex"
                label="Checkbox"
                disabled
                value="disabled"
                onChange={logger}
            />
            <Checkbox
                dense
                name="Ex"
                label="Checkbox"
                disabled
                checked
                value="disabled"
                onChange={logger}
            />
        </>
    ))

    .add('Valid - Dense', () => (
        <>
            <Checkbox
                dense
                name="Ex"
                label="Checkbox"
                valid
                value="valid"
                onChange={logger}
            />
            <Checkbox
                dense
                name="Ex"
                label="Checkbox"
                valid
                checked
                value="valid"
                onChange={logger}
            />
        </>
    ))

    .add('Warning - Dense', () => (
        <>
            <Checkbox
                dense
                name="Ex"
                label="Checkbox"
                warning
                value="warning"
                onChange={logger}
            />
            <Checkbox
                dense
                name="Ex"
                label="Checkbox"
                warning
                checked
                value="warning"
                onChange={logger}
            />
        </>
    ))

    .add('Error - Dense', () => (
        <>
            <Checkbox
                dense
                name="Ex"
                label="Checkbox"
                error
                value="error"
                onChange={logger}
            />
            <Checkbox
                dense
                name="Ex"
                label="Checkbox"
                error
                checked
                value="error"
                onChange={logger}
            />
        </>
    ))

    .add('Image label - Dense', () => (
        <Checkbox
            dense
            name="Ex"
            label={<img src="https://picsum.photos/id/82/200/100" />}
            value="with-help"
            onChange={logger}
        />
    ))
