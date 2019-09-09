import React from 'react'
import { storiesOf } from '@storybook/react'
import { FieldSet, Radio, Help, Legend } from '../src'

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
    .add('Default', () => (
        <FieldSet>
            It renders something in a fieldset element without the browser
            styles
        </FieldSet>
    ))
    .add('Usage example - a radio button group with error status', () => (
        <FieldSet>
            <Legend required>Choose an option</Legend>
            <Radio
                onChange={onChange}
                name="radio"
                value="first"
                label="First"
                error
            />
            <Radio
                onChange={onChange}
                name="radio"
                value="second"
                label="Second"
                error
            />
            <Radio
                onChange={onChange}
                name="radio"
                value="third"
                label="Third"
                error
            />
            <Help error indent={false}>
                You really have to choose something!
            </Help>
        </FieldSet>
    ))
