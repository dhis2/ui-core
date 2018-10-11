import React from 'react'
import Menu from 'ui/core/Menu'
import { Text, Col, Divider, Spacer } from '../../helpers'

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

export class MenuDemo extends React.Component {
    static id = 'menu'

    render() {
        return (
            <Col>
                <Text>Default</Text>
                <Menu width="250px" list={list} onClick={onClick} />

                <Spacer height="40px" />

                <Text>Dense</Text>
                <Menu
                    width="250px"
                    size="dense"
                    list={list}
                    onClick={onClick}
                />
                <Divider />
            </Col>
        )
    }
}
