import React from 'react'
import { storiesOf } from '@storybook/react'
import { SplitButton } from '../src'

const onClick = (...args) => window.onClick(...args)

storiesOf('SplitButton', module).add('Closed', () => (
    <SplitButton
        name="Button"
        value="default"
        component={'Component'}
        onClick={onClick}
    >
        Label me!
    </SplitButton>
))
