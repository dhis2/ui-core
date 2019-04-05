import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import { SelectField } from '../src'

const noop = () => undefined
const options = [
    { value: '0', label: 'This is a label' },
    { value: '1', label: 'While this is another one' },
    { value: '2', label: 'Beware the power of option 2' },
]

class Wrapper extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: this.props.value,
        }
    }

    onChange = (name, value) => {
        console.log('onChange', name, value)
        this.setState({ value })
    }

    render() {
        const { value, ...props } = this.props

        return (
            <div style={{ width: '200px' }}>
                <SelectField
                    name="select-field"
                    value={this.state.value}
                    label="Label text"
                    onChange={this.onChange}
                    list={options}
                    {...props}
                />
            </div>
        )
    }
}

const createSelectField = override => <Wrapper {...override} />

storiesOf('SelectField', module)
    .add('With no options', () =>
        createSelectField({
            label: 'Without value',
        })
    )
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
            value: '1',
            list: options,
            status: 'warning',
        })
    )
    .add('With error', () =>
        createSelectField({
            value: '2',
            list: options,
            status: 'error',
        })
    )
    .add('With valid status: Outlines', () =>
        createSelectField({
            value: '0',
            list: options,
            status: 'valid',
            kind: 'outlined',
        })
    )
    .add('With warning: Outlines', () =>
        createSelectField({
            value: '0',
            list: options,
            status: 'warning',
            kind: 'outlined',
        })
    )
    .add('With error: Outlines', () =>
        createSelectField({
            value: '0',
            list: options,
            status: 'error',
            kind: 'outlined',
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
