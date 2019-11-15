import React from 'react'
import { storiesOf } from '@storybook/react'
import { CircularLoader, ScreenCover, Menu, MenuItem, Divider } from '../src'

const onClick = () => alert('Clicked the backdrop')

storiesOf('ScreenCover', module)
    .add('Default', () => <ScreenCover onClick={onClick} />)

    .add('CircularLoader', () => (
        <ScreenCover onClick={onClick}>
            <CircularLoader />
        </ScreenCover>
    ))

    .add('Menu', () => (
        <ScreenCover onClick={onClick}>
            <Menu>
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
        </ScreenCover>
    ))
