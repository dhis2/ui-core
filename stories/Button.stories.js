import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button, Divider } from '../src'

import markdown from './info/atoms/button.md'

const logger = (name, value) => console.info(`${name}: ${value}`)

storiesOf('Button', module)
    .addParameters({
        notes: {
            markdown,
        },
    })
    .add('Basic', () => (
        <>
            Default:{' '}
            <Button onClick={logger} name="default" value="default">
                Label me!
            </Button>
            <Divider />
            Small:{' '}
            <Button small onClick={logger} name="default" value="small">
                Label me!
            </Button>
            <Divider />
            Large:{' '}
            <Button large onClick={logger} name="default" value="large">
                Label me!
            </Button>
        </>
    ))

    .add('Basic: Disabled', () => (
        <>
            Default: <Button disabled>Label me!</Button>
            <Divider />
            Small:{' '}
            <Button small disabled>
                Label me!
            </Button>
            <Divider />
            Large:{' '}
            <Button large disabled>
                Label me!
            </Button>
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

    .add('Primary: Disabled', () => (
        <>
            Default:{' '}
            <Button primary disabled>
                Label me!
            </Button>
            <Divider />
            Small:{' '}
            <Button primary small disabled>
                Label me!
            </Button>
            <Divider />
            Large:{' '}
            <Button primary large disabled>
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

    .add('Secondary: Disabled', () => (
        <>
            Default:{' '}
            <Button secondary disabled>
                Label me!
            </Button>
            <Divider />
            Small:{' '}
            <Button secondary small disabled>
                Label me!
            </Button>
            <Divider />
            Large:{' '}
            <Button secondary large disabled>
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

    .add('Destructive: Disabled', () => (
        <>
            Default:{' '}
            <Button destructive disabled>
                Label me!
            </Button>
            <Divider />
            Small:{' '}
            <Button destructive small disabled>
                Label me!
            </Button>
            <Divider />
            Large:{' '}
            <Button destructive large disabled>
                Label me!
            </Button>
        </>
    ))
