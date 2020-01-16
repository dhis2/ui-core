import { storiesOf } from '@storybook/react'
import React from 'react'
import { Radio } from '../../src'

storiesOf('Radio', module)
    .add('With onChange', () => (
        <Radio
            name="Ex"
            label="Radio"
            value="default"
            onChange={(...args) => window.onChange(...args)}
        />
    ))
    .add('With initialFocus and onBlur', () => (
        <Radio
            name="Ex"
            label="Radio"
            value="default"
            initialFocus
            onBlur={(...args) => window.onBlur(...args)}
        />
    ))
    .add('With onFocus', () => (
        <Radio
            initialFocus
            name="Ex"
            label="Radio"
            value="default"
            onFocus={(...args) => window.onFocus(...args)}
        />
    ))
