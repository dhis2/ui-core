import { storiesOf } from '@storybook/react'
import { resolve } from 'styled-jsx/css'
import React, { Fragment } from 'react'

import { InputField, Help } from '../src'
import { colors } from '../src/theme'

const logger = (name, value) => console.info(`${name}: ${value}`)

createStory('InputField (Outlined)', InputField, {
    label: 'Default label',
    name: 'Default',
    onChange: logger,
})

createStory('InputField (Outlined and dense)', InputField, {
    name: 'Default',
    label: 'Default label',
    onChange: logger,
    dense: true,
})

createStory('InputField (Filled)', InputField, {
    name: 'Default',
    onChange: logger,
    filled: true,
})

createStory('InputField (Filled and dense)', InputField, {
    name: 'Default',
    label: 'Default label',
    onChange: logger,
    filled: true,
    dense: true,
})

function createStory(name, Component, props) {
    storiesOf(name, module)
        .add('No placeholder, no value', () => <Component {...props} />)

        .add('Placeholder, no value', () => (
            <Component {...props} placeholder="Hold the place" />
        ))

        .add('With Help text', () => (
            <>
                <Component {...props} placeholder="Hold the place" />
                <Help {...props}>A helpful text.</Help>
            </>
        ))

        .add('With default value', () => (
            <Component {...props} defaultValue="A default value" />
        ))

        .add('Status: Valid', () => (
            <Component {...props} value="This value is valid" valid />
        ))

        .add('Status: Warning', () => (
            <Component
                {...props}
                value="This value produces a warning"
                warning
            />
        ))

        .add('Status: Error', () => (
            <Component {...props} value="This value produces an error" error />
        ))

        .add('Status: Loading', () => (
            <Component
                {...props}
                value="This value produces a loading state"
                loading
            />
        ))

        .add('Disabled', () => (
            <Component {...props} value="This field is disabled" disabled />
        ))
}
