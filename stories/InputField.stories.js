import { storiesOf } from '@storybook/react'
import { resolve } from 'styled-jsx/css'
import React, { Fragment } from 'react'

import { InputField, Help } from '../src'
import { colors } from '../src/theme'

const logger = (name, value) => console.info(`${name}: ${value}`)

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

        .add('With default value', () => (
            <InputField
                {...props}
                defaultValue="This is set through the defaultValue prop, which means the component is uncontrolled."
            />
        ))

        .add('With value', () => (
            <InputField
                {...props}
                value="This is set through the value prop, which means the component is controlled."
            />
        ))

        .add('Status: Valid', () => (
            <InputField {...props} defaultValue="This value is valid" valid />
        ))

        .add('Status: Warning', () => (
            <InputField
                {...props}
                defaultValue="This value produces a warning"
                warning
            />
        ))

        .add('Status: Error', () => (
            <InputField
                {...props}
                defaultValue="This value produces an error"
                error
            />
        ))

        .add('Status: Loading', () => (
            <InputField
                {...props}
                defaultValue="This value produces a loading state"
                loading
            />
        ))

        .add('Disabled', () => (
            <InputField
                {...props}
                defaultValue="This field is disabled"
                disabled
            />
        ))

        .add('Dense', () => (
            <InputField {...props} defaultValue="This field is dense" dense />
        ))
}
