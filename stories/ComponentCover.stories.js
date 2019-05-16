import React from 'react'
import { storiesOf } from '@storybook/react'
import { CircularProgress, ComponentCover, Card } from '../src'

storiesOf('ComponentCover', module)
    .add('CircularProgress', () => (
        <div style={{ width: '400px', height: '400px' }}>
            <ComponentCover>
                <CircularProgress />
            </ComponentCover>

            <h1>Text behind the cover</h1>
            <p>Lorem ipsum</p>
        </div>
    ))

    .add('Modal', () => (
        <div style={{ width: '400px', height: '400px', background: 'purple' }}>
            <ComponentCover>
                <div style={{ width: '200px', height: '200px' }}>
                    <Card>Some text.</Card>
                </div>
            </ComponentCover>

            <h1>Text behind the cover</h1>
            <p>Lorem ipsum</p>
        </div>
    ))
