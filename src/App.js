import React, { Component } from 'react';
import {
    FlatButton,
    CircleButton,
    RaisedButton,
    PrimaryButton,
    OutlinedButton,
} from './packages/Button';
import Icon from './packages/Icon';

class App extends Component {
    render() {
        return (
            <div>
                <FlatButton label="Flat" />
                <RaisedButton label="Raised" />
                <PrimaryButton label="Primary" icon="alarm" />
                <RaisedButton label="Raised with icon" icon={<Icon name="face" />} />
                <OutlinedButton label="Outlined" />
                <CircleButton label="Test 2" icon="add" />
                <CircleButton icon="remove" />
                <a href="www.google.com">Ik ben een link naar google</a>
                <br />
                <RaisedButton label="Raised" inDropdown />
                <PrimaryButton label="Primary" icon="alarm" inDropdown />
            </div>
        );
    }
}

export default App;
