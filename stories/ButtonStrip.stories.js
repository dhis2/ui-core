import React from 'react'
import { storiesOf } from '@storybook/react'
import { ButtonStrip, Button } from '../src'

import markdown from './info/atoms/buttonStrip.md'

const Wrapper = fn => (
    <div
        style={{
            width: '358px',
            border: '1px solid #c4c9cc',
            padding: 8,
        }}
    >
        {fn()}
    </div>
)

storiesOf('ButtonStrip', module)
    .addParameters({
        notes: {
            markdown,
        },
    })
    .addDecorator(Wrapper)
    .add('Default', () => (
        <ButtonStrip>
            <Button>Save</Button>
            <Button>Save</Button>
            <Button>Save</Button>
            <Button>Save</Button>
        </ButtonStrip>
    ))
    .add('Compact', () => (
        <ButtonStrip compact>
            <Button>Save</Button>
            <Button>Save</Button>
            <Button>Save</Button>
            <Button>Save</Button>
        </ButtonStrip>
    ))
    .add('Default - aligned right', () => (
        <ButtonStrip alignEnd>
            <Button>Save</Button>
            <Button>Save</Button>
            <Button>Save</Button>
            <Button>Save</Button>
        </ButtonStrip>
    ))
    .add('Compact - aligned right', () => (
        <ButtonStrip alignEnd compact>
            <Button>Save</Button>
            <Button>Save</Button>
            <Button>Save</Button>
            <Button>Save</Button>
        </ButtonStrip>
    ))
