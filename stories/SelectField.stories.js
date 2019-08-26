import React from 'react'
import { storiesOf } from '@storybook/react'
import { Select, Help } from '../src'

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

createStory('Select: Outlined', {
    name: 'Default',
    label: 'Default label',
    onChange: logger,
})

createStory('Select: Filled', {
    name: 'Default',
    label: 'Default label',
    onChange: logger,
    filled: true,
})

function createStory(name, props) {
    storiesOf(name, module)
        .add('No value', () => <Select {...props}>{options}</Select>)

        .add('With value', () => (
            <Select {...props} value="1">
                {options}
            </Select>
        ))

        .add('With Help text', () => (
            <>
                <Select {...props}>{options}</Select>
                <Help {...props}>A helpful text.</Help>
            </>
        ))

        .add('With valid status', () => (
            <Select {...props} value="1" valid>
                {options}
            </Select>
        ))

        .add('With warning status', () => (
            <Select {...props} value="1" warning>
                {options}
            </Select>
        ))

        .add('With error status', () => (
            <Select {...props} value="2" error>
                {options}
            </Select>
        ))

        .add('With loading status', () => (
            <Select {...props} value="1" loading>
                {options}
            </Select>
        ))

        .add('Disabled', () => (
            <Select {...props} disabled>
                {options}
            </Select>
        ))

        .add('Focus', () => (
            <Select {...props} initialFocus>
                {options}
            </Select>
        ))

        .add('Dense', () => (
            <Select {...props} dense>
                {options}
            </Select>
        ))

        .add('Required', () => (
            <Select {...props} required>
                {options}
            </Select>
        ))

        .add('With text too long to display it', () => (
            <Select {...props} value="2">
                {options}
            </Select>
        ))

        .add('With optgroups', () => (
            <Select {...props} value="4">
                <option value="0">Zero</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <optgroup label="Foobar">
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                </optgroup>
            </Select>
        ))
}
