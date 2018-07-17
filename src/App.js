import React, { Component } from 'react';
import { FlatButton, CircleButton } from './packages/Button';
import Icon from './packages/Icon';

class App extends Component {
    render() {
        return (
            <div>
                <FlatButton label="Test" />
                <FlatButton label="Test 2" icon={<Icon name="face" />} />
                <CircleButton label="Test 2" icon="alarm" />
            </div>
        );
    }
}

export default App;
