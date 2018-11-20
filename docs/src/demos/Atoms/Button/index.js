import React from 'react'

import Button, { DropdownButton, SplitButton } from 'core/Button'

import { Text, Row, Col, Divider, Heading } from '../../../helpers'

const rows = [
    { id: 'basic', title: 'Basic' },
    { id: 'primary', title: 'Primary' },
    { id: 'secondary', title: 'Secondary' },
    { id: 'destructive', title: 'Destructive' },
    { id: 'dropdown', title: 'Dropdown' },
    { id: 'split', title: 'Split button' },
]

function onButtonClick(msg) {
    console.log('onClick', msg)
}

const sButtonContainer = {
    marginBottom: 8,
    marginRight: 8,
    width: '250px',
}

function ButtonContainer({ children }) {
    return <div style={sButtonContainer}>{children}</div>
}

function Content({ id, type, ...props }) {
    let Component = Button

    if (type === 'dropdown') {
        Component = DropdownButton
    } else if (type === 'split') {
        Component = SplitButton
    }

    let label = props.label
    if (props.size) {
        label = `${props.label} (${props.size})`
    }

    return (
        <ButtonContainer key={`btn-${type}-${id}`}>
            <Component
                {...props}
                label={label}
                onClick={() => onButtonClick(`Button: ${type}`)}
            />
        </ButtonContainer>
    )
}

const list = [
    {
        label: 'Menu item 1',
        value: '1',
    },
    {
        label: 'Menu item 2',
        value: '2',
        icon: 'favorite',
    },
    {
        type: 'divider',
    },
    {
        label: 'Menu item 4',
        value: '4',
    },
]

const sizes = ['small', 'medium', 'large']

const buttons = {
    primary: [
        {
            label: 'default',
            kind: 'primary',
        },
        {
            disabled: true,
            label: 'disabled',
            kind: 'primary',
        },
        {
            icon: 'add',
            label: 'with icon',
            kind: 'primary',
        },
    ],
    secondary: [
        {
            label: 'default',
            kind: 'secondary',
        },
        {
            disabled: true,
            label: 'disabled',
            kind: 'secondary',
        },
        {
            icon: 'add',
            label: 'with icon',
            kind: 'secondary',
        },
    ],
    basic: [
        {
            label: 'default',
        },
        {
            disabled: true,
            label: 'disabled',
        },
        {
            icon: 'add',
            label: 'with icon',
        },
    ],
    destructive: [
        {
            label: 'default',
            kind: 'destructive',
        },
        {
            disabled: true,
            label: 'disabled',
            kind: 'destructive',
        },
        {
            icon: 'add',
            label: 'with icon',
            kind: 'destructive',
        },
    ],
    links: [],
    dropdown: [
        {
            list,
            label: 'dropdown button',
            onClick: v => console.log('Clicked on DropdownButton', v),
        },
        {
            list,
            icon: 'face',
            kind: 'primary',
            label: 'with icon',
            onClick: v => console.log('Clicked on DropdownButton', v),
        },
        {
            list,
            disabled: true,
            label: 'disabled',
            onClick: v => console.log('Clicked on DropdownButton', v),
        },
    ],
    split: [
        {
            list,
            label: 'split button',
            onClick: v => console.log('Clicked on SplitButton', v),
        },
        {
            list,
            kind: 'primary',
            icon: 'face',
            label: 'with icon',
            onClick: v => console.log('Clicked on SplitButton', v),
        },
        {
            list,
            disabled: true,
            label: 'disabled',
            onClick: v => console.log('Clicked on SplitButton', v),
        },
    ],
}

export class ButtonDemo extends React.Component {
    static id = 'button'

    render() {
        return (
            <div>
                <Heading>Basic</Heading>
                {sizes.map(size => {
                    return (
                        <Row>
                            {buttons.basic.map((b, id) => {
                                return (
                                    <Content
                                        key={`${id}-basic-${size}`}
                                        id={id}
                                        {...b}
                                        size={size}
                                    />
                                )
                            })}
                        </Row>
                    )
                })}
                <Heading>Primary</Heading>
                {sizes.map(size => {
                    return (
                        <Row>
                            {buttons.primary.map((b, id) => {
                                return (
                                    <Content
                                        key={`${id}-primary-${size}`}
                                        id={id}
                                        {...b}
                                        size={size}
                                    />
                                )
                            })}
                        </Row>
                    )
                })}
                <Heading>Secondary</Heading>
                {sizes.map(size => {
                    return (
                        <Row>
                            {buttons.secondary.map((b, id) => {
                                return (
                                    <Content
                                        key={`${id}-secondary-${size}`}
                                        id={id}
                                        {...b}
                                        size={size}
                                    />
                                )
                            })}
                        </Row>
                    )
                })}
                <Heading>Destructive</Heading>
                {sizes.map(size => {
                    return (
                        <Row>
                            {buttons.destructive.map((b, id) => {
                                return (
                                    <Content
                                        key={`${id}-primary-${size}`}
                                        id={id}
                                        {...b}
                                        size={size}
                                    />
                                )
                            })}
                        </Row>
                    )
                })}
                <Heading>Dropdown</Heading>
                <Row>
                    {buttons.dropdown.map((b, id) => {
                        return (
                            <Content
                                key={`${id}-dropdown`}
                                id={id}
                                type="dropdown"
                                {...b}
                            />
                        )
                    })}
                </Row>
                <Heading>Split</Heading>
                <Row>
                    {buttons.split.map((b, id) => {
                        return (
                            <Content
                                key={`${id}-split`}
                                id={id}
                                type="split"
                                {...b}
                            />
                        )
                    })}
                </Row>
                <Divider />
            </div>
        )
    }
}
