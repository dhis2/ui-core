import { storiesOf } from '@storybook/react'
import React from 'react'
import { Checkbox } from '../src'

const onChange = (...args) => window.onChange(...args)
const onFocus = (...args) => window.onFocus(...args)
const onBlur = (...args) => window.onBlur(...args)

storiesOf('Checkbox', module)
    .add('Unchecked', () => (
        <Checkbox
            name="Ex"
            label="Checkbox"
            value="default"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    ))
    .add('Focused', () => (
        <Checkbox
            initialFocus
            name="Ex"
            label="Checkbox"
            value="default"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    ))
    .add('Unfocused', () => (
        <Checkbox
            name="Ex"
            label="Checkbox"
            value="default"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    ))
