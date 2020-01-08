import { storiesOf } from '@storybook/react'
import React from 'react'
import { Switch } from '../src'

const onChange = (...args) => window.onChange(...args)
const onFocus = (...args) => window.onFocus(...args)
const onBlur = (...args) => window.onBlur(...args)

storiesOf('Switch', module)
    .add('Unfocused', () => (
        <Switch
            name="Ex"
            label="Switch"
            value="default"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    ))
    .add('Focused', () => (
        <Switch
            initialFocus
            name="Ex"
            label="Switch"
            value="default"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    ))
    .add('Unchecked', () => (
        <Switch
            name="Ex"
            label="Switch"
            value="default"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    ))
