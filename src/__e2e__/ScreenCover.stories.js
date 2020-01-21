import React from 'react'
import { storiesOf } from '@storybook/react'
import { ScreenCover } from '../index.js'

storiesOf('ScreenCover', module).add('With onClick', () => (
    <ScreenCover onClick={(...args) => window.onClick(...args)} />
))
