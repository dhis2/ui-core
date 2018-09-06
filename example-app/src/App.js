import React, { Component } from 'react';

import UI from 'ui/UI';

import {
    FlatButton,
    CircleButton,
    RaisedButton,
    PrimaryButton,
    OutlinedButton,
    DropdownButton,
} from 'ui/Button';

import Icon from 'ui/Icon';
import Paper from 'ui/Paper';
import { Menu, MenuItem } from 'ui/Menu';
import CircularProgress from 'ui/CircularProgress';
import LinearProgress from 'ui/LinearProgress';

import Tooltip from 'ui/Tooltip';
import Logo from 'ui/Logo/Logo';
import { Checkbox, RadioButton, TextField, Switch } from 'ui/Input';

const clickTest = event => {
    console.log('Button click', event.target);
};

const menuItemSelectTest = (event, value, option) => {
    console.log('Menu item click', event.target, value, option);
};

const dropdownOptions = [
    {
        value: 1,
        label: 'One ',
        icon: 'alarm',
    },
    { value: 2, label: 'two', icon: 'alarm', disabled: true },
    {
        value: 3,
        label: 'Three',
        icon: 'face',
        menuItems: [
            { value: 1, label: 'sub-one', icon: 'alarm' },
            { value: 2, label: 'sub-two' },
            {
                value: 3,
                label: 'sub-three',
                icon: 'alarm',
                onClick: () => console.log('You rang?'),
            },
        ],
    },
    { value: 4, label: 'Four', icon: 'alarm' },
    { value: 5, label: 'Five', icon: 'alarm' },
];

const menuProps = {
    selectHandler: menuItemSelectTest,
};

const subSubMenuItems = [
    <MenuItem key="jajaja" value={1}>
        Sub item 1
    </MenuItem>,
    <MenuItem key="neee" value={2}>
        Sub item 2
    </MenuItem>,
    <MenuItem key="misschien" value={3}>
        Sub item 3
    </MenuItem>,
];

const subMenuItems = [
    <MenuItem key="jajaja" value={1}>
        Sub item 1
    </MenuItem>,
    <MenuItem key="neee" value={2} menuItems={subSubMenuItems}>
        Sub item 2
    </MenuItem>,
    <MenuItem key="misschien" value={3}>
        Sub item 3
    </MenuItem>,
];

