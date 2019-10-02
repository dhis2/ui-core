import React from 'react'
import { storiesOf } from '@storybook/react'
import { Select, Option } from '../src'

class StatefulSelect extends React.Component {
    state = {
        selected: {},
    }

    setSelected = selected => {
        this.setState({ selected })
    }

    render() {
        return (
            <Select
                // eslint-disable-next-line
                clearable={this.props.clearable}
                onChange={this.setSelected}
                selected={this.state.selected}
                placeholder="Please select a value"
            >
                <Option label="one" value="1" />
                <Option label="two" value="2" />
                <Option label="three" value="3" />
                <Option label="four" value="4" />
            </Select>
        )
    }
}

storiesOf('Select', module)
    .add('Single select', () => <StatefulSelect />)
    .add('Clearable single select', () => <StatefulSelect clearable />)
