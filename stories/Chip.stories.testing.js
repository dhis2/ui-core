import React from 'react'
import { storiesOf } from '@storybook/react'
import { Chip } from '../src'

const onClick = (...args) => window.onClick(...args)
const onRemove = (...args) => window.onRemove(...args)

storiesOf('Chip', module)
    .add('Onclick', () => <Chip onClick={onClick}>Chippy</Chip>)
    .add('Onremove', () => (
        <Chip onClick={onClick} onRemove={onRemove}>
            Chipmunk
        </Chip>
    ))
