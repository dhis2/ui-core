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
import './theme/index.css';

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
            { value: 1, label: 'sub-three', icon: 'alarm' },
        ],
    },
    { value: 4, label: 'Four', icon: 'alarm' },
    { value: 5, label: 'Five', icon: 'alarm' },
];

const dropdownMenuProps = {
    itemSelectHandler: menuItemSelectTest,
};

class App extends Component {
    render() {
        return (
            <div>
                <FlatButton label="Flat" />
                <RaisedButton label="Raised" />
                <PrimaryButton label="Primary" icon="alarm" />
                <RaisedButton label="Raised with icon" icon={<Icon name="face" />} />
                <OutlinedButton label="Outlined" />
                <CircleButton label="Test 2" icon="add" onClick={clickTest} />
                <CircleButton icon="remove" />
                <a href="www.google.com">Link to google</a>
                <br />
                <br />
                <DropdownButton
                    variant="primary"
                    label="Dropdown"
                    icon="face"
                    dropdownMenuProps={dropdownMenuProps}
                    options={dropdownOptions}
                />
                <Paper elevation={0} padded>
                    <h4>Heading here</h4>
                    <p>And some text too</p>
                </Paper>
            </div>
        );
    }
}

export default App;
