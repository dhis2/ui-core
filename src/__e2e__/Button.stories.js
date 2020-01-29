import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from '../index.js'

storiesOf('Button', module)
    .add('With onClick', () => (
        <Button
            name="Button"
            value="default"
            onClick={(...args) => window.onClick(...args)}
        >
            Label me!
        </Button>
    ))
    .add('With initialFocus and onBlur', () => (
        <Button
            name="Button"
            value="default"
            initialFocus
            onBlur={(...args) => window.onBlur(...args)}
        >
            Label me!
        </Button>
    ))
    .add('With onFocus', () => (
        <Button
            name="Button"
            value="default"
            onFocus={(...args) => window.onFocus(...args)}
        >
            Label me!
        </Button>
    ))
