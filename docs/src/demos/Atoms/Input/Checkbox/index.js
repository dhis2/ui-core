import React from 'react'
import Checkbox from 'Checkbox'

import { Text, Row, Col, Divider } from '../../../../helpers'

const types = [
    {
        name: 'default-checkbox',
        label: 'Default',
    },
    {
        checked: true,
        name: 'checked-checkbox',
        label: 'Checked',
    },
    {
        indeterminate: true,
        name: 'indeterminate-checkbox',
        label: 'Indeterminate',
    },
    {
        disabled: true,
        name: 'disabled-checkbox',
        label: 'Disabled',
    },
]

const states = [
    {
        required: true,
        name: 'required-checkbox',
        label: 'Required',
    },
    {
        required: true,
        name: 'valid-checkbox',
        label: 'Valid',
        status: 'valid',
    },
    {
        required: true,
        name: 'warning-checkbox',
        label: 'Warning',
        status: 'warning',
    },
    {
        required: true,
        name: 'error-checkbox',
        label: 'Error',
        status: 'error',
    },
]

const wrapperStyle = {
    marginRight: 20,
    width: 150,
}

export class CheckboxDemo extends React.Component {
    static id = 'input-checkbox'

    state = {
        'checked-checkbox': true,
        'valid-checkbox': true,
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
                    {types.map(p => (
                        <div key={`cbr-${p.name}`} style={wrapperStyle}>
                            <Checkbox
                                {...p}
                                checked={this.state[p.name] || false}
                                onChange={this.onChange}
                            />
                        </div>
                    ))}
                </Row>

                <Text>States</Text>
                <Row>
                    {states.map(p => (
                        <div key={`cbr-${p.name}`} style={wrapperStyle}>
                            <Checkbox
                                {...p}
                                checked={this.state[p.name] || false}
                                onChange={this.onChange}
                            />
                        </div>
                    ))}
                </Row>
                <Divider />
            </Col>
        )
    }
}
