import React from 'react'
import { storiesOf } from '@storybook/react'
import { ScreenCover } from '../src'

const onClick = (...args) => window.onClick(...args)

storiesOf('ScreenCover', module).add('Onclick', () => (
    <ScreenCover onClick={onClick} />
))
