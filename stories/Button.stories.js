import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button, Divider } from '../src'

storiesOf('Button', module)
    .add('Basic', () => (
        <>
            Default: <Button>Label me!</Button>
            <Divider />
            Small: <Button small>Label me!</Button>
            <Divider />
            Large: <Button large>Label me!</Button>
        </>
    ))

    .add('Primary', () => (
        <>
            Default: <Button primary>Label me!</Button>
            <Divider />
            Small:{' '}
            <Button primary small>
                Label me!
            </Button>
            <Divider />
            Large:{' '}
            <Button primary large>
                Label me!
            </Button>
        </>
    ))

    .add('Secondary', () => (
        <>
            Default: <Button secondary>Label me!</Button>
            <Divider />
            Small:{' '}
            <Button secondary small>
                Label me!
            </Button>
            <Divider />
            Large:{' '}
            <Button secondary large>
                Label me!
            </Button>
        </>
    ))

    .add('Destructive', () => (
        <>
            Default: <Button destructive>Label me!</Button>
            <Divider />
            Small:{' '}
            <Button destructive small>
                Label me!
            </Button>
            <Divider />
            Large:{' '}
            <Button destructive large>
                Label me!
            </Button>
        </>
    ))
