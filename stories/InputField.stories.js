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

const createWrapperOutlined = override => () => (
    <InputFieldWrapper {...override} kind="outlined" />
)
const createWrapperOutlinedDense = override => () => (
    <InputFieldWrapper {...override} kind="outlined" size="dense" />
)
const createWrapperFilled = override => () => (
    <InputFieldWrapper {...override} kind="filled" />
)
const createWrapperFilledDense = override => () => (
    <InputFieldWrapper {...override} kind="filled" size="dense" />
)

createStory('InputField (Outlined)', createWrapperOutlined)
createStory('InputField (Outlined and dense)', createWrapperOutlinedDense)
createStory('InputField (Filled)', createWrapperFilled)
createStory('InputField (Filled and dense)', createWrapperFilledDense)

function createStory(name, wrapperCreator) {
    storiesOf(name, module)
        .add('No placeholder, no value', wrapperCreator(), { notes })

        .add(
            'Placeholder, no value',
            wrapperCreator({ placeholder: 'Hold the place' }),
            { notes }
        )

        .add('With value', wrapperCreator({ value: 'Input value' }), { notes })

        .add(
            'Status: Valid',
            wrapperCreator({ status: 'valid', value: 'This value is valid' }),
            { notes }
        )

        .add(
            'Status: Warning',
            wrapperCreator({
                status: 'warning',
                value: 'This value produces a warning',
            }),
            { notes }
        )

        .add(
            'Status: Error',
            wrapperCreator({
                status: 'error',
                value: 'This value produces a error',
            }),
            { notes }
        )

        .add(
            'Disabled',
            wrapperCreator({
                disabled: true,
                placeholder: 'This one is disabled',
            }),
            { notes }
        )
}
