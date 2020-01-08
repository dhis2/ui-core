import { storiesOf } from '@storybook/react'
import React from 'react'
import { Radio } from '../src'

const onChange = (...args) => window.onChange(...args)
const onFocus = (...args) => window.onFocus(...args)
const onBlur = (...args) => window.onBlur(...args)

storiesOf('Radio', module)
    .add('Unchecked', () => (
        <Radio
            name="Ex"
            label="Radio"
            value="default"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    ))
    .add('Unfocused', () => (
        <Radio
            name="Ex"
            label="Radio"
            value="default"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    ))
    .add('Focused', () => (
        <Radio
            initialFocus
            name="Ex"
            label="Radio"
            value="default"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    ))
