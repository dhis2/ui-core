import React from 'react'
import Logo, { LogoIcon, LogoWhite, LogoIconWhite } from 'core/Logo'
import { Text, Col, Divider, Spacer } from '../../../helpers'

export class LogoDemo extends React.Component {
    static id = 'logo'

    render() {
        return (
            <Col>
                <Text>Logo</Text>
                <Logo />

                <Spacer height="40px" />

                <Text>Dense</Text>
                <Divider />
            </Col>
        )
    }
}
