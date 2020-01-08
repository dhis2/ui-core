import React from 'react'
import { storiesOf } from '@storybook/react'
import { Node } from '../src/Node'

const onOpen = (...args) => window.onOpen(...args)
const onClose = (...args) => window.onClose(...args)

storiesOf('Node', module)
    .add('Open', () => (
        <Node open onClose={onClose} component={'Label'}>
            Children
        </Node>
    ))
    .add('Closed', () => (
        <Node onOpen={onOpen} component={'Label'}>
            Children
        </Node>
    ))
