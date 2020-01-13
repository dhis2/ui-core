import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from '../src'

const onClick = (...args) => window.onClick(...args)

storiesOf('Button', module).add('Onclick', () => (
    <Button name="Button" value="default" onClick={onClick}>
        Label me!
    </Button>
))
