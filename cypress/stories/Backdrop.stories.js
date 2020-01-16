import React from 'react'
import { storiesOf } from '@storybook/react'
import { Backdrop } from '../../src/Backdrop'

storiesOf('Backdrop', module).add('With onClick', () => (
    <Backdrop onClick={(...args) => window.onClick(...args)} />
))
