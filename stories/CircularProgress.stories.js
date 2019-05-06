import React from 'react'
import { storiesOf } from '@storybook/react'
import { CircularProgress } from '../src'

storiesOf('CircularProgress', module)
    .add('Default', () => <CircularProgress />)

    .add('Overlay component', () => (
        <div style={{ width: '358px', height: '358px', position: 'relative' }}>
            <CircularProgress overlay />
        </div>
    ))

    .add('Overlay page', () => <CircularProgress overlay />)

    .add('Small', () => <CircularProgress small />)

    .add('Large', () => <CircularProgress large />)
