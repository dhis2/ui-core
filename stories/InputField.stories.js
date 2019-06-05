import { storiesOf } from '@storybook/react'
import { resolve } from 'styled-jsx/css'
import React, { Fragment } from 'react'

import { InputField, Help } from '../src'
import { colors } from '../src/theme'

const logger = ({ target }) => console.info(`${target.name}: ${target.value}`)

createStory('InputField: Outlined', {
    label: 'Default label',
    name: 'Default',
    onChange: logger,
})

createStory('InputField: Filled', {
    name: 'Default',
    label: 'Default label',
    onChange: logger,
    filled: true,
})

function createStory(name, props) {
    storiesOf(name, module)
        .add('No placeholder, no value', () => <InputField {...props} />)

        .add('Placeholder, no value', () => (
            <InputField {...props} placeholder="Hold the place" />
        ))

        .add('With Help text', () => (
            <>
                <InputField {...props} placeholder="Hold the place" />
                <Help {...props}>A helpful text.</Help>
            </>
        ))

        .add('With value', () => (
            <InputField
                {...props}
                value="This is set through the value prop, which means the component is controlled."
            />
        ))

        .add('Focus', () => <InputField {...props} initialFocus />)

        .add('Status: Valid', () => (
            <InputField {...props} value="This value is valid" valid />
        ))

        .add('Status: Warning', () => (
            <InputField
                {...props}
                value="This value produces a warning"
                warning
            />
        ))

        .add('Status: Error', () => (
            <InputField {...props} value="This value produces an error" error />
        ))

        .add('Status: Loading', () => (
            <InputField
                {...props}
                value="This value produces a loading state"
                loading
            />
        ))

        .add('Disabled', () => (
            <InputField {...props} value="This field is disabled" disabled />
        ))

        .add('Dense', () => (
            <InputField {...props} value="This field is dense" dense />
        ))

        .add('Label too long', () => (
            <InputField
                {...props}
                label="This label is too long in order to show on a single line of the input field. It should be cropped, not in an extra line. It should always be shorter than this!"
                dense
                warning
            />
        ))

        .add('Value too long', () => (
            <InputField
                {...props}
                value="This value is too long in order to show on a single line of the input field. It should stay on one line, not in an extra line and which wouldn't look like a std input"
                dense
                warning
            />
        ))

        .add('Required', () => <InputField {...props} required />)
}
