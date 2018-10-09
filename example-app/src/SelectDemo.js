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
    }

    render() {
        return (
            <div style={{ marginTop: 40 }}>
                <h6>Select components</h6>
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
                            value={this.state.s1}
                            onChange={(evt, s1) => this.setState({ s1 })}
                        />
                    </div>

                    <div style={{ marginRight: '20px', width: 220 }}>
                        <SelectField
                            {...props}
                            border="solid"
                            value={this.state.s2}
                            onChange={(evt, s2) => this.setState({ s2 })}
                        />
                    </div>

                    <div style={{ marginRight: '20px', width: 220 }}>
                        <SelectField
                            {...props}
                            border="dashed"
                            value={this.state.s3}
                            onChange={(evt, s3) => this.setState({ s3 })}
                        />
                    </div>

                    <div style={{ margin: '20px 0 0 0', width: 220 }}>
                        <SelectField
                            {...props}
                            status="valid"
                            value={this.state.s4}
                            onChange={(evt, s4) => this.setState({ s4 })}
                        />
                    </div>

                    <div style={{ margin: '20px 0 0 20px', width: 220 }}>
                        <SelectField
                            {...props}
                            border="solid"
                            status="valid"
                            value={this.state.s5}
                            onChange={(evt, s5) => this.setState({ s5 })}
                        />
                    </div>

                    <div style={{ margin: '20px 0 0 20px', width: 220 }}>
                        <SelectField
                            {...props}
                            border="dashed"
                            status="valid"
                            value={this.state.s6}
                            onChange={(evt, s6) => this.setState({ s6 })}
                        />
                    </div>

                    <div style={{ margin: '20px 0 0 0', width: 220 }}>
                        <SelectField
                            {...props}
                            status="warning"
                            value={this.state.s7}
                            onChange={(evt, s7) => this.setState({ s7 })}
                        />
                    </div>

                    <div style={{ margin: '20px 0 0 20px', width: 220 }}>
                        <SelectField
                            {...props}
                            border="solid"
                            status="warning"
                            value={this.state.s8}
                            onChange={(evt, s8) => this.setState({ s8 })}
                        />
                    </div>

                    <div style={{ margin: '20px 0 0 20px', width: 220 }}>
                        <SelectField
                            {...props}
                            border="dashed"
                            status="warning"
                            value={this.state.s9}
                            onChange={(evt, s9) => this.setState({ s9 })}
                        />
                    </div>

                    <div style={{ margin: '20px 0 0 0', width: 220 }}>
                        <SelectField
                            {...props}
                            status="error"
                            value={this.state.s10}
                            onChange={(evt, s10) => this.setState({ s10 })}
                        />
                    </div>

                    <div style={{ margin: '20px 0 0 20px', width: 220 }}>
                        <SelectField
                            {...props}
                            border="solid"
                            status="error"
                            value={this.state.s11}
                            onChange={(evt, s11) => this.setState({ s11 })}
                        />
                    </div>

                    <div style={{ margin: '20px 0 0 20px', width: 220 }}>
                        <SelectField
                            {...props}
                            border="dashed"
                            status="error"
                            value={this.state.s12}
                            onChange={(evt, s12) => this.setState({ s12 })}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
