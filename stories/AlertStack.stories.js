import React from 'react'
import { storiesOf } from '@storybook/react'
import { AlertBar, AlertStack } from '../src'

import markdown from './info/atoms/alertStack.md'

storiesOf('AlertStack', module)
    .addParameters({
        notes: {
            markdown,
        },
    })
    .add('Default', () => (
        <AlertStack>
            <AlertBar permanent>
                First notification - I am at the bottom
            </AlertBar>
            <AlertBar permanent critical>
                Second notification
            </AlertBar>
            <AlertBar permanent warning>
                Third notification
            </AlertBar>
            <AlertBar permanent success>
                Fourth notification - I am at the top
            </AlertBar>
        </AlertStack>
    ))
