import React from 'react'
import { storiesOf } from '@storybook/react'
import { Logo, LogoWhite, LogoIcon, LogoIconWhite } from '../src'

const Wrapper = fn => <div style={{ width: '358px' }}>{fn()}</div>

const Background = ({ children }) => (
    <div style={{ backgroundColor: '#276696' }}>{children}</div>
)

storiesOf('Logo', module)
    .addDecorator(Wrapper)

    .add('Logo', () => <Logo />)

    .add('Logo White', () => (
        <Background>
            <LogoWhite />
        </Background>
    ))

    .add('Logo Icon', () => <LogoIcon />)

    .add('Logo Icon White', () => (
        <Background>
            <LogoIconWhite />
        </Background>
    ))
