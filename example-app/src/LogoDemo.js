import React, { Component } from 'react'

import { Logo, LogoWhite, LogoIcon, LogoIconWhite } from 'ui/core/Logo'

export default class LogoDemo extends Component {
    render() {
        return (
            <div style={{ marginTop: 20 }}>
                <h6>Logo</h6>

                <div
                    style={{
                        marginTop: 20,
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'nowrap',
                        justifyContent: 'flex-start',
                    }}
                >
                    <div
                        style={{
                            marginRight: 20,
                            padding: 6,
                            width: 60,
                            height: 60,
                        }}
                    >
                        <LogoIcon />
                    </div>
                    <div
                        style={{
                            marginRight: 20,
                            padding: 6,
                            width: 60,
                            height: 60,
                            backgroundColor: '#2c6693',
                        }}
                    >
                        <LogoIconWhite />
                    </div>

                    <div
                        style={{
                            marginRight: 20,
                            padding: 0,
                            width: 200,
                            height: 60,
                        }}
                    >
                        <Logo />
                    </div>
                    <div
                        style={{
                            marginRight: 20,
                            padding: 0,
                            width: 200,
                            height: 60,
                            backgroundColor: '#2c6693',
                        }}
                    >
                        <LogoWhite />
                    </div>
                </div>
            </div>
        )
    }
}
