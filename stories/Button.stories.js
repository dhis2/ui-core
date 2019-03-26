import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from '../src'

storiesOf('Button', module)
    .add('Basic', () => <Button kind="basic">Label me!</Button>, {
        notes: 'Yo!',
    })

    .add('Default with label prop', () => <Button label="Label me!" />)

    .add('Primary', () => <Button kind="primary">Label me!</Button>)

    .add('Secondary', () => <Button kind="secondary">Label me!</Button>)

    .add('Destructive', () => <Button kind="destructive">Label me!</Button>)
