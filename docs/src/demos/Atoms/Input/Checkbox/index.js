import React from 'react'
import Checkbox from 'core/Checkbox'

import { Divider } from '../../../../helpers'

export class CheckboxDemo extends React.Component {
    static id = 'input-checkbox'

    onChange = (target, value) => console.log(`toggle ${target} to ${value}`)

    render() {
        return (
            <div>
                <Checkbox
                    label="Checkbox"
                    name="default-checkbox"
                    onChange={(name, v) => this.onChange(name, v)}
                    required
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
                    name="disabled-checkbox"
                    label="Disabled Checkbox"
                    onChange={(name, v) => this.onChange(name, v)}
                />
                <Divider />
            </div>
        )
    }
}
