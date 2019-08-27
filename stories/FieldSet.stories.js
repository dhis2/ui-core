import React from 'react'
import { storiesOf } from '@storybook/react'
import { Help, FormControl, FieldSet, Radio, Input } from '../src'

import markdown from './info/atoms/fieldSet.md'

const onChange = () => {
    console.log('Radio was clicked, nothing else will happen')
}

storiesOf('FieldSet', module)
    .addParameters({
        notes: {
            markdown,
        },
    })
    .add('Default - with Radios', () => (
        <>
            <FieldSet label="1. Choose something">
                <FormControl>
                    <Radio
                        onChange={onChange}
                        name="radio"
                        value="first"
                        label="First"
                    />
                </FormControl>
                <FormControl>
                    <Radio
                        onChange={onChange}
                        name="radio"
                        value="second"
                        label="Second"
                    />
                </FormControl>
                <FormControl>
                    <Radio
                        onChange={onChange}
                        name="radio"
                        value="third"
                        label="Third"
                        checked
                        error
                    />
                    <Help error>Help! There is a problem with this field</Help>
                </FormControl>
            </FieldSet>

            <FieldSet label="2. This set has two inputs">
                <FormControl>
                    <Input label="muh label" error value="Error val" />
                    <Help error>This input has an error</Help>
                </FormControl>

                <FormControl>
                    <Input label="muh other label" valid value="valid value!" />
                    <Help valid>This input does not have an error</Help>
                </FormControl>
            </FieldSet>

            <FieldSet>
                <FormControl>
                    <Input
                        label="This and the next field are in a set without a label"
                        value=""
                    />
                    <Help>This input is in a set but doesnt look like it!</Help>
                </FormControl>

                <FormControl>
                    <Input label="Second input in a set" value="value!" />
                    <Help>help two</Help>
                </FormControl>
            </FieldSet>
        </>
    ))
