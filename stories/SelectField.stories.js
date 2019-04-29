import React, { Component, Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { SelectField, Help } from '../src'

const logger = (name, value) => console.info(`${name}: ${value}`)

const options = [
    { value: '0', label: 'This is a label' },
    { value: '1', label: 'While this is another one' },
    { value: '2', label: 'Beware the power of option 2' },
]

createStory('SelectField (Outlined)', SelectField, {
    name: 'Default',
    label: 'Default label',
    onChange: logger,
    list: options,
})

createStory('SelectField (Outlined and dense)', SelectField, {
    name: 'Default',
    label: 'Default label',
    onChange: logger,
    list: options,
    dense: true,
})

createStory('SelectField (Filled)', SelectField, {
    name: 'Default',
    label: 'Default label',
    onChange: logger,
    list: options,
    filled: true,
})

createStory('SelectField (Filled and dense)', SelectField, {
    name: 'Default',
    label: 'Default label',
    onChange: logger,
    list: options,
    filled: true,
    dense: true,
})

function createStory(name, Component, props) {
    storiesOf(name, module)
        .add('No value', () => <Component {...props} />)

        .add('With default value', () => (
            <Component {...props} defaultValue="1" />
        ))

        .add('With Help text', () => (
            <>
                <Component {...props} />
                <Help {...props}>A helpful text.</Help>
            </>
        ))

        .add('With valid status', () => (
            <Component {...props} value="1" valid />
        ))

        .add('With warning status', () => (
            <Component {...props} value="1" warning />
        ))

        .add('With error status', () => (
            <Component {...props} value="2" error />
        ))

        .add('With loading status', () => (
            <Component {...props} value="1" loading />
        ))

        .add('Disabled', () => <Component {...props} disabled />)

        .add('With text too long to display it', () => (
            <Component {...props} value="2" />
        ))

        .add('With optgroups', () => (
            <Component
                {...props}
                value="4"
                list={[
                    { value: '0', label: 'This is a label' },
                    { value: '1', label: 'While this is another one' },
                    {
                        value: '2',
                        label: 'Beware the power of option 2',
                        list: [
                            { value: '3', label: 'Group option No 1' },
                            { value: '4', label: 'Group option No 2' },
                        ],
                    },
                    { value: '5', label: 'Beware the power of option 2' },
                ]}
            />
        ))
}
