import React from 'react'
import { storiesOf } from '@storybook/react'
import { TextArea } from '../src/index.js'

const onChange = (...args) => window.onChange(...args)
const onFocus = (...args) => window.onFocus(...args)
const onBlur = (...args) => window.onBlur(...args)

storiesOf('TextArea', module)
    .add('Empty', () => (
        <TextArea
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            name="textarea"
        />
    ))
    .add('Focused', () => (
        <TextArea
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            name="textarea"
            initialFocus
        />
    ))
