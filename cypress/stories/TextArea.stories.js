import React from 'react'
import { storiesOf } from '@storybook/react'
import { TextArea } from '../../src/index.js'

storiesOf('TextArea', module)
    .add('With onChange', () => (
        <TextArea
            onChange={(...args) => window.onChange(...args)}
            name="textarea"
        />
    ))
    .add('With initialFocus and onBlur', () => (
        <TextArea
            initialFocus
            name="textarea"
            onBlur={(...args) => window.onBlur(...args)}
        />
    ))
    .add('With onFocus', () => (
        <TextArea
            name="textarea"
            onFocus={(...args) => window.onFocus(...args)}
        />
    ))
