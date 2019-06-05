import React from 'react'
import { storiesOf } from '@storybook/react'
import { AlertBar, AlertStack } from '../src'

import markdown from './info/atoms/alertBar.md'

storiesOf('AlertBar', module)
    .addParameters({
        notes: {
            markdown,
        },
    })
    .add('Default', () => (
        <AlertStack>
            <AlertBar>Test 1</AlertBar>
            <AlertBar>Test 2</AlertBar>
            <AlertBar>Test 3</AlertBar>
        </AlertStack>
    ))
