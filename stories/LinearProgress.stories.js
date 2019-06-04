import React from 'react'
import { storiesOf } from '@storybook/react'
import { LinearProgress, ScreenCover, ComponentCover } from '../src'

storiesOf('LinearProgress', module)
    .add('Determinate', () => <LinearProgress amount={60} />)

    .add('Overlay page', () => (
        <ScreenCover>
            <LinearProgress amount={60} />
        </ScreenCover>
    ))

    .add('Overlay component', () => (
        <div style={{ width: '400px', height: '400px' }}>
            <ComponentCover>
                <LinearProgress amount={80} />
            </ComponentCover>
        </div>
    ))
