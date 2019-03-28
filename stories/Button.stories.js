import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from '../src'

class ButtonWrapper extends React.Component {
    state = { counter: 0 }

    inc = () => {
        this.setState({ counter: this.state.counter + 1 })
    }

    render() {
        return (
            <Fragment>
                <div>
                    <Button {...this.props} onClick={this.inc}>
                        {this.props.children}
                    </Button>
                </div>

                <p className="click-amount">
                    Amounts clicked:{' '}
                    <span className="amount">{this.state.counter}</span>
                </p>
            </Fragment>
        )
    }
}

storiesOf('Button', module)
    .add('Basic', () => <ButtonWrapper kind="basic" label="Button label" />)
    .add('Default with label prop', () => (
        <ButtonWrapper>Button label</ButtonWrapper>
    ))
    .add('Primary', () => <ButtonWrapper kind="primary" label="Button label" />)
    .add('Secondary', () => (
        <ButtonWrapper kind="secondary" label="Button label" />
    ))
    .add('Destructive', () => (
        <ButtonWrapper kind="destructive" label="Button label" />
    ))
    .add('Type: button (default)', () => (
        <ButtonWrapper label="Type: Button (default)" />
    ))
    .add('Type: button', () => (
        <ButtonWrapper type="button" label="Type: Button" />
    ))
    .add('Type: reset', () => (
        <ButtonWrapper type="reset" label="Type: Reset" />
    ))
    .add('Type: submit', () => (
        <ButtonWrapper type="submit" label="Type: Submit" />
    ))
