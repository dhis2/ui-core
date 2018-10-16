import React from 'react'
import Radio from 'core/Radio'

import { Text, Row, Col, Divider } from '../../../../helpers'

const group1 = [
    {
        label: 'Radio',
        group: 'radio-group-1',
        name: 'default-radio',
    },
    {
        label: 'Checked Radio',
        group: 'radio-group-1',
        name: 'checked-radio',
    },
    {
        label: 'Disabled Radio',
        group: 'radio-group-1',
        name: 'disabled-radio',
        disabled: true,
    },
]

const group2 = [
    {
        label: 'Valid Radio',
        group: 'radio-group-2',
        name: 'valid-radio',
        status: 'valid',
    },
    {
        label: 'Warning Radio',
        group: 'radio-group-2',
        name: 'warning-radio',
        status: 'warning',
    },
    {
        label: 'Error Radio',
        group: 'radio-group-2',
        name: 'error-radio',
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
        return this.setState({ selectedGroup1: target })
    }

    onChangeGroup2 = (target, value) => {
        console.log(`toggle ${target} to ${value}`)
        return this.setState({ selectedGroup2: target })
    }

    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <Text>Types</Text>
                        {group1.map(radio => {
                            const checked =
                                this.state.selectedGroup1 === radio.name
                            return (
                                <Radio
                                    checked={checked}
                                    label={radio.label}
                                    name={radio.name}
                                    group={radio.group}
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
                                this.state.selectedGroup2 === radio.name
                            return (
                                <Radio
                                    checked={checked}
                                    label={radio.label}
                                    name={radio.name}
                                    group={radio.group}
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
