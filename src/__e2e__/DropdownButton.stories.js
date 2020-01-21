import React from 'react'
import { storiesOf } from '@storybook/react'
import { DropdownButton } from '../index.js'

storiesOf('DropdownButton', module)
    .add('Default', () => (
        <DropdownButton
            name="Button"
            value="default"
            component={<div>Content</div>}
        >
            Content
        </DropdownButton>
    ))
    .add('With onClick', () => (
        <DropdownButton
            name="Button"
            value="default"
            onClick={(...args) => window.onClick(...args)}
            component={<div>Content</div>}
        >
            Content
        </DropdownButton>
    ))
