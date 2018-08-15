import React, { Component } from 'react';
import {
    FlatButton,
    CircleButton,
    RaisedButton,
    PrimaryButton,
    OutlinedButton,
    DropdownButton,
} from './packages/Button';
import Icon from './packages/Icon';
import Paper from './packages/Paper';
import { Menu, MenuItem } from './packages/Menu';
import './theme/index.css';
import Tooltip from './packages/Tooltip';
import CircularProgress from './packages/CircularProgress';
import LinearProgress from './packages/LinearProgress';

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
    { value: 2, label: 'two', icon: 'alarm' },
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

const subMenuItems = [
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
    render() {
        return (
            <Paper elevation={6} padded>
                <CircularProgress />
                <LinearProgress progress={0.4} />
                <FlatButton onClick={e => console.log('Clicked button nr 1', e.target)}>
                    Test
                </FlatButton>
                <RaisedButton size="small">
                    <Icon name="alarm" />Raised
                </RaisedButton>
                <RaisedButton size="medium">
                    <Icon name="alarm" />Raised
                </RaisedButton>
                <RaisedButton size="large">
                    <Icon name="alarm" />Raised
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
                        <Icon name="printer" />
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
                <Menu>
                    <MenuItem menuItems={subMenuItems} value={1}>
                        Static item 1
                    </MenuItem>
                    <MenuItem value={2}>
                        <Icon name="face" />Static item 2
                    </MenuItem>
                    <MenuItem value={3}>
                        Static item 3<Icon name="face" />
                    </MenuItem>
                    <MenuItem
                        value={4}
                        onClick={() => console.log('Select handler on item')}
                    >
                        <Icon name="face" />Static item 4<Icon name="face" />
                    </MenuItem>
                </Menu>
            </Paper>
        );
    }
}

export default App;
