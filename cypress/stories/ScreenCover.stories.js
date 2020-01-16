import React from 'react'
import { storiesOf } from '@storybook/react'
import { ScreenCover } from '../../src'

storiesOf('ScreenCover', module).add('With onClick', () => (
    <ScreenCover onClick={(...args) => window.onClick(...args)} />
))
