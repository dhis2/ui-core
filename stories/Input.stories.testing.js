import { storiesOf } from '@storybook/react'
import React from 'react'
import { Input } from '../src'

const onChange = (...args) => window.onChange(...args)
const onFocus = (...args) => window.onFocus(...args)
const onBlur = (...args) => window.onBlur(...args)

storiesOf('Input', module)
    .add('Onchange', () => (
        <Input
            label="Default label"
            name="Default"
            value=""
            onChange={onChange}
        />
    ))
    .add('Onfocus', () => (
        <Input
            label="Default label"
            name="Default"
            value=""
            onFocus={onFocus}
        />
    ))
    .add('Focused', () => (
        <Input
            label="Default label"
            name="Default"
            value=""
            initialFocus
            onBlur={onBlur}
        />
    ))
