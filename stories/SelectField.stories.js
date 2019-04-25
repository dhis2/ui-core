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
            value: this.props.value || '',
        }
    }

    onChange = (name, value) => {
        this.setState({ value })
    }

    render() {
        const { value, ...props } = this.props

        return (
            <SelectField
                name="select-field"
                value={this.state.value}
                label="Label text"
                onChange={this.onChange}
                list={options}
                help="This is a help text"
                {...props}
            />
        )
    }
}

const createSelectFieldFilled = override => (
    <Wrapper {...override} kind="filled" />
)
const createSelectFieldFilledDense = override => (
    <Wrapper {...override} kind="filled" size="dense" />
)
const createSelectFieldOutlined = override => (
    <Wrapper {...override} kind="outlined" />
)
const createSelectFieldOutlinedDense = override => (
    <Wrapper {...override} kind="outlined" size="dense" />
)

createStory('SelectField (Outlined)', createSelectFieldOutlined)
createStory('SelectField (Outlined, Dense)', createSelectFieldOutlinedDense)
createStory('SelectField (Filled)', createSelectFieldFilled)
createStory('SelectField (Filled, Dense)', createSelectFieldFilledDense)

function createStory(name, wrapperCreator) {
    storiesOf(name, module)
        .add('No initial value', () => wrapperCreator())

        .add('With initial value', () =>
            wrapperCreator({
                value: '1',
            })
        )

        .add('With valid status', () =>
            wrapperCreator({
                value: '0',
                list: options,
                status: 'valid',
            })
        )

        .add('With warning status', () =>
            wrapperCreator({
                value: '1',
                list: options,
                status: 'warning',
            })
        )

        .add('With error status', () =>
            wrapperCreator({
                value: '2',
                list: options,
                status: 'error',
            })
        )

        .add('With loading status', () =>
            wrapperCreator({
                value: '2',
                list: options,
                status: 'loading',
            })
        )

        .add('Disabled', () =>
            wrapperCreator({
                disabled: true,
            })
        )

        .add('With text too long to display it', () =>
            wrapperCreator({
                value: '2',
                list: options,
            })
        )

        .add('With optgroups', () =>
            wrapperCreator({
                value: '4',
                list: [
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
                ],
            })
        )
}
