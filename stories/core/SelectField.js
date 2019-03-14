import React from 'react'
import { storiesOf } from '@storybook/react'
import { SelectField } from '../../src/core/SelectField'

const noop = () => undefined
const options = [
    { value: '0', label: 'This is a label' },
    { value: '1', label: 'While this is another one' },
    { value: '2', label: 'Beware the power of option 2' },
]

storiesOf('SelectField', module)
    .add('With no options', () => (
        <SelectField
            name="without-options"
            label="Without options"
            onChange={noop}
            list={[]}
        />
    ))
    .add('With options', () => (
        <SelectField
            name="with-options"
            label="With options"
            onChange={noop}
            list={options}
        />
    ))
    .add('With value', () => (
        <SelectField
            name="with-options"
            label="With options"
            onChange={noop}
            value="0"
            list={options}
        />
    ))
    .add('With help', () => (
        <SelectField
            name="with-options"
            label="With options"
            onChange={noop}
            value="0"
            list={options}
            help="This is a help text"
        />
    ))
    .add('With dense size', () => (
        <SelectField
            name="with-options"
            label="With options"
            onChange={noop}
            value="0"
            list={options}
            size="dense"
        />
    ))
    .add('With valid status', () => (
        <SelectField
            name="with-options"
            label="With options"
            onChange={noop}
            value="0"
            list={options}
            status="valid"
        />
    ))
    .add('With warning', () => (
        <SelectField
            name="with-options"
            label="With options"
            onChange={noop}
            value="0"
            list={options}
            status="warning"
        />
    ))
    .add('With error', () => (
        <SelectField
            name="with-options"
            label="With options"
            onChange={noop}
            value="0"
            list={options}
            status="error"
        />
    ))
    .add('Disabled', () => (
        <SelectField
            name="with-options"
            label="With options"
            onChange={noop}
            value="0"
            list={options}
            disabled={true}
        />
    ))
    .add('With text too long to display it', () => (
        <div style={{ width: '200px' }}>
            <SelectField
                name="with-options"
                label="With options"
                onChange={noop}
                value="2"
                list={options}
                disabled={true}
            />
        </div>
    ))
