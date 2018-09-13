import React, { Component } from 'react'

import Paper from 'ui/Paper';

import Checkbox from 'ui/Input/Checkbox'
import RadioButton from 'ui/Input/RadioButton'
import TextField from 'ui/Input/TextField'
import Switch from 'ui/Input/Switch'
import SelectField from 'ui/Input/SelectField'
import RadioButtonGroup from 'ui/Input/RadioButtonGroup'

const selectOptions = [
    { value: 1, label: 'One' },
    { value: 2, label: 'Two' },
    { value: 3, label: 'Three' },
];

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
            selectValue: 0
        }
    }

    toggleSwitch = (shard) => {
        this.setState({
            [shard]: !this.state[shard],
        });
    };

    updateInputText = (shard, event) => {
        this.setState({
            [shard]: event.target.value,
        });
    };

    updateSelect = selectValue => {
        this.setState({ selectValue: parseInt(selectValue, 10) });
    };

    render() {
        return (<Paper elevation={6} padded>
            <h3>Input components</h3>
            <hr/>
            <RadioButtonGroup
                options={selectOptions}
                onChange={this.updateSelect}
                label="I'm a label"
                value={this.state.selectValue}
                helpText="Choose one please"
                error
                inline
            />
            <SelectField
                options={selectOptions}
                label="Choose something"
                onChange={this.updateSelect}
                value={this.state.selectValue}
                variant="outlined"
                native
                includeEmpty
                emptyOptionText="None"
                // leadingIcon="face"
                // helpText="Help with this text"
                // dense
                valid
                // error
                // warning
            />
            <SelectField
                options={selectOptions}
                label="Choose something"
                onChange={this.updateSelect}
                value={this.state.selectValue}
                variant="outlined"
                includeEmpty
                emptyOptionText="None"
                leadingIcon="face"
                helpText="Help with this text"
                dense
                valid
                // error
                // warning
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
                fullWidth
                trailingIcon="face"
                helpText="Hallo Hendrik"
            />
            <Checkbox
                label="Test"
                helpText="Hallo Hendrik"
                checked={this.state.switch1}
                onChange={this.toggleSwitch.bind(null, 'switch1')}
            />
            <RadioButton
                label="Test"
                helpText="Hallo Hendrik"
                checked={this.state.switch2}
                onChange={this.toggleSwitch.bind(null, 'switch2')}
            />
            <Switch
                label="On / Off"
                checked={this.state.switch3}
                onChange={this.toggleSwitch.bind(null, 'switch3')}
                helpText="Hallo Hendrik"
            />
        </Paper>)
    }
}
