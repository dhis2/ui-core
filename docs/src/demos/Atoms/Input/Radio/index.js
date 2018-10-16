import React from 'react'
import Radio from 'core/Radio'

import { Text, Row, Col, Divider } from '../../../../helpers'

const group1 = [
    {
        label: 'Radio',
        name: 'radio-group-1',
        value: 'default-radio',
    },
    {
        label: 'Checked Radio',
        name: 'radio-group-1',
        value: 'checked-radio',
    },
    {
        label: 'Disabled Radio',
        name: 'radio-group-1',
        value: 'disabled-radio',
        disabled: true,
    },
]

const group2 = [
    {
        label: 'Valid Radio',
        name: 'radio-group-2',
        value: 'valid-radio',
        status: 'valid',
    },
    {
        label: 'Warning Radio',
        name: 'radio-group-2',
        value: 'warning-radio',
        status: 'warning',
    },
    {
        label: 'Error Radio',
        name: 'radio-group-2',
        value: 'error-radio',
        status: 'error',
    },
]

export class RadioDemo extends React.Component {
    static id = 'input-radio'

    state = {
        selectedGroup1: 'checked-radio',
    }

    onChangeGroup1 = (target, value) => {
        console.log(`toggle ${target} to ${value}`)
        return this.setState({ selectedGroup1: value })
    }

    onChangeGroup2 = (target, value) => {
        console.log(`toggle ${target} to ${value}`)
        return this.setState({ selectedGroup2: value })
    }

    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <Text>Types</Text>
                        {group1.map(radio => {
                            const checked =
                                this.state.selectedGroup1 === radio.value
                            return (
                                <Radio
                                    key={radio.value}
                                    checked={checked}
                                    label={radio.label}
                                    name={radio.name}
                                    value={radio.value}
                                    disabled={radio.disabled}
                                    onChange={(name, v) =>
                                        this.onChangeGroup1(name, v)
                                    }
                                />
                            )
                        })}
                    </Col>
                    <Col>
                        <Text>States</Text>
                        {group2.map(radio => {
                            const checked =
                                this.state.selectedGroup2 === radio.value
                            return (
                                <Radio
                                    key={radio.value}
                                    checked={checked}
                                    label={radio.label}
                                    name={radio.name}
                                    value={radio.value}
                                    disabled={radio.disabled}
                                    status={radio.status}
                                    onChange={(name, v) =>
                                        this.onChangeGroup2(name, v)
                                    }
                                />
                            )
                        })}
                    </Col>
                </Row>
                <Divider />
            </div>
        )
    }
}
