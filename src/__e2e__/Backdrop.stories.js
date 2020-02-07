import React from 'react'
import { storiesOf } from '@storybook/react'
import { Backdrop } from '../Backdrop.js'

storiesOf('Backdrop', module)
    .add('With onClick', () => (
        <Backdrop onClick={(...args) => window.onClick(...args)} />
    ))
    .add('With children', () => (
        <Backdrop>
            <span>I am a child</span>
        </Backdrop>
    ))
