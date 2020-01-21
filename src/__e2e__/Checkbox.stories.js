import { storiesOf } from '@storybook/react'
import React from 'react'
import { Checkbox } from '../index.js'

storiesOf('Checkbox', module)
    .add('With onChange', () => (
        <Checkbox
            name="Ex"
            label="Checkbox"
            value="default"
            onChange={(...args) => window.onChange(...args)}
        />
    ))
    .add('With initialFocus and onBlur', () => (
        <Checkbox
            initialFocus
            name="Ex"
            label="Checkbox"
            value="default"
            onBlur={(...args) => window.onBlur(...args)}
        />
    ))
    .add('With onFocus', () => (
        <Checkbox
            name="Ex"
            label="Checkbox"
            value="default"
            onFocus={(...args) => window.onFocus(...args)}
        />
    ))
