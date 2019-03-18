import React from 'react'
import { storiesOf } from '@storybook/react'
import { InputField } from '../src'

class InputFieldWrapper extends React.Component {
    state = {}

    onChange = (target, value) => this.setState({ [target]: value })

    render() {
        return (
            <InputField
                value={this.state[this.props.name]}
                onChange={(name, v) => this.onChange(name, v)}
                {...this.props}
            />
        )
    }
}

storiesOf('InputField: Outlined', module)
    .add('Default', () => (
        <InputFieldWrapper
            name="Default"
            label="Default label"
            kind="outlined"
            help="Default help text"
        />
    ))

    .add('Placeholder', () => (
        <InputFieldWrapper
            name="Default"
            label="Default label"
            placeholder="Hold the place"
            kind="outlined"
            help="Default help text"
        />
    ))

    .add('Dense', () => (
        <InputFieldWrapper
            name="Default"
            label="Default label"
            kind="outlined"
            help="Default help text"
            size="dense"
        />
    ))

    .add('Status: Valid', () => (
        <InputFieldWrapper
            name="Default"
            label="Default label"
            kind="outlined"
            status="valid"
            help="Default help text"
        />
    ))

    .add('Status: Warning', () => (
        <InputFieldWrapper
            name="Default"
            label="Default label"
            kind="outlined"
            status="warning"
            help="Default help text"
        />
    ))

    .add('Status: Error', () => (
        <InputFieldWrapper
            name="Default"
            label="Default label"
            kind="outlined"
            status="error"
            help="Default help text"
        />
    ))

storiesOf('InputField: Filled', module)
    .add('Default', () => (
        <InputFieldWrapper
            name="Default"
            label="Default label"
            kind="filled"
            help="Default help text"
        />
    ))

    .add('Placeholder', () => (
        <InputFieldWrapper
            name="Default"
            label="Default label"
            placeholder="Hold the place"
            kind="filled"
            help="Default help text"
        />
    ))

    .add('Dense', () => (
        <InputFieldWrapper
            name="Default"
            label="Default label"
            kind="filled"
            help="Default help text"
            size="dense"
        />
    ))

    .add('Status: Valid', () => (
        <InputFieldWrapper
            name="Default"
            label="Default label"
            kind="filled"
            status="valid"
            help="Default help text"
        />
    ))

    .add('Status: Warning', () => (
        <InputFieldWrapper
            name="Default"
            label="Default label"
            kind="filled"
            status="warning"
            help="Default help text"
        />
    ))

    .add('Status: Error', () => (
        <InputFieldWrapper
            name="Default"
            label="Default label"
            kind="filled"
            status="error"
            help="Default help text"
        />
    ))
