import { storiesOf } from '@storybook/react'
import React from 'react'
import { Input } from '../index.js'

storiesOf('Input', module)
    .add('With onChange', () => (
        <Input
            label="Default label"
            name="Default"
            value=""
            onChange={(...args) => window.onChange(...args)}
        />
    ))
    .add('With initialFocus and onBlur', () => (
        <Input
            label="Default label"
            name="Default"
            value=""
            initialFocus
            onBlur={(...args) => window.onBlur(...args)}
        />
    ))
    .add('With onFocus', () => (
        <Input
            label="Default label"
            name="Default"
            value=""
            onFocus={(...args) => window.onFocus(...args)}
        />
    ))