const menuItems = [
    <MenuItem key="jajaja" value={1} menuItems={subMenuItems}>
        Main item 1
    </MenuItem>,
    <MenuItem key="neee" value={2}>
        Main item 2
    </MenuItem>,
    <MenuItem key="misschien" value={3}>
        Main item 3
    </MenuItem>,
];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            switchOn: false,
            inputText: '',
        };
    }

    toggleSwitch = () => {
        this.setState({
            switchOn: !this.state.switchOn,
        });
    };

    updateInputText = event => {
        this.setState({
            inputText: event.target.value,
        });
    };

    render() {
        return (
            <UI theme="green">
                <Paper elevation={6} padded>
                    <TextField
                        label="testlabel"
                        value={this.state.inputText}
                        leadingIcon="face"
                        trailingIcon="face"
                        onChange={this.updateInputText}
                    />
                    <TextField
                        label="testlabel"
                        variant="outlined"
                        leadingIcon="face"
                        value={this.state.inputText}
                        onChange={this.updateInputText}
                    />
                    <TextField
                        label="testlabel"
                        variant="minimal"
                        value={this.state.inputText}
                        onChange={this.updateInputText}
                        leadingIcon="face"
                        trailingIcon="face"
                    />
                    <br />
                    <br />
                    <TextField
                        dense
                        label="testlabel"
                        value={this.state.inputText}
                        leadingIcon="face"
                        trailingIcon="face"
                        disabled
                        onChange={this.updateInputText}
                    />
                    <TextField
                        dense
                        label="testlabel"
                        variant="outlined"
                        leadingIcon="face"
                        disabled
                        value={this.state.inputText}
                        onChange={this.updateInputText}
                    />
                    <TextField
                        dense
                        label="testlabel"
                        variant="minimal"
                        value={this.state.inputText}
                        disabled
                        onChange={this.updateInputText}
                        leadingIcon="face"
                        trailingIcon="face"
                    />
                    <br />
                    <Checkbox>Test</Checkbox>
                    <RadioButton>Test</RadioButton>
                    <Switch value={this.state.switchOn} onChange={this.toggleSwitch}>
                        On / Off
                    </Switch>
                    <br />
                    <CircularProgress size="small" />
                    <CircularProgress />
                    <CircularProgress size="large" />
                    <LinearProgress padded progress={90} />
                    <LinearProgress padded />
                    <div
                        className="accent-primary-lightest-background"
                        style={{
                            width: 400,
                            height: 300,
                            position: 'relative',
                        }}
                    >
                        <p>Put a loader over the top</p>
                        <CircularProgress center />
                    </div>
                    <Logo icon />
                    <FlatButton
                        onClick={e => console.log('Clicked button nr 1', e.target)}
                    >
                        Test
                    </FlatButton>
                    <RaisedButton size="small">
                        <Icon name="alarm" />
                        Raised
                    </RaisedButton>
                    <RaisedButton size="medium">
                        <Icon name="alarm" />
                        Raised
                    </RaisedButton>
                    <RaisedButton size="large">
                        <Icon name="alarm" />
                        Raised
                    </RaisedButton>
                    <Tooltip text="There is an alarm and I want ot make this text even longer">
                        <PrimaryButton>
                            <Icon name="alarm" />
                            Primary
                        </PrimaryButton>
                    </Tooltip>
                    <RaisedButton>
                        <Icon name="face" />
                    </RaisedButton>
                    <OutlinedButton>Outlined</OutlinedButton>
                    <Tooltip text="Test printer here">
                        <CircleButton onClick={clickTest}>
                            <Icon name="print" />
                        </CircleButton>
                    </Tooltip>
                    {/* IF YOU WANT MORE PROPS ON YOUR TOOLTIP JUST WRAP THE BUTTON */}
                    <Tooltip
                        text="I am wrapping the button explicitely"
                        position="right"
                        multiline
                    >
                        <CircleButton>
                            <Icon name="delete" />
                        </CircleButton>
                    </Tooltip>
                    <CircleButton size="small">
                        <Icon name="add" />
                    </CircleButton>
                    <CircleButton size="medium">
                        <Icon name="face" />
                    </CircleButton>
                    <CircleButton aria-labelledby="test" size="large">
                        <Icon name="add" />
                    </CircleButton>
                    <a href="www.google.com">Link to google</a>
                    <br />
                    <br />
                    <DropdownButton
                        buttonProps={{
                            variant: 'primary',
                            onClick: () => console.log('clicked main btn'),
                        }}
                        menuProps={menuProps}
                        options={dropdownOptions}
                    >
                        <Icon name="add" />
                        Dropdown button
                    </DropdownButton>
                    <br />
                    <br />
                    <DropdownButton
                        buttonProps={{
                            variant: 'raised',
                            onClick: () => 'clicked main btn',
                        }}
                        menuProps={{ children: menuItems }}
                        options={dropdownOptions}
                    >
                        <Icon name="add" />
                        Second Dropdown
                    </DropdownButton>
                    <br />
                    <br />
                    <div style={{ width: '50%' }}>
                        <Menu>
                            <MenuItem menuItems={subMenuItems} value={1}>
                                <Icon name="face" />
                                Static item 1
                            </MenuItem>
                            <MenuItem value={2}>
                                <Icon name="face" />
                                Static item 2
                            </MenuItem>
                            <MenuItem value={3}>
                                Static item 3<Icon name="face" />
                            </MenuItem>
                            <MenuItem
                                value={4}
                                onClick={() => console.log('Select handler on item')}
                            >
                                <Icon name="face" />
                                Static item 4<Icon name="face" />
                            </MenuItem>
                        </Menu>
                    </div>
                </Paper>
            </UI>
        );
    }
}

export default App;
