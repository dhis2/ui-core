import React from 'react'
import Menu from 'core/Menu'
import Icon from '../../../Icon'

import { Text, Col, Divider, Spacer } from '../../../helpers'

const list = []
for (let i = 1; i <= 5; i += 1) {
    list.push({
        label: `Menu item ${i}`,
        value: i,
        icon: <Icon name="favorite" />,
    })
}

list[2]['list'] = []
for (let i = 6; i <= 9; i += 1) {
    list[2]['list'].push({
        label: `Menu item ${i}`,
        value: i,
        icon: <Icon name="favorite" />,
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
                <div style={{ width: '250px' }}>
                    <Menu list={list} onClick={onClick} />
                </div>

                <Spacer height="40px" />

                <Text>Dense</Text>
                <div style={{ width: '250px' }}>
                    <Menu size="dense" list={list} onClick={onClick} />
                </div>
                <Divider />
            </Col>
        )
    }
}
