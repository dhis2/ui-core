import React from 'react'
import { storiesOf } from '@storybook/react'

import { Menu, MenuItem, Divider, Switch } from '../src'

const Wrapper = fn => <div style={{ width: '358px' }}>{fn()}</div>

storiesOf('Menu', module)
    .addDecorator(Wrapper)

    .add('Default', () => (
        <Menu>
            <MenuItem
                label={
                    <Switch
                        label="Yahoo"
                        name="radio"
                        onChange={evt => {
                            alert(`${evt.target.name}: ${evt.target.value}`)
                        }}
                    />
                }
            />
            <Divider />
            <MenuItem
                label="Three"
                value="three"
                onClick={val => {
                    alert(`this is ${val}`)
                }}
            />
            <MenuItem label="One" value="one">
                <Menu>
                    <MenuItem label="Sub One" value="subone">
                        <Menu>
                            <MenuItem label="Sub One-One" value="suboneone">
                                <Menu>
                                    <MenuItem
                                        label="Sub One-One-One"
                                        value="suboneoneone"
                                        onClick={val => {
                                            alert(`this is ${val}`)
                                        }}
                                    />
                                </Menu>
                            </MenuItem>
                        </Menu>
                    </MenuItem>
                </Menu>
            </MenuItem>

            <Divider />
            <MenuItem
                label="Two"
                value="two"
                onClick={val => {
                    alert(`this is ${val}`)
                }}
            />
            <MenuItem
                label="Three"
                value="three"
                onClick={val => {
                    alert(`this is ${val}`)
                }}
            />
        </Menu>
    ))

    .add('Dense', () => (
        <Menu>
            <MenuItem
                dense
                label={
                    <Switch
                        label="Yahoo"
                        name="uhu"
                        onChange={v => {
                            alert('would need state, but would set to: ' + v)
                        }}
                        checked={false}
                    />
                }
            />
            <Divider />
            <MenuItem
                dense
                label="Three"
                value="three"
                onClick={val => {
                    alert(`this is ${val}`)
                }}
            />
            <MenuItem dense label="One" value="one">
                <Menu>
                    <MenuItem dense label="Sub One" value="subone">
                        <Menu>
                            <MenuItem
                                dense
                                label="Sub One-One"
                                value="suboneone"
                            >
                                <Menu>
                                    <MenuItem
                                        dense
                                        label="Sub One-One-One"
                                        value="suboneoneone"
                                        onClick={val => {
                                            alert(`this is ${val}`)
                                        }}
                                    />
                                </Menu>
                            </MenuItem>
                        </Menu>
                    </MenuItem>
                </Menu>
            </MenuItem>

            <Divider />
            <MenuItem
                dense
                label="Two"
                value="two"
                onClick={val => {
                    alert(`this is ${val}`)
                }}
            />
            <MenuItem
                dense
                label="Three"
                value="three"
                onClick={val => {
                    alert(`this is ${val}`)
                }}
            />
        </Menu>
    ))
