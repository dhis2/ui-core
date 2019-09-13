import React from 'react'
import { storiesOf } from '@storybook/react'
import { Field, Input, Help } from '../src'

storiesOf('Field', module).add('Default', () => (
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
