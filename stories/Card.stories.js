import React from 'react'
import { storiesOf } from '@storybook/react'
import { Card } from '../src'

import markdown from './info/atoms/card.md'

const Wrapper = fn => (
    <div style={{ width: '358px', height: '358px' }}>{fn()}</div>
)

storiesOf('Card', module)
    .addParameters({
        notes: {
            markdown,
        },
    })
    .addDecorator(Wrapper)
    .add('Default', () => <Card />)
