import React from 'react'
import { storiesOf } from '@storybook/react'
import { Backdrop } from '../src/Backdrop'

const onClick = (...args) => window.onClick(...args)

storiesOf('Backdrop', module).add('Onclick', () => (
    <Backdrop onClick={onClick} />
))
