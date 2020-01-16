import { storiesOf } from '@storybook/react'
import React from 'react'
import { Switch } from '../../src'

storiesOf('Switch', module)
    .add('With onChange', () => (
        <Switch
            name="Ex"
            label="Switch"
            value="default"
            onChange={(...args) => window.onChange(...args)}
        />
    ))
    .add('With initialFocus and onBlur', () => (
        <Switch
            initialFocus
            name="Ex"
            label="Switch"
            value="default"
            onBlur={(...args) => window.onBlur(...args)}
        />
    ))
    .add('With onFocus', () => (
        <Switch
            name="Ex"
            label="Switch"
            value="default"
            onFocus={(...args) => window.onFocus(...args)}
        />
    ))
