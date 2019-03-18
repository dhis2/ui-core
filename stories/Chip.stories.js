import React from 'react'
import { storiesOf } from '@storybook/react'
import { Chip } from '../src'

storiesOf('Chip', module)
    .add('Default', () => <Chip>Chippy</Chip>)

    .add('Selected', () => <Chip selected={true} label="Chipmunk" />)

    .add('Removable', () => <Chip onRemove={() => {}} label="Chipmunk" />)
