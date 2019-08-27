import React from 'react'
import { storiesOf } from '@storybook/react'
import { FormControl, Input, Help } from '../src'

import markdown from './info/atoms/formControl.md'

storiesOf('FormControl', module)
    .addParameters({
        notes: {
            markdown,
        },
    })
    .add('Default', () => (
        <>
            <FormControl>
                <Input
                    onChange={() => {
                        console.log('Nothing happens')
                    }}
                    name="input"
                    label="An input"
                />
                <Help>A helpful text</Help>
            </FormControl>
            <FormControl>
                <Input
                    onChange={() => {
                        console.log('Nothing happens')
                    }}
                    name="input2"
                    label="An second input"
                />
                <Help>A helpful text</Help>
            </FormControl>
        </>
    ))
