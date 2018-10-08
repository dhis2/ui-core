/** @format */

import React, { Component } from 'react'
import SelectField from 'ui/core/SelectField'

const list = [
    { value: 1, label: 'One ', icon: 'alarm' },
    { value: 2, label: 'Two', icon: 'alarm' },
    { value: 3, label: 'Three', icon: 'face' },
    { value: 4, label: 'Four', icon: 'alarm' },
    { value: 5, label: 'Five', icon: 'alarm' },
]

const props = {
    list,
    icon: 'face',
    label: 'Choose below',
    help: 'Help with this text',
    required: true,
}

export default class SelectDemo extends Component {
    state = {
        s1: 1,
        s2: 2,
        s3: 3,
        s4: 1,
        s5: 2,
        s6: 3,
        s7: 1,
        s8: 2,
        s9: 3,
        s10: 1,
        s11: 2,
        s12: 3,
        s13: 1,
        s14: 2,
        s15: 3,
    }

    render() {
        return (
            <div style={{ marginTop: 40 }}>
                <h6>Select Field</h6>
                <br />

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        margin: '0 20px 20px 0',
                        width: 800,
                    }}
                >
                    <div style={{ marginRight: '20px', width: 220 }}>
                        <SelectField
                            {...props}
                            icon={undefined}
                            value={this.state.s1}
                            onChange={(evt, s1) => this.setState({ s1 })}
                        />
                    </div>

                    <div style={{ marginRight: '20px', width: 220 }}>
                        <SelectField
                            {...props}
                            icon={undefined}
                            kind="outlined"
                            value={this.state.s2}
                            onChange={(evt, s2) => this.setState({ s2 })}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
