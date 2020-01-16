import React from 'react'
import { storiesOf } from '@storybook/react'
import { Chip } from '../../src'

storiesOf('Chip', module)
    .add('With onClick', () => (
        <Chip onClick={(...args) => window.onClick(...args)}>Chippy</Chip>
    ))
    .add('With onRemove', () => (
        <Chip onRemove={(...args) => window.onRemove(...args)}>Chipmunk</Chip>
    ))
