import React from 'react'

import Button, { DropdownButton, SplitButton } from 'core/Button'

import { Text, Row, Col, Divider } from '../../../helpers'

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
    marginRight: 8,
}

function ButtonContainer({ children }) {
    return <div style={sButtonContainer}>{children}</div>
}

function Content({ type, kind, list }) {
    let Component = Button

    if (type === 'dropdown') {
        Component = DropdownButton
    } else if (type === 'split') {
        Component = SplitButton
    }

    return list.map((props, idx) => (
        <ButtonContainer key={`btn-${type}-${idx}`}>
            <Component
                kind={kind}
                {...props}
                onClick={() => onButtonClick(`Button: ${type}`)}
            />
        </ButtonContainer>
    ))
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
        {
            size: 'small',
            label: 'small',
            kind: 'primary',
        },
        {
            size: 'small',
            disabled: true,
            label: 'small',
            kind: 'primary',
        },
        {
            size: 'small',
            icon: 'add',
            label: 'with icon',
            kind: 'primary',
        },
        {
            size: 'large',
            label: 'large',
            kind: 'primary',
        },
        {
            size: 'large',
            disabled: true,
            label: 'large',
            kind: 'primary',
        },
        {
            icon: 'add',
            size: 'large',
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
        {
            size: 'small',
            label: 'small',
            kind: 'secondary',
        },
        {
            size: 'small',
            disabled: true,
            label: 'small',
            kind: 'secondary',
        },
        {
            size: 'small',
            icon: 'add',
            label: 'with icon',
            kind: 'secondary',
        },
        {
            size: 'large',
            label: 'large',
            kind: 'secondary',
        },
        {
            size: 'large',
            disabled: true,
            label: 'large',
            kind: 'secondary',
        },
        {
            icon: 'add',
            size: 'large',
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
        {
            size: 'small',
            label: 'small',
        },
        {
            size: 'small',
            disabled: true,
            label: 'small',
        },
        {
            size: 'small',
            icon: 'add',
            label: 'with icon',
        },
        {
            size: 'large',
            label: 'large',
        },
        {
            size: 'large',
            disabled: true,
            label: 'large',
        },
        {
            icon: 'add',
            size: 'large',
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
        {
            size: 'small',
            label: 'small',
            kind: 'destructive',
        },
        {
            size: 'small',
            disabled: true,
            label: 'small',
            kind: 'destructive',
        },
        {
            size: 'small',
            icon: 'add',
            label: 'with icon',
            kind: 'destructive',
        },
        {
            size: 'large',
            label: 'large',
            kind: 'destructive',
        },
        {
            size: 'large',
            disabled: true,
            label: 'large',
            kind: 'destructive',
        },
        {
            icon: 'add',
            size: 'large',
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
            label: 'dropdown button',
            onClick: v => console.log('Clicked on DropdownButton', v),
        },
        {
            list,
            icon: 'face',
            disabled: true,
            label: 'dropdown button',
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
            label: 'split button',
            onClick: v => console.log('Clicked on SplitButton', v),
        },
        {
            list,
            disabled: true,
            label: 'split button',
            onClick: v => console.log('Clicked on SplitButton', v),
        },
    ],
    icon: [
        {
            label: 'icon button',
            icon: 'face',
        },
        {
            label: 'icon button',
            icon: 'face',
            disabled: true,
        },
    ],
}

export class ButtonDemo extends React.Component {
    static id = 'button'

    render() {
        return (
            <div>
                {rows.map(({ id, kind, title }) => {
                    return (
                        <Col
                            key={`btn-${title}`}
                            style={{ width: '100%', marginBottom: 40 }}
                        >
                            <Text>{title}</Text>
                            <Row>
                                <Content
                                    kind={kind}
                                    type={id}
                                    list={buttons[id]}
                                />
                            </Row>
                        </Col>
                    )
                })}
                <Divider />
            </div>
        )
    }
}
