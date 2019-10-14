import React from 'react'
import { storiesOf } from '@storybook/react'
import { SelectField } from '../src'

const logger = ({ target }) =>
    console.info(`${target.name}: ${target.value}`, target)

const options = [
    <option value="0" key="0">
        This is a label
    </option>,
    <option value="1" key="1">
        While this is another one
    </option>,
    <option value="2" key="2">
        Beware the power of option 2
    </option>,
]

createStory('SelectField', {
    name: 'Default',
    label: 'Default label',
    onChange: logger,
}).add('No label', () => <SelectField name="Default" onChange={logger} />)

function createStory(name, props) {
    return storiesOf(name, module)
        .add('No value', () => <SelectField {...props}>{options}</SelectField>)

        .add('With value', () => (
            <SelectField {...props} value="1">
                {options}
            </SelectField>
        ))

        .add('With Help text', () => (
            <SelectField {...props} helpText="A helpful text.">
                {options}
            </SelectField>
        ))

        .add('With valid status', () => (
            <SelectField
                {...props}
                helpText="A helpful text."
                validationText="Totally valid"
                value="1"
                status="valid"
            >
                {options}
            </SelectField>
        ))

        .add('With warning status', () => (
            <SelectField
                {...props}
                helpText="A helpful text."
                validationText="Hm, not quite, I warn thee!"
                value="1"
                status="warning"
            >
                {options}
            </SelectField>
        ))

        .add('With error status', () => (
            <SelectField
                {...props}
                helpText="A helpful text."
                validationText="NO! TOTALLY WRONG!"
                value="2"
                status="error"
            >
                {options}
            </SelectField>
        ))

        .add('With loading status', () => (
            <SelectField {...props} value="1" status="loading">
                {options}
            </SelectField>
        ))

        .add('Disabled', () => (
            <SelectField {...props} disabled>
                {options}
            </SelectField>
        ))

        .add('Focus', () => (
            <SelectField {...props} initialFocus>
                {options}
            </SelectField>
        ))

        .add('Dense', () => (
            <SelectField {...props} dense>
                {options}
            </SelectField>
        ))

        .add('Required', () => (
            <SelectField {...props} required>
                {options}
            </SelectField>
        ))

        .add('With text too long to display it', () => (
            <SelectField {...props} value="2">
                {options}
            </SelectField>
        ))

        .add('With optgroups', () => (
            <SelectField {...props} value="4">
                <option value="0">Zero</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <optgroup label="Foobar">
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                </optgroup>
            </SelectField>
        ))
}
