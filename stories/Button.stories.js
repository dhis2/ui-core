import React from 'react'
import JSXStyle from 'styled-jsx/style'

import { withInfo } from '@storybook/addon-info'
import { storiesOf, addDecorator, addParameters } from '@storybook/react'

import { Button, CssReset } from '../src'

const logger = ({ target }) => console.info(`${target.name}: ${target.value}`)
addDecorator(withInfo)
addParameters({ options: { showPanel: false } })

createStory('Button: Basic', {
    onClick: logger,
    name: 'Button',
    value: 'default',
})

createStory('Button: Primary', {
    onClick: logger,
    name: 'Button',
    value: 'default',
    primary: true,
})

createStory('Button: Secondary', {
    onClick: logger,
    name: 'Button',
    value: 'default',
    secondary: true,
})

createStory('Button: Destructive', {
    onClick: logger,
    name: 'Button',
    value: 'default',
    destructive: true,
})

function createStory(name, props) {
    storiesOf(name, module)
        .add(
            'Default',
            function ButtonStory() {
                return <Button {...props}>Label me!</Button>
            },
            {
                info: {
                    inline: true,
                    header: false,
                    source: false,
                    text: `
                        ## Default button

                        Some text
                    `,
                    propTablesExclude: [
                        CssReset,
                        JSXStyle,
                        function Unknown() {},
                    ],
                },
            }
        )

        .add('Disabled', () => (
            <Button {...props} disabled>
                Label me!
            </Button>
        ))

        .add('Small', () => (
            <Button {...props} small>
                Label me!
            </Button>
        ))

        .add('Large', () => (
            <Button {...props} large>
                Label me!
            </Button>
        ))

        .add('Focus', () => (
            <Button {...props} initialFocus>
                Label me!
            </Button>
        ))
}
