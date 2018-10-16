import React from 'react'
import Checkbox from 'core/Checkbox'

import { Text, Row, Col, Divider } from '../../../../helpers'

export class CheckboxDemo extends React.Component {
    static id = 'input-checkbox'

    onChange = (target, value) => console.log(`toggle ${target} to ${value}`)

    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <Text>Types</Text>
                        <Checkbox
                            label="Checkbox"
                            name="default-checkbox"
                            onChange={(name, v) => this.onChange(name, v)}
                        />
                        <Checkbox
                            checked
                            label="Checked Checkbox"
                            name="checked-checkbox"
                            onChange={(name, v) => this.onChange(name, v)}
                        />
                        <Checkbox
                            indeterminate
                            name="indeterminate-checkbox"
                            label="Indeterminate Checkbox"
                            onChange={(name, v) => this.onChange(name, v)}
                        />
                        <Checkbox
                            disabled
                            label="Disabled Checkbox"
                            name="disabled-checkbox"
                            onChange={(name, v) => this.onChange(name, v)}
                        />
                    </Col>
                    <Col>
                        <Text>States</Text>
                        <Checkbox
                            label="Required Checkbox"
                            name="required-checkbox"
                            onChange={(name, v) => this.onChange(name, v)}
                            required
                        />
                        <Checkbox
                            label="Valid Checkbox"
                            name="valid-checkbox"
                            onChange={(name, v) => this.onChange(name, v)}
                            status="valid"
                        />
                        <Checkbox
                            label="Warning Checkbox"
                            name="warning-checkbox"
                            onChange={(name, v) => this.onChange(name, v)}
                            status="warning"
                        />
                        <Checkbox
                            label="Error Checkbox"
                            name="error-checkbox"
                            onChange={(name, v) => this.onChange(name, v)}
                            status="error"
                        />
                    </Col>
                </Row>
                <Divider />
            </div>
        )
    }
}
