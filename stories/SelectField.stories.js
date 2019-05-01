import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { SelectField, Help } from '../src'

const logger = (name, value) => console.info(`${name}: ${value}`)

const options = [
    { value: '0', label: 'This is a label' },
    { value: '1', label: 'While this is another one' },
    { value: '2', label: 'Beware the power of option 2' },
]

createStory('SelectField: Outlined', {
    name: 'Default',
    label: 'Default label',
    onChange: logger,
    list: options,
})

createStory('SelectField: Filled', {
    name: 'Default',
    label: 'Default label',
    onChange: logger,
    list: options,
    filled: true,
})

function createStory(name, props) {
    storiesOf(name, module)
        .add('No value', () => <SelectField {...props} />)

        .add('With default value', () => (
            <SelectField {...props} defaultValue="1" />
        ))

        .add('With value', () => <SelectField {...props} value="1" />)

        .add('With Help text', () => (
            <>
                <SelectField {...props} />
                <Help {...props}>A helpful text.</Help>
            </>
        ))

        .add('With valid status', () => (
            <SelectField {...props} defaultValue="1" valid />
        ))

        .add('With warning status', () => (
            <SelectField {...props} defaultValue="1" warning />
        ))

        .add('With error status', () => (
            <SelectField {...props} defaultValue="2" error />
        ))

        .add('With loading status', () => (
            <SelectField {...props} defaultValue="1" loading />
        ))

        .add('Disabled', () => <SelectField {...props} disabled />)

        .add('Dense', () => <SelectField {...props} dense />)

        .add('With text too long to display it', () => (
            <SelectField {...props} defaultValue="2" />
        ))

        .add('With optgroups', () => (
            <SelectField
                {...props}
                defaultValue="4"
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
