import React from 'react'
import { storiesOf } from '@storybook/react'
import { AlertBar, AlertStack } from '../src'
import { Indeterminate } from '../src/icons/Checkbox'

import markdown from './info/atoms/alertBar.md'

const actions = [
    { label: 'Save', onClick: () => {} },
    { label: 'Cancel', onClick: () => {} },
]

storiesOf('AlertBar', module)
    .addParameters({
        notes: {
            markdown,
        },
    })
    .add('Default', () => (
        <AlertStack>
            <AlertBar>Test 1</AlertBar>
            <AlertBar critical>
                Test 3 very very very very very very very very very very very
                very very very very long text
            </AlertBar>
            <AlertBar warning actions={actions}>
                Test 3 very very very very very very very very very very very
                very very very very long text
            </AlertBar>
            <AlertBar success>Test 4</AlertBar>
            <AlertBar icon={<Indeterminate />}>Test 5</AlertBar>
        </AlertStack>
    ))
