import React from 'react'
import { storiesOf } from '@storybook/react'
import { FormControl, InputField, Help } from '../src'

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
                <InputField
                    onChange={() => {
                        console.log('Nothing happens')
                    }}
                    name="input"
                    label="An input"
                />
                <Help>A helpful text</Help>
            </FormControl>
            <FormControl>
                <InputField
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
