import React from 'react'
import Card from 'Card'
import { Col, Divider } from '../../../helpers'

export class CardDemo extends React.Component {
    static id = 'card'

    render() {
        return (
            <Col style={{ width: '358px', height: '358px' }}>
                <Card />
                <Divider />
            </Col>
        )
    }
}
