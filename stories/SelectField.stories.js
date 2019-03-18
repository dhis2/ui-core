import React from 'react'
import { storiesOf } from '@storybook/react'
import { SelectField } from '../src'

const noop = () => undefined
const options = [
    { value: '0', label: 'This is a label' },
    { value: '1', label: 'While this is another one' },
    { value: '2', label: 'Beware the power of option 2' },
]

const createSelectField = override => (
    <div style={{ width: '200px' }}>
        <SelectField
            name="without-options"
            label="Without options"
            onChange={noop}
            list={[]}
            {...override}
        />
    </div>
)

storiesOf('SelectField', module)
    .add('With no options', () => createSelectField())
    .add('With options', () =>
        createSelectField({
            list: options,
        })
    )
    .add('With value', () =>
        createSelectField({
            value: '0',
            list: options,
        })
    )
    .add('With help text', () =>
        createSelectField({
            value: '0',
            list: options,
            help: 'This is a help text',
        })
    )
    .add('With size dense', () =>
        createSelectField({
            value: '0',
            list: options,
            size: 'dense',
        })
    )
    .add('With valid status', () =>
        createSelectField({
            value: '0',
            list: options,
            status: 'valid',
        })
    )
    .add('With warning', () =>
        createSelectField({
            value: '0',
            list: options,
            status: 'warning',
        })
    )
    .add('With error', () =>
        createSelectField({
            value: '0',
            list: options,
            status: 'error',
        })
    )
    .add('With disable true', () =>
        createSelectField({
            value: '0',
            list: options,
            disabled: true,
        })
    )
    .add('With text too long to display it', () =>
        createSelectField({
            value: '2',
            list: options,
        })
    )
