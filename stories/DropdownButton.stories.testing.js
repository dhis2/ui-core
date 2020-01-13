import React from 'react'
import { storiesOf } from '@storybook/react'
import { DropdownButton } from '../src'

const onClick = (...args) => window.onClick(...args)

storiesOf('DropdownButton', module)
    .add('Closed', () => (
        <DropdownButton
            name="Button"
            value="default"
            onClick={onClick}
            component="Component"
        >
            Label me!
        </DropdownButton>
    ))
    .add('Onclick', () => (
        <DropdownButton
            name="Button"
            value="default"
            onClick={onClick}
            component="Component"
        >
            Label me!
        </DropdownButton>
    ))
