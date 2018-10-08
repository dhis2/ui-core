/** @format */

import React, { Component } from 'react'
import InputField from 'ui/core/InputField'

const props = {
    label: 'Label',
    placeholder: 'Placeholder',
    helperText: 'Helper text',
}

export default class InputFieldDemo extends Component {
    state = {
        i1: '',
        i2: '',
        i3: '',
        i4: '',
        i5: '',
        i6: '',
        i7: '',
        i8: '',
        i9: '',
        i10: '',
        i11: '',
        i12: '',
        i13: '',
        i14: '',
        i15: '',
    }

    onChange = (target, value) => this.setState({ [target]: value })

    render() {
        return (
            <div style={{ marginTop: 40 }}>
                <h6>Input Field</h6>
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
                        <InputField
                            {...props}
                            name="i1"
                            border="none"
                            placeholder=""
                            value={this.state.i1}
                            onChange={(name, v) => this.onChange('i1', v)}
                        />
                    </div>

                    <div style={{ marginRight: '20px', width: 220 }}>
                        <InputField
                            {...props}
                            name="i2"
                            border="solid"
                            placeholder=""
                            value={this.state.i2}
                            onChange={(name, v) => this.onChange('i2', v)}
                        />
                    </div>

                    <div style={{ marginRight: '20px', width: 220 }}>
                        <InputField
                            {...props}
                            name="i3"
                            border="dashed"
                            placeholder=""
                            value={this.state.i3}
                            onChange={(name, v) => this.onChange('i3', v)}
                        />
                    </div>

                    <div style={{ margin: '20px 20px 0 0', width: 220 }}>
                        <InputField
                            {...props}
                            border="none"
                            icon="face"
                            name="i4"
                            value={this.state.i4}
                            onChange={(name, v) => this.onChange('i4', v)}
                        />
                    </div>

                    <div style={{ margin: '20px 20px 0 0', width: 220 }}>
                        <InputField
                            {...props}
                            border="solid"
                            icon="face"
                            name="i5"
                            value={this.state.i5}
                            onChange={(name, v) => this.onChange('i5', v)}
                        />
                    </div>

                    <div style={{ margin: '20px 0 0 0', width: 220 }}>
                        <InputField
                            {...props}
                            border="dashed"
                            icon="face"
                            name="i6"
                            value={this.state.i6}
                            onChange={(name, v) => this.onChange('i6', v)}
                        />
                    </div>

                    <div style={{ margin: '20px 20px 0 0', width: 220 }}>
                        <InputField
                            {...props}
                            border="none"
                            icon="face"
                            status="valid"
                            name="i7"
                            value={this.state.i7}
                            onChange={(name, v) => this.onChange('i7', v)}
                        />
                    </div>

                    <div style={{ margin: '20px 20px 0 0', width: 220 }}>
                        <InputField
                            {...props}
                            border="solid"
                            icon="face"
                            status="valid"
                            name="i8"
                            value={this.state.i8}
                            onChange={(name, v) => this.onChange('i8', v)}
                        />
                    </div>

                    <div style={{ margin: '20px 0 0 0', width: 220 }}>
                        <InputField
                            {...props}
                            border="dashed"
                            icon="face"
                            status="valid"
                            name="i9"
                            value={this.state.i9}
                            onChange={(name, v) => this.onChange('i9', v)}
                        />
                    </div>

                    <div style={{ margin: '20px 20px 0 0', width: 220 }}>
                        <InputField
                            {...props}
                            border="none"
                            icon="face"
                            status="warning"
                            name="i10"
                            value={this.state.i10}
                            onChange={(name, v) => this.onChange('i10', v)}
                        />
                    </div>

                    <div style={{ margin: '20px 20px 0 0', width: 220 }}>
                        <InputField
                            {...props}
                            border="solid"
                            icon="face"
                            status="warning"
                            name="i11"
                            value={this.state.i11}
                            onChange={(name, v) => this.onChange('i11', v)}
                        />
                    </div>

                    <div style={{ margin: '20px 0 0 0', width: 220 }}>
                        <InputField
                            {...props}
                            border="dashed"
                            icon="face"
                            status="warning"
                            name="i12"
                            value={this.state.i12}
                            onChange={(name, v) => this.onChange('i12', v)}
                        />
                    </div>

                    <div style={{ margin: '20px 20px 0 0', width: 220 }}>
                        <InputField
                            {...props}
                            border="none"
                            icon="face"
                            status="error"
                            name="i13"
                            value={this.state.i13}
                            onChange={(name, v) => this.onChange('i13', v)}
                        />
                    </div>

                    <div style={{ margin: '20px 20px 0 0', width: 220 }}>
                        <InputField
                            {...props}
                            border="solid"
                            icon="face"
                            status="error"
                            name="i14"
                            value={this.state.i14}
                            onChange={(name, v) => this.onChange('i14', v)}
                        />
                    </div>

                    <div style={{ margin: '20px 0 0 0', width: 220 }}>
                        <InputField
                            {...props}
                            border="dashed"
                            icon="face"
                            status="error"
                            name="i15"
                            value={this.state.i15}
                            onChange={(name, v) => this.onChange('i15', v)}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
