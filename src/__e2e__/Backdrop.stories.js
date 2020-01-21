import React from 'react'
import { storiesOf } from '@storybook/react'
import { Backdrop } from '../Backdrop.js'

storiesOf('Backdrop', module).add('With onClick', () => (
    <Backdrop onClick={(...args) => window.onClick(...args)} />
))
