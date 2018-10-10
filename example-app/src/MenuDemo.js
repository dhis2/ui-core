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
        list: [
            {
                label: 'Menu item 4',
                value: '4',
            },
            {
                label: 'Menu item 5',
                value: '5',
                icon: 'favorite',
            },
            {
                type: 'divider',
            },
            {
                label: 'Menu item 6',
                value: '6',
            },
        ],
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
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                }}
            >
                <h6>Menu components</h6>

                <div style={{ marginTop: 20 }}>
                    <Menu width="250px" list={list} onClick={onClick} />
                </div>

                <div style={{ marginTop: 20 }}>
                    <Menu
                        width="250px"
                        kind="dense"
                        list={list}
                        onClick={onClick}
                    />
                </div>
            </div>
        )
    }
}
