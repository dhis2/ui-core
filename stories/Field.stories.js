import React from 'react'
import { storiesOf } from '@storybook/react'
import { Field, Input, Help } from '../src'

import markdown from './info/atoms/formControl.md'

storiesOf('Field', module)
    .addParameters({
        notes: {
            markdown,
        },
    })
    .add('Default', () => (
        <>
            <Field>
                <Input
                    onChange={() => {
                        console.log('Nothing happens')
                    }}
                    name="input"
                    label="An input"
                />
                <Help>A helpful text</Help>
            </Field>
            <Field>
                <Input
                    onChange={() => {
                        console.log('Nothing happens')
                    }}
                    name="input2"
                    label="An second input"
                />
                <Help>A helpful text</Help>
            </Field>
        </>
    ))
