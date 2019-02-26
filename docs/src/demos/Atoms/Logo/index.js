import React from 'react'
import Logo, { LogoIcon, LogoWhite, LogoIconWhite } from 'core/Logo'
import { Heading, Col, Divider, Spacer } from '../../../helpers'

export class LogoDemo extends React.Component {
    static id = 'logo'

    render() {
        return (
            <Col>
                <Heading>Logo with text</Heading>
                <div style={{ width: '400px', padding: '10px' }}>
                    <Logo />
                </div>

                <Heading>White logo with text</Heading>

                <div
                    style={{
                        width: '400px',
                        backgroundColor: '#276696',
                        padding: '10px',
                    }}
                >
                    <LogoWhite />
                </div>

                <Spacer height="40px" />

                <Heading>Icon logo</Heading>

                <div style={{ width: '200px', padding: '10px' }}>
                    <LogoIcon />
                </div>

                <Heading>White icon logo</Heading>

                <div
                    style={{
                        width: '200px',
                        backgroundColor: '#276696',
                        padding: '10px',
                    }}
                >
                    <LogoIconWhite />
                </div>

                <Divider />
            </Col>
        )
    }
}
