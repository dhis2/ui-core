import React from 'react'
import { storiesOf } from '@storybook/react'
import { Node } from '../../src/Node'

storiesOf('Node', module)
    .add('Open with onClose', () => (
        <Node
            open
            onClose={(...args) => window.onClose(...args)}
            component={<div>Component</div>}
        >
            Children
        </Node>
    ))
    .add('Closed with onOpen', () => (
        <Node
            onOpen={(...args) => window.onOpen(...args)}
            component={<div>Component</div>}
        >
            Children
        </Node>
    ))
