import { storiesOf } from '@storybook/react'
import React from 'react'
import { MenuItem } from '../src'

const onClick = (...args) => window.onClick(...args)

storiesOf('MenuItem', module).add('Onclick', () => (
    <MenuItem label="Menu item" value="default" onClick={onClick} />
))
