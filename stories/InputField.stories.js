import { storiesOf } from '@storybook/react'
import React from 'react'

import { Input, Help } from '../src'

const logger = ({ target }) => console.info(`${target.name}: ${target.value}`)

createStory('Input: Outlined', {
    label: 'Default label',
    name: 'Default',
    onChange: logger,
})

createStory('Input: Filled', {
    name: 'Default',
    label: 'Default label',
    onChange: logger,
    filled: true,
})

function createStory(name, props) {
    storiesOf(name, module)
        .add('No placeholder, no value', () => <Input {...props} />)

        .add('Placeholder, no value', () => (
            <Input {...props} placeholder="Hold the place" />
        ))

        .add('With Help text', () => (
            <>
                <Input {...props} placeholder="Hold the place" />
                <Help {...props}>A helpful text.</Help>
            </>
        ))

        .add('With value', () => (
            <Input
                {...props}
                value="This is set through the value prop, which means the component is controlled."
            />
        ))

        .add('Focus', () => <Input {...props} initialFocus />)

        .add('Status: Valid', () => (
            <Input {...props} value="This value is valid" valid />
        ))

        .add('Status: Warning', () => (
            <Input {...props} value="This value produces a warning" warning />
        ))

        .add('Status: Error', () => (
            <Input {...props} value="This value produces an error" error />
        ))

        .add('Status: Loading', () => (
            <Input
                {...props}
                value="This value produces a loading state"
                loading
            />
        ))

        .add('Disabled', () => (
            <Input {...props} value="This field is disabled" disabled />
        ))

        .add('Dense', () => (
            <Input {...props} value="This field is dense" dense />
        ))

        .add('Label too long', () => (
            <Input
                {...props}
                label="This label is too long in order to show on a single line of the input field. It should be cropped, not in an extra line. It should always be shorter than this!"
                dense
                warning
            />
        ))

        .add('Value too long', () => (
            <Input
                {...props}
                value="This value is too long in order to show on a single line of the input field. It should stay on one line, not in an extra line and which wouldn't look like a std input"
                dense
                warning
            />
        ))

        .add('Required', () => <Input {...props} required />)
}
