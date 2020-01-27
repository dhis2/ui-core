import { storiesOf } from '@storybook/react'
import React from 'react'
import { MenuItem } from '../index.js'

storiesOf('MenuItem', module).add('With onClick', () => (
    <MenuItem
        label="Menu item"
        value="default"
        onClick={(...args) => window.onClick(...args)}
    />
))