import React from 'react'
import { storiesOf } from '@storybook/react'
import { Select, Option } from '../src'

storiesOf('Select', module).add('Default', () => (
    <React.Fragment>
        <Select
            onChange={value => alert(value)}
            value="value"
            placeholder="Please select a value"
        >
            <Option label="one" value="1" />
            <Option label="two" value="2" />
            <Option label="three" value="3" />
            <Option label="four" value="4" />
        </Select>
        <p>Some text content</p>
    </React.Fragment>
))
