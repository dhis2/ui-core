import React from 'react'
import { storiesOf } from '@storybook/react'
import { CircularProgress, ScreenCover, ComponentCover } from '../src'

storiesOf('CircularProgress', module)
    .add('Default', () => <CircularProgress />)

    .add('Overlay page', () => (
        <ScreenCover>
            <CircularProgress />
        </ScreenCover>
    ))

    .add('Overlay component', () => (
        <div style={{ width: '400px', height: '400px' }}>
            <ComponentCover>
                <CircularProgress />
            </ComponentCover>
        </div>
    ))

    .add('Small', () => <CircularProgress small />)

    .add('Large', () => <CircularProgress large />)
