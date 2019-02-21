import React from 'react'
import Radio from 'Radio'

import { Text, Row, Col, Divider } from '../../../../helpers'

const types = [
    {
        value: 'default-radio',
        label: 'Default',
    },
    {
        value: 'checked-radio',
        label: 'Checked',
    },
    {
        disabled: true,
        value: 'disabled-radio',
        label: 'Disabled Radio',
    },
]

const states = [
    {
        required: true,
        label: 'Valid',
        value: 'valid-radio',
        status: 'valid',
    },
    {
        required: true,
        label: 'Warning',
        value: 'warning-radio',
        status: 'warning',
    },
    {
        required: true,
        label: 'Error',
        value: 'error-radio',
        status: 'error',
    },
]

const wrapperStyle = {
    marginRight: 20,
    width: 150,
}

export class RadioDemo extends React.Component {
    static id = 'input-radio'

    state = {
        types: 'checked-radio',
        states: 'valid-radio',
    }

    onChange = (name, value) => {
        this.setState({ [name]: value })
        console.log(`onChange ${name} to ${value}`)
    }

    render() {
        return (
            <Col>
                <Text>Types</Text>
                <Row style={{ marginBottom: 20 }}>
                    {types.map(p => {
                        return (
                            <div key={`rbr-${p.value}`} style={wrapperStyle}>
                                <Radio
                                    {...p}
                                    name="types"
                                    checked={this.state.types === p.value}
                                    onChange={this.onChange}
                                />
                            </div>
                        )
                    })}
                </Row>

                <Text>States</Text>
                <Row style={{ marginBottom: 20 }}>
                    {states.map(p => {
                        return (
                            <div key={`rbr-${p.value}`} style={wrapperStyle}>
                                <Radio
                                    {...p}
                                    name="states"
                                    checked={this.state.states === p.value}
                                    onChange={this.onChange}
                                />
                            </div>
                        )
                    })}
                </Row>
                <Divider />
            </Col>
        )
    }
}
