import React from 'react'
import { storiesOf } from '@storybook/react'
import { CircularLoader, ComponentCover, Card } from '../src'

storiesOf('ComponentCover', module)
    .add('CircularLoader', () => (
        <div style={{ width: '400px', height: '400px', position: 'relative' }}>
            <ComponentCover>
                <CircularLoader />
            </ComponentCover>

            <h1>Text behind the cover</h1>
            <p>Lorem ipsum</p>
        </div>
    ))

    .add('CircularLoader - transparent', () => (
        <div
            style={{
                width: '400px',
                height: '400px',
                border: '1px solid grey',
                position: 'relative',
            }}
        >
            <ComponentCover transparent>
                <CircularLoader />
            </ComponentCover>
        </div>
    ))

    .add('Modal', () => (
        <div
            style={{
                width: '400px',
                minHeight: '400px',
                background: 'purple',
                position: 'relative',
            }}
        >
            <ComponentCover>
                <div style={{ width: '200px', height: '200px' }}>
                    <Card>Some text.</Card>
                </div>
            </ComponentCover>

            <h1>Text behind the cover</h1>
            <p>Lorem ipsum</p>
        </div>
    ))
