import React, { Component } from 'react'
import Menu from 'ui/core/Menu'

const list = [
    {
        label: 'Menu item 1',
        value: '1',
    },
    {
        label: 'Menu item 2',
        value: '2',
        icon: 'favorite',
    },
    {
        label: 'Menu item 3',
        value: '3',
        icon: 'favorite',
    },
    {
        type: 'divider',
    },
    {
        label: 'Menu item 4',
        value: '4',
    },
]

function onClick(msg) {
    console.log('clicked', msg)
}

export default class MenuDemo extends Component {
    render() {
        return (
            <div>
                <h6>Menu components</h6>

                <div style={{ width: 250, marginTop: 20 }}>
                    <Menu list={list} onClick={onClick} />
                </div>

                <div style={{ width: 250, marginTop: 20 }}>
                    <Menu kind="dense" list={list} onClick={onClick} />
                </div>
            </div>
        )
    }
}
