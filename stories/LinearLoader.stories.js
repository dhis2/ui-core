import React from 'react'
import { storiesOf } from '@storybook/react'
import { LinearLoader, ScreenCover, ComponentCover } from '../src'

storiesOf('LinearLoader', module)
    .add('Determinate', () => <LinearProgress amount={60} />)

    .add('Overlay page', () => (
        <ScreenCover>
            <LinearProgress amount={30} />
        </ScreenCover>
    ))

    .add('Overlay component', () => (
        <div style={{ width: '400px', height: '400px' }}>
            <ComponentCover>
                <LinearLoader amount={80} />
            </ComponentCover>
        </div>
    ))
