import React from 'react'
import Icon from 'core/Icon'
import { Col, Divider, Text } from '../../../helpers'

export class IconDemo extends React.Component {
    static id = 'icon'

    render() {
        return (
            <Col>
                <Icon name="directions_run" />

                <Text>
                    Supported icons are the{' '}
                    <a href="https://material.io/tools/icons/">
                        Material Icons
                    </a>
                </Text>

                <Divider />
            </Col>
        )
    }
}
