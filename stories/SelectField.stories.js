import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { SelectField, Help } from '../src'

const logger = (name, value) => console.info(`${name}: ${value}`)

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

createStory('SelectField: Outlined', {
    name: 'Default',
    label: 'Default label',
    onChange: logger,
})

createStory('SelectField: Filled', {
    name: 'Default',
    label: 'Default label',
    onChange: logger,
    filled: true,
})

function createStory(name, props) {
    storiesOf(name, module)
        .add('No value', () => <SelectField {...props}>{options}</SelectField>)

        .add('With value', () => (
            <SelectField {...props} value="1">
                {options}
            </SelectField>
        ))

        .add('With Help text', () => (
            <>
                <SelectField {...props}>{options}</SelectField>
                <Help {...props}>A helpful text.</Help>
            </>
        ))

        .add('With valid status', () => (
            <SelectField {...props} value="1" valid>
                {options}
            </SelectField>
        ))

        .add('With warning status', () => (
            <SelectField {...props} value="1" warning>
                {options}
            </SelectField>
        ))

        .add('With error status', () => (
            <SelectField {...props} value="2" error>
                {options}
            </SelectField>
        ))

        .add('With loading status', () => (
            <SelectField {...props} value="1" loading>
                {options}
            </SelectField>
        ))

        .add('Disabled', () => (
            <SelectField {...props} disabled>
                {options}
            </SelectField>
        ))

        .add('Dense', () => (
            <SelectField {...props} dense>
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
