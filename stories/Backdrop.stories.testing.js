import React from 'react'
import { storiesOf } from '@storybook/react'
import { Backdrop } from '../src/Backdrop'

// default onClick, should be overriden with a stub by cypress
window.onClick = (payload, event) => {
    console.log('onClick payload', payload)
    console.log('onClick event', event)
}

const onClick = (...args) => window.onClick(...args)

storiesOf('Backdrop', module).add('Default', () => (
    <Backdrop onClick={onClick} />
))
