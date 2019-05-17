import React from 'react'
import { storiesOf } from '@storybook/react'
import { LinearProgress, ScreenCover, ComponentCover } from '../src'

storiesOf('LinearProgress', module)
    .add('Indeterminate', () => <LinearProgress />)

    .add('Determinate', () => <LinearProgress amount={60} />)

    .add('Overlay page', () => (
        <ScreenCover>
            <LinearProgress />
        </ScreenCover>
    ))

    .add('Overlay component', () => (
        <div style={{ width: '400px', height: '400px' }}>
            <ComponentCover>
                <LinearProgress amount={80} />
            </ComponentCover>
        </div>
    ))
