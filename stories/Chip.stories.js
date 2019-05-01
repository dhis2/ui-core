import React from 'react'
import { storiesOf } from '@storybook/react'
import { Chip } from '../src'

import markdown from './info/atoms/chip.md'

storiesOf('Chip', module)
    .addParameters({
        notes: {
            markdown,
        },
    })

    .add('Default', () => <Chip>Chippy</Chip>)

    .add('Selected', () => <Chip selected>Chipmunk</Chip>)

    .add('Overflow', () => (
        <Chip selected>A super long chip which should definitely truncate</Chip>
    ))

    .add('Removable', () => <Chip onRemove={() => {}}>Chipmunk</Chip>)
