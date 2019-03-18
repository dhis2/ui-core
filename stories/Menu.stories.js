import React from 'react'
import { storiesOf } from '@storybook/react'
import { Menu } from '../src'

const Wrapper = fn => <div style={{ width: '358px' }}>{fn()}</div>

const list = []

for (let i = 1; i <= 5; i += 1) {
    list.push({
        label: `Menu item ${i}`,
        value: i,
    })
}

list[2]['list'] = []
for (let i = 6; i <= 9; i += 1) {
    list[2]['list'].push({
        label: `Menu item ${i}`,
        value: i,
    })
}

list[1]['active'] = true
list[3]['disabled'] = true

list.splice(3, 0, {
    type: 'divider',
})

storiesOf('Menu', module)
    .addDecorator(Wrapper)

    .add('Default', () => <Menu onClick={msg => {}} list={list} />)
