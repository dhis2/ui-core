import React, { Component } from 'react'
import Menu from 'ui/core/Menu'

const list = []
for (let i = 1; i <= 5; i += 1) {
    list.push({
        label: `Menu item ${i}`,
        value: i,
        icon: 'favorite',
    })
}

list[2]['list'] = []
for (let i = 6; i <= 9; i += 1) {
    list[2]['list'].push({
        label: `Menu item ${i}`,
        value: i,
        icon: 'favorite',
    })
}

list[1]['active'] = true
list[3]['disabled'] = true

list.splice(3, 0, {
    type: 'divider',
})

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
                        size="dense"
                        list={list}
                        onClick={onClick}
                    />
                </div>
            </div>
        )
    }
}
