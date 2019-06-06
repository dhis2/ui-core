import React from 'react'
import { storiesOf } from '@storybook/react'
import { AlertBar, AlertStack } from '../src'

import markdown from './info/atoms/alertBar.md'

const actions = [{ label: 'sss', onClick: () => {} }]

storiesOf('AlertBar', module)
    .addParameters({
        notes: {
            markdown,
        },
    })
    .add('Default', () => (
        <AlertStack>
            <AlertBar critical>Test 3</AlertBar>
            <AlertBar warning actions={actions}>
                Test 1
            </AlertBar>
            <AlertBar success>Test 2</AlertBar>
        </AlertStack>
    ))
