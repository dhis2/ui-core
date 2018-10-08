/** @format */

import React, { Component } from 'react'

import Checkbox from 'ui/core/Input/Checkbox'
import RadioButton from 'ui/core/Input/RadioButton'
import TextField from 'ui/core/Input/TextField'
import Switch from 'ui/core/Input/Switch'
import RadioButtonGroup from 'ui/core/Input/RadioButtonGroup'

const selectOptions = [
    { value: 1, label: 'One' },
    { value: 2, label: 'Two' },
    { value: 3, label: 'Three' },
]

export default class InputDemo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            field1: '',
            field2: '',
            field3: '',
            field4: '',
            field5: '',
            field6: '',
            switch1: false,
            switch2: false,
            switch3: false,
            selectValue: 0,
        }
    }

    toggleSwitch = shard => {
        this.setState({
            [shard]: !this.state[shard],
        })
    }

    updateInputText = (shard, event) => {
        this.setState({
            [shard]: event.target.value,
        })
    }

    updateSelect = selectValue => {
        this.setState({ selectValue: parseInt(selectValue, 10) })
    }

    render() {
        return (
            <div style={{ marginTop: 40 }}>
                <h6>Input components</h6>
                <br />
                <RadioButtonGroup
                    options={selectOptions}
                    onChange={this.updateSelect}
                    label="I'm a label"
                    value={this.state.selectValue}
                    helpText="Choose one please"
                    error
                    inline
                    required
                />
                <br />
                <TextField
                    label="testlabel"
                    value={this.state.field1}
                    leadingIcon="face"
                    trailingIcon="face"
                    onChange={this.updateInputText.bind(null, 'field1')}
                    helpText="Hallo Hendrik"
                    valid
                    required
                />
                <TextField
                    label="testlabel"
                    variant="outlined"
                    // leadingIcon="print"
                    value={this.state.field2}
                    onChange={this.updateInputText.bind(null, 'field2')}
                    helpText="Hallo Hendrik"
                    warning
                />
                <TextField
                    label="testlabel"
                    variant="minimal"
                    value={this.state.field3}
                    onChange={this.updateInputText.bind(null, 'field3')}
                    trailingIcon="face"
                    helpText="Hallo Hendrik"
                />
                <TextField
                    dense
                    label="testlabel"
                    value={this.state.field4}
                    trailingIcon="face"
                    onChange={this.updateInputText.bind(null, 'field4')}
                    helpText="Hallo Hendrik"
                    error
                />
                <TextField
                    dense
                    label="testlabel"
                    variant="outlined"
                    leadingIcon="face"
                    value={this.state.field5}
                    onChange={this.updateInputText.bind(null, 'field5')}
                    helpText="Hallo Hendrik"
                />
                <TextField
                    dense
                    label="testlabel dense"
                    variant="minimal"
                    value={this.state.field6}
                    onChange={this.updateInputText.bind(null, 'field6')}
                    leadingIcon="face"
                    block
                    trailingIcon="face"
                    helpText="Hallo Hendrik"
                />
                <Checkbox
                    label="Test"
                    helpText="Hallo Hendrik"
                    checked={this.state.switch1}
                    onChange={() =>
                        this.setState({ switch1: !this.state.switch1 })
                    }
                    dense
                    required
                />
                <RadioButton
                    label="Test"
                    helpText="Hallo Hendrik"
                    checked={this.state.switch2}
                    onChange={() =>
                        this.setState({ switch2: !this.state.switch2 })
                    }
                    dense
                    required
                />
                <Switch
                    label="On / Off"
                    checked={this.state.switch3}
                    onChange={() => {
                        console.log('On/Off switch3')
                        this.setState({ switch3: !this.state.switch3 })
                    }}
                    helpText="Hallo Hendrik"
                    dense
                    required
                />
            </div>
        )
    }
}
