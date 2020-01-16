import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from '../../src'

storiesOf('Button', module).add('With onClick', () => (
    <Button
        name="Button"
        value="default"
        onClick={(...args) => window.onClick(...args)}
    >
        Label me!
    </Button>
))
