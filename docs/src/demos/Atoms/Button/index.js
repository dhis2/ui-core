import React from 'react'
import {
    FlatButton,
    CircleButton,
    RaisedButton,
    PrimaryButton,
    OutlinedButton,
    DropdownButton,
} from 'core/Button'

import { Text, Row, Col, Divider } from '../../../helpers'

const rows = [
    { id: 'flat', title: 'Flat' },
    { id: 'raised_default', title: 'Raised Default' },
    { id: 'raised_primary', title: 'Raised Primary' },
    { id: 'outlined', title: 'Outlined' },
    { id: 'circle', title: 'Circle' },
    { id: 'dropdown', title: 'Dropdown' },
    { id: 'icon', title: 'Icon' },
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

function Content({ type, list }) {
    let Component = false
    let onClick = null

    if (type === 'flat') {
        Component = FlatButton
        onClick = () => onButtonClick('Flat Button')
    } else if (type === 'raised_default') {
        Component = RaisedButton
        onClick = () => onButtonClick('Raised Button')
    } else if (type === 'raised_primary') {
        Component = PrimaryButton
        onClick = () => onButtonClick('Primary Button')
    } else if (type === 'outlined') {
        Component = OutlinedButton
        onClick = () => onButtonClick('Outlined Button')
    } else if (type === 'circle') {
        Component = CircleButton
        onClick = () => onButtonClick('Circle Button')
    } else if (type === 'dropdown') {
        Component = DropdownButton
        onClick = () => onButtonClick('Dropdown Button')
    } else if (type === 'icon') {
        Component = RaisedButton
        onClick = () => onButtonClick('Icon Button')
    }

    return list.map((props, idx) => (
        <ButtonContainer key={`btn-${type}-${idx}`}>
            <Component {...props} onClick={onClick} />
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
    flat: [
        {
            label: 'default',
        },
        {
            active: true,
            label: 'active',
        },
        {
            disabled: true,
            label: 'disabled',
        },
    ],
    raised_default: [
        {
            label: 'default',
        },
        {
            active: true,
            label: 'active',
        },
        {
            disabled: true,
            label: 'disabled',
        },
    ],
    raised_primary: [
        {
            label: 'default',
        },
        {
            active: true,
            label: 'active',
        },
        {
            disabled: true,
            label: 'disabled',
        },
    ],
    outlined: [
        {
            label: 'default',
        },
        {
            active: true,
            label: 'active',
        },
        {
            disabled: true,
            label: 'disabled',
        },
    ],
    circle: [
        {
            icon: 'add',
        },
        {
            icon: 'add',
            active: true,
        },
        {
            icon: 'add',
            disabled: true,
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
            active: true,
            label: 'dropdown button',
            onClick: v => console.log('Clicked on DropdownButton', v),
        },
        {
            list,
            disabled: true,
            label: 'dropdown button',
            onClick: v => console.log('Clicked on DropdownButton', v),
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
            active: true,
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
                {rows.map(({ id, title }) => {
                    return (
                        <Col
                            key={`btn-${title}`}
                            style={{ width: '100%', marginBottom: 40 }}
                        >
                            <Text>{title}</Text>
                            <Row>
                                <Content type={id} list={buttons[id]} />
                            </Row>
                        </Col>
                    )
                })}
                <Divider />
            </div>
        )
    }
}
