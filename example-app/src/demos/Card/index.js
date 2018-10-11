import React from 'react'
import Card from 'ui/core/Card'
import { Col, Divider } from '../../helpers'

export class CardDemo extends React.Component {
    static id = 'card'

    render() {
        return (
            <Col>
                <Card width="358px" height="186px" />
                <Divider />
            </Col>
        )
    }
}
