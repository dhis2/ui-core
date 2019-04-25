import React from 'react'
import { storiesOf } from '@storybook/react'
import { Chip } from '../src'

storiesOf('Chip', module)
    .add('Default', () => <Chip>Chippy</Chip>)

    .add('Selected', () => <Chip selected>Chipmunk</Chip>)

    .add('Overflow', () => (
        <Chip selected>A super long chip which should definitely truncate</Chip>
    ))

    .add('Removable', () => <Chip onRemove={() => {}}>Chipmunk</Chip>)
