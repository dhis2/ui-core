import React from 'react'
import { storiesOf } from '@storybook/react'
import {
    CircularLoader,
    CoverCenter,
    Menu,
    MenuItem,
    Divider,
    colors,
} from '../src'

window.onClick = (payload, event) => {
    console.log('onClick payload', payload)
    console.log('onClick event', event)
}

const onClick = (...args) => window.onClick(...args)

storiesOf('CoverCenter', module)
    .addDecorator(fn => (
        <div>
            CoverCenter wrapper
            {fn()}
            <style jsx>{`
                div {
                    box-sizing: border-box;
                    padding: 20px;
                    position: relative;
                    height: 300px;
                    width: 500px;
                    background: ${colors.teal200};
                    text-align: center;
                }
            `}</style>
        </div>
    ))
    .add('Default', () => <CoverCenter onClick={onClick} />)

    .add('CircularLoader', () => (
        <CoverCenter onClick={onClick}>
            <CircularLoader />
        </CoverCenter>
    ))

    .add('Menu', () => (
        <CoverCenter onClick={onClick}>
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
        </CoverCenter>
    ))
