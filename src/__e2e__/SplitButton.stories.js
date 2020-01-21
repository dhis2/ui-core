import React from 'react'
import { storiesOf } from '@storybook/react'
import { SplitButton } from '../index.js'

storiesOf('SplitButton', module)
    .add('Default', () => (
        <SplitButton
            name="Button"
            value="default"
            component={<div>Component</div>}
        >
            Label me!
        </SplitButton>
    ))
    .add('With onClick', () => (
        <SplitButton
            name="Button"
            value="default"
            component={<div>Component</div>}
            onClick={(...args) => window.onClick(...args)}
        >
            Label me!
        </SplitButton>
    ))
