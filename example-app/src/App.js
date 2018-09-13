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
import { Tabs, Tab } from 'ui/Tabs';
import CircularProgress from 'ui/CircularProgress';
import LinearProgress from 'ui/LinearProgress';

import Tooltip from 'ui/Tooltip';
import Logo from 'ui/Logo/Logo';
import Dialog from 'ui/Dialog';

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

const tabsList = [
    { label: 'Tab number 1', icon: 'face' },
    { label: 'Tab number 2', icon: 'face' },
    { label: 'Tab number 3', icon: 'face' },
    { label: 'Tab number 4', icon: 'face', disabled: true },
    { label: 'Tab number 5', icon: 'face' },
    { label: 'Tab number 6', icon: 'face' },
    { label: 'Tab number 7', icon: 'face' },
    { label: 'Tab number 8', icon: 'face' },
    { label: 'Tab number 9', icon: 'face' },
    { label: 'Tab number 10', icon: 'face' },
    { label: 'Tab number 11', icon: 'face' },
    { label: 'Tab number 12', icon: 'face' },
    { label: 'Tab number 13', icon: 'face' },
    { label: 'Tab number 14', icon: 'face' },
    { label: 'Tab number 15', icon: 'face' },
    { label: 'Tab number 16', icon: 'face' },
    { label: 'Tab number 17', icon: 'face' },
    { label: 'Tab number 18', icon: 'face' },
    { label: 'Tab number 19', icon: 'face' },
    { label: 'Tab number 20', icon: 'face' },
    { label: 'Tab number 21', icon: 'face' },
    { label: 'Tab number 22', icon: 'face' },
    { label: 'Tab number 23', icon: 'face' },
    { label: 'Tab number 24', icon: 'face' },
    { label: 'Tab number 25', icon: 'face' },
    { label: 'Tab number 26', icon: 'face' },
    { label: 'Tab number 27', icon: 'face' },
    { label: 'Tab number 28', icon: 'face' },
    { label: 'Tab number 29', icon: 'face' },
    { label: 'Tab number 30', icon: 'face' },
    { label: 'Tab number 31', icon: 'face' },
    { label: 'Tab number 32', icon: 'face' },
    { label: 'Tab number 33', icon: 'face' },
    { label: 'Tab number 34', icon: 'face' },
    { label: 'Tab number 35', icon: 'face' },
    { label: 'Tab number 36', icon: 'face' },
    { label: 'Tab number 37', icon: 'face' },
    { label: 'Tab number 38', icon: 'face' },
    { label: 'Tab number 39', icon: 'face' },
    { label: 'Tab number 40', icon: 'face' },
    { label: 'Tab number 41', icon: 'face' },
    { label: 'Tab number 42', icon: 'face' },
    { label: 'Tab number 43', icon: 'face' },
    { label: 'Tab number 44', icon: 'face' },
    { label: 'Tab number 45', icon: 'face' },
    { label: 'Tab number 46', icon: 'face' },
    { label: 'Tab number 47', icon: 'face' },
    { label: 'Tab number 48', icon: 'face' },
    { label: 'Tab number 49', icon: 'face' },
    { label: 'Tab number 50', icon: 'face' },
    { label: 'Tab number 51', icon: 'face' },
    { label: 'Tab number 52', icon: 'face' },
    { label: 'Tab number 53', icon: 'face' },
    { label: 'Tab number 54', icon: 'face' },
    { label: 'Tab number 55', icon: 'face' },
    { label: 'Tab number 56', icon: 'face' },
    { label: 'Tab number 57', icon: 'face' },
    { label: 'Tab number 58', icon: 'face' },
    { label: 'Tab number 59', icon: 'face' },
    { label: 'Tab number 60', icon: 'face' },
    { label: 'Tab number 61', icon: 'face' },
    { label: 'Tab number 62', icon: 'face' },
    { label: 'Tab number 63', icon: 'face' },
    { label: 'Tab number 64', icon: 'face' },
];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTabIndex: 60,
            activeSecondaryTabIndex: 2,
            dialogOpen: false,
        };
    }

    toggleDialogOpen = () => {
        this.setState({
            dialogOpen: !this.state.dialogOpen,
        });
    };

    tabChangeHandler = clickedTabIndex => {
        this.setState({
            activeTabIndex: clickedTabIndex,
        });
    };

    activateSubTab = clickedTabIndex => {
        this.setState({
            activeSecondaryTabIndex: clickedTabIndex,
        });
    };

    render() {
        const tabs = tabsList.map((tab, index) => ({
            ...tab,
            onClick: () => this.tabChangeHandler(index),
        }));
        return (
            <UI theme="green">
                <Paper elevation={6} padded>
                    <Tabs
                        selected={this.state.activeTabIndex}
                        items={tabs}
                        stacked
                        position="fixed"
                    />
                    <h4 style={{ marginTop: '60px' }}>
                        I have some margin top so I show under the fixed tabs
                    </h4>
                    <PrimaryButton onClick={this.toggleDialogOpen}>
                        Open dialog
                    </PrimaryButton>
                    <Dialog />
                    <CircularProgress size="small" />
                    <CircularProgress />
                    <CircularProgress size="large" />
                    <LinearProgress padded progress={90} />
                    <LinearProgress padded />
                    <div
                        className="accent-primary-lightest-background"
                        style={{
                            width: '100%',
                            height: 400,
                            position: 'relative',
                        }}
                    >
                        <Tabs selected={this.state.activeSecondaryTabIndex} contained>
                            <Tab onClick={() => this.activateSubTab(0)}>
                                <span style={{ display: 'inline-flex' }}>
                                    <Icon name="face" />
                                    {/* If you wrap this in a span and the parent is display: flex, 
                                        you can get a sort of decent style, because of the Tab's 'd2ui-align-icon'
                                        helper CSS class. However, in general it's probably best if the Tab 
                                        receives a component with correct styling applied
                                     */}
                                    <span>Sub tab 1</span>
                                </span>
                            </Tab>
                            <Tab onClick={() => this.activateSubTab(1)}>
                                <span style={{ display: 'inline-flex' }}>Sub tab 2</span>
                            </Tab>
                            <Tab>
                                <span style={{ display: 'inline-flex' }}>
                                    <h4 onClick={() => this.activateSubTab(2)}>
                                        With a header???
                                    </h4>
                                </span>
                            </Tab>
                            <Tab onClick={() => this.activateSubTab(3)}>
                                <span style={{ display: 'inline-flex' }}>
                                    <Icon name="face" />
                                    Sub tab 1
                                </span>
                            </Tab>
                        </Tabs>
                        <div
                            style={{
                                height: 200,
                                position: 'relative',
                            }}
                            className="accent-secondary-lightest-background"
                        >
                            <p>There is a loader above me</p>
                            <CircularProgress center />
                        </div>
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
