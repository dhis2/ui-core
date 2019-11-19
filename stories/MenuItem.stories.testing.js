import { storiesOf } from '@storybook/react'
import React from 'react'

import { MenuItem } from '../src'

window.onClick = (payload, event) => {
    console.log('onClick payload', payload)
    console.log('onClick event', event)
}

const onClick = (...args) => window.onClick(...args)

storiesOf('MenuItem', module).add('Default', () => (
    <MenuItem label="Menu item" value="default" onClick={onClick} />
))
