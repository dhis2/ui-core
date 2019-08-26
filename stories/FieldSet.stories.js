import React from 'react'
import { storiesOf } from '@storybook/react'
import { FieldSet, Radio, Switch, Checkbox } from '../src'

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
        <FieldSet label="Choose something">
            <Radio
                onChange={onChange}
                name="radio"
                value="first"
                label="First"
            />
            <Radio
                onChange={onChange}
                name="radio"
                value="second"
                label="Second"
                checked
            />
            <Radio
                onChange={onChange}
                name="radio"
                value="third"
                label="Third"
            />
        </FieldSet>
    ))
    .add('Default - with Switches', () => (
        <FieldSet label="Choose something">
            <Switch
                onChange={onChange}
                name="switch"
                value="first"
                label="First"
            />
            <Switch
                onChange={onChange}
                name="switch"
                value="second"
                label="Second"
                checked
            />
            <Switch
                onChange={onChange}
                name="switch"
                value="third"
                label="Third"
            />
        </FieldSet>
    ))
    .add('Default - with Checkboxes', () => (
        <FieldSet label="Choose something">
            <Checkbox
                onChange={onChange}
                name="checkbox"
                value="first"
                label="First"
            />
            <Checkbox
                onChange={onChange}
                name="checkbox"
                value="second"
                label="Second"
                checked
            />
            <Checkbox
                onChange={onChange}
                name="checkbox"
                value="third"
                label="Third"
            />
        </FieldSet>
    ))
    .add('Stacked - with Radios', () => (
        <FieldSet stacked label="Choose something">
            <Radio
                onChange={onChange}
                name="radio"
                value="first"
                label="First"
            />
            <Radio
                onChange={onChange}
                name="radio"
                value="second"
                label="Second"
                checked
            />
            <Radio
                onChange={onChange}
                name="radio"
                value="third"
                label="Third"
            />
        </FieldSet>
    ))
    .add('Stacked - with Switches', () => (
        <FieldSet stacked label="Choose something">
            <Switch
                onChange={onChange}
                name="switch"
                value="first"
                label="First"
            />
            <Switch
                onChange={onChange}
                name="switch"
                value="second"
                label="Second"
                checked
            />
            <Switch
                onChange={onChange}
                name="switch"
                value="third"
                label="Third"
            />
        </FieldSet>
    ))
    .add('Stacked - with Checkboxes', () => (
        <FieldSet stacked label="Choose something">
            <Checkbox
                onChange={onChange}
                name="checkbox"
                value="first"
                label="First"
            />
            <Checkbox
                onChange={onChange}
                name="checkbox"
                value="second"
                label="Second"
                checked
            />
            <Checkbox
                onChange={onChange}
                name="checkbox"
                value="third"
                label="Third"
            />
        </FieldSet>
    ))
    .add('Required', () => (
        <FieldSet label="Choose something" required>
            <Radio
                onChange={onChange}
                name="radio"
                value="first"
                label="First"
            />
            <Radio
                onChange={onChange}
                name="radio"
                value="second"
                label="Second"
                checked
            />
            <Radio
                onChange={onChange}
                name="radio"
                value="third"
                label="Third"
            />
        </FieldSet>
    ))
    .add('Statuses', () => (
        <>
            <FieldSet label="Choose something - default">
                <Radio
                    onChange={onChange}
                    name="radio"
                    value="first"
                    label="First"
                />
                <Radio
                    onChange={onChange}
                    name="radio"
                    value="second"
                    label="Second"
                    checked
                />
                <Radio
                    onChange={onChange}
                    name="radio"
                    value="third"
                    label="Third"
                />
            </FieldSet>
            <br />
            <FieldSet label="Choose something - valid" valid>
                <Radio
                    onChange={onChange}
                    name="radio"
                    value="first"
                    label="First"
                />
                <Radio
                    onChange={onChange}
                    name="radio"
                    value="second"
                    label="Second"
                    checked
                />
                <Radio
                    onChange={onChange}
                    name="radio"
                    value="third"
                    label="Third"
                />
            </FieldSet>
            <br />
            <FieldSet label="Choose something - warning" warning>
                <Radio
                    onChange={onChange}
                    name="radio"
                    value="first"
                    label="First"
                />
                <Radio
                    onChange={onChange}
                    name="radio"
                    value="second"
                    label="Second"
                    checked
                />
                <Radio
                    onChange={onChange}
                    name="radio"
                    value="third"
                    label="Third"
                />
            </FieldSet>
            <br />
            <FieldSet label="Choose something - error" error>
                <Radio
                    onChange={onChange}
                    name="radio"
                    value="first"
                    label="First"
                />
                <Radio
                    onChange={onChange}
                    name="radio"
                    value="second"
                    label="Second"
                    checked
                />
                <Radio
                    onChange={onChange}
                    name="radio"
                    value="third"
                    label="Third"
                />
            </FieldSet>
        </>
    ))
