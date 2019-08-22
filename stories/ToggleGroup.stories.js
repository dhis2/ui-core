import React from 'react'
import { storiesOf } from '@storybook/react'
import { ToggleGroup, Radio, Switch, Checkbox, FormControl, Help } from '../src'

import markdown from './info/molecules/toggleGroup.md'

const onChange = () => {
    console.log('Radio was clicked, nothing else will happen')
}

storiesOf('ToggleGroup', module)
    .addParameters({
        notes: {
            markdown,
        },
    })
    .add('Default - with Radios', () => (
        <ToggleGroup>
            <Radio
                onChange={onChange}
                name="radio"
                value="first"
                label="First"
            />
            <Radio
                onChange={onChange}
                name="radio"
                value="second"
                label="Second"
                checked
            />
            <Radio
                onChange={onChange}
                name="radio"
                value="third"
                label="Third"
            />
        </ToggleGroup>
    ))
    .add('Default - with Switches', () => (
        <ToggleGroup>
            <Switch
                onChange={onChange}
                name="switch"
                value="first"
                label="First"
            />
            <Switch
                onChange={onChange}
                name="switch"
                value="second"
                label="Second"
                checked
            />
            <Switch
                onChange={onChange}
                name="switch"
                value="third"
                label="Third"
            />
        </ToggleGroup>
    ))
    .add('Default - with Checkboxes', () => (
        <ToggleGroup>
            <Checkbox
                onChange={onChange}
                name="checkbox"
                value="first"
                label="First"
            />
            <Checkbox
                onChange={onChange}
                name="checkbox"
                value="second"
                label="Second"
                checked
            />
            <Checkbox
                onChange={onChange}
                name="checkbox"
                value="third"
                label="Third"
            />
        </ToggleGroup>
    ))
    .add('Stacked - with Radios', () => (
        <ToggleGroup stacked>
            <Radio
                onChange={onChange}
                name="radio"
                value="first"
                label="First"
            />
            <Radio
                onChange={onChange}
                name="radio"
                value="second"
                label="Second"
                checked
            />
            <Radio
                onChange={onChange}
                name="radio"
                value="third"
                label="Third"
            />
        </ToggleGroup>
    ))
    .add('Stacked - with Switches', () => (
        <ToggleGroup stacked>
            <Switch
                onChange={onChange}
                name="switch"
                value="first"
                label="First"
            />
            <Switch
                onChange={onChange}
                name="switch"
                value="second"
                label="Second"
                checked
            />
            <Switch
                onChange={onChange}
                name="switch"
                value="third"
                label="Third"
            />
        </ToggleGroup>
    ))
    .add('Stacked - with Checkboxes', () => (
        <ToggleGroup stacked>
            <Checkbox
                onChange={onChange}
                name="checkbox"
                value="first"
                label="First"
            />
            <Checkbox
                onChange={onChange}
                name="checkbox"
                value="second"
                label="Second"
                checked
            />
            <Checkbox
                onChange={onChange}
                name="checkbox"
                value="third"
                label="Third"
            />
        </ToggleGroup>
    ))
    .add('In FormControl with Label and Help', () => (
        <FormControl>
            <ToggleGroup.Label>Please choose an option</ToggleGroup.Label>
            <ToggleGroup>
                <Radio
                    onChange={onChange}
                    name="radio"
                    value="first"
                    label="First"
                />
                <Radio
                    onChange={onChange}
                    name="radio"
                    value="second"
                    label="Second"
                    checked
                />
                <Radio
                    onChange={onChange}
                    name="radio"
                    value="third"
                    label="Third"
                />
            </ToggleGroup>
            <Help indent={false}>I am very helpful text</Help>
        </FormControl>
    ))
