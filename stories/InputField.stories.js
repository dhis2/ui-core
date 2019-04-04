import { storiesOf } from '@storybook/react'
import { resolve } from 'styled-jsx/css'
import React from 'react'

import { InputField } from '../src'
import notes from '../docs/InputField.md'
import { colors } from '../src/theme'

class InputFieldWrapper extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            [props.name]: props.value,
        }
    }

    onChange = (target, value) => {
        this.setState({ [target]: value })
    }

    render() {
        const { value, ...cProps } = this.props
        console.log(cProps)

        return (
            <InputField
                name={this.props.name}
                label="Default label"
                help="Default help text"
                value={this.state[this.props.name]}
                onChange={(name, v) => this.onChange(name, v)}
                {...cProps}
            />
        )
    }
}

InputFieldWrapper.defaultProps = {
    name: 'Default',
    value: '',
}

const OutlinedWrapper = props => (
    <InputFieldWrapper {...props} kind="outlined" />
)
const FilledWrapper = props => <InputFieldWrapper {...props} kind="filled" />

storiesOf('InputField: Outlined', module)
    .add('Default', () => <OutlinedWrapper kind="outlined" />, { notes })

    .add(
        'Placeholder',
        () => <OutlinedWrapper label="" placeholder="Hold the place" />,
        { notes }
    )

    .add('Dense, no value', () => <OutlinedWrapper size="dense" />, { notes })

    .add(
        'Dense, has value',
        () => <OutlinedWrapper size="dense" value="Input value" />,
        { notes }
    )

    .add(
        'Status: Valid',
        () => <OutlinedWrapper status="valid" value="This value is valid" />,
        { notes }
    )

    .add(
        'Status: Warning',
        () => (
            <OutlinedWrapper
                status="warning"
                value="This value produces a warning"
            />
        ),
        {
            notes,
        }
    )

    .add(
        'Status: Error',
        () => <OutlinedWrapper status="error" value="This value is wrong" />,
        { notes }
    )

    .add('Disabled', () => <OutlinedWrapper disabled={true} />, { notes })

storiesOf('InputField: Filled', module)
    .add('Default', () => <FilledWrapper />, { notes })

    .add('Placeholder', () => <FilledWrapper placeholder="Hold the place" />, {
        notes,
    })

    .add('Dense, no value', () => <FilledWrapper size="dense" />, { notes })

    .add(
        'Dense, has value',
        () => <FilledWrapper size="dense" value="Label value" />,
        { notes }
    )

    .add(
        'Status: Valid',
        () => <FilledWrapper status="valid" value="This is a valid value" />,
        { notes }
    )

    .add(
        'Status: Warning',
        () => (
            <FilledWrapper
                status="warning"
                value="This value produces a warning"
            />
        ),
        { notes }
    )

    .add(
        'Status: Error',
        () => <FilledWrapper status="error" value="This value is wrong" />,
        { notes }
    )

    .add('Disabled', () => <FilledWrapper disabled={true} />, { notes })
