import React from 'react'
import { storiesOf } from '@storybook/react'
import { TextArea } from '../src/index.js'

class TestTextArea extends React.Component {
    state = {
        value: '',
    }
    updateValue = e => {
        this.setState({ value: e.target.value })
    }
    render() {
        return (
            <TextArea
                minLength={200}
                name="test"
                valid
                rows={4}
                value={this.state.value}
                onChange={this.updateValue}
                autoHeight
            />
        )
    }
}

storiesOf('TextAreaField', module).add('Default', () => <TestTextArea />)
