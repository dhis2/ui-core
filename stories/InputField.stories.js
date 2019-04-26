import { storiesOf } from '@storybook/react'
import { resolve } from 'styled-jsx/css'
import React, { Fragment } from 'react'

import { InputField, Help } from '../src'
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
            <>
                <InputField
                    name={this.props.name}
                    label="Default label"
                    help="Default help text"
                    value={this.state[this.props.name]}
                    onChange={(name, v) => this.onChange(name, v)}
                    {...cProps}
                />
                <Help {...cProps}>Default help text</Help>
            </>
        )
    }
}

InputFieldWrapper.defaultProps = {
    name: 'Default',
    value: '',
}

const createWrapperOutlined = override => () => (
    <InputFieldWrapper {...override} />
)
const createWrapperOutlinedDense = override => () => (
    <InputFieldWrapper {...override} dense />
)
const createWrapperFilled = override => () => (
    <InputFieldWrapper {...override} filled />
)
const createWrapperFilledDense = override => () => (
    <InputFieldWrapper {...override} filled dense />
)

createStory('InputField (Outlined)', createWrapperOutlined)
createStory('InputField (Outlined and dense)', createWrapperOutlinedDense)
createStory('InputField (Filled)', createWrapperFilled)
createStory('InputField (Filled and dense)', createWrapperFilledDense)

function createStory(name, wrapperCreator) {
    storiesOf(name, module)
        .add('No placeholder, no value', wrapperCreator())

        .add(
            'Placeholder, no value',
            wrapperCreator({ placeholder: 'Hold the place' })
        )

        .add('With value', wrapperCreator({ value: 'Input value' }))

        .add(
            'Status: Valid',
            wrapperCreator({ valid: true, value: 'This value is valid' })
        )

        .add(
            'Status: Warning',
            wrapperCreator({
                warning: true,
                value: 'This value produces a warning',
            })
        )

        .add(
            'Status: Error',
            wrapperCreator({
                error: true,
                value: 'This value produces a error',
            })
        )

        .add(
            'Status: Loading',
            wrapperCreator({
                loading: true,
                value: 'This value produces a loading state',
            })
        )

        .add(
            'Disabled',
            wrapperCreator({
                disabled: true,
                placeholder: 'This one is disabled',
            })
        )
}
