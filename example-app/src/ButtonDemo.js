import React from 'react'

import {
    FlatButton,
    CircleButton,
    RaisedButton,
    PrimaryButton,
    OutlinedButton,
    DropdownButton,
} from 'ui/core/Button'

const dropdownItems = [
    {
        value: 1,
        label: 'One',
        icon: 'alarm',
    },
    { value: 2, label: 'Two', icon: 'alarm', disabled: true },
    {
        value: 3,
        label: 'Three',
        icon: 'face',
    },
    { value: 4, label: 'Four', icon: 'alarm' },
    { value: 5, label: 'Five', icon: 'alarm' },
]

const sCol = {
    margin: '20px 0',
    width: '250px',
}
function Col({ children }) {
    return <div style={sCol}>{children}</div>
}

const sTitle = {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 500,
    textAlign: 'center',
}
function Title({ children }) {
    return <div style={sTitle}>{children}</div>
}

const cols = [
    { id: 'flat', title: 'Flat' },
    { id: 'raised_default', title: 'Raised - Default' },
    { id: 'raised_primary', title: 'Raised - Primary' },
    { id: 'outlined', title: 'Outlined' },
    { id: 'circle', title: 'Circle' },
    { id: 'links', title: 'Links' },
    { id: 'button_with_options', title: 'Button with options' },
    { id: 'button_with_icon', title: 'Button with icon' },
]

const sContent = {
    padding: 16,
    width: '100%',
    height: 170,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '8px',
    backgroundColor: '#f8f8f8',
}

function onButtonClick(msg) {
    console.log('onClick', msg)
}

const sButtonContainer = {}
function ButtonContainer({ children }) {
    return <div style={sButtonContainer}>{children}</div>
}

function Content({ type, list }) {
    let Component = false
    let onClick = null

    if (type === 'flat') {
        Component = FlatButton
        onClick = () => onButtonClick('FlatButton')
    } else if (type === 'raised_default') {
        Component = RaisedButton
        onClick = () => onButtonClick('RaisedButton')
    } else if (type === 'raised_primary') {
        Component = PrimaryButton
        onClick = () => onButtonClick('PrimaryButton')
    } else if (type === 'outlined') {
        Component = OutlinedButton
        onClick = () => onButtonClick('OutlinedButton')
    } else if (type === 'circle') {
        Component = CircleButton
        onClick = () => onButtonClick('CircleButton')
    } else if (type === 'links') {
        Component = null
        onClick = () => onButtonClick('null')
    } else if (type === 'button_with_options') {
        Component = DropdownButton
        onClick = () => onButtonClick('DropdownButton')
    } else if (type === 'button_with_icon') {
        Component = RaisedButton
        onClick = () => onButtonClick('RaisedButton')
    }

    if (!Component) {
        return <div style={sContent}>not implemented</div>
    }

    return (
        <div style={sContent}>
            {list.map((props, idx) => (
                <ButtonContainer key={`btn-${type}-${idx}`}>
                    <Component {...props} onClick={onClick} />
                </ButtonContainer>
            ))}
        </div>
    )
}

const buttons = {
    flat: [
        {
            label: 'flat button',
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
            label: 'raised button',
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
            label: 'raised primary',
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
            label: 'outlined button',
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
    button_with_options: [
        {
            label: 'dropdown button',
            list: dropdownItems,
            onClick: () => null,
            onSelect: () => null,
        },
        {
            active: true,
            label: 'dropdown button',
            list: dropdownItems,
            onClick: () => null,
            onSelect: () => null,
        },
        {
            disabled: true,
            label: 'dropdown button',
            list: dropdownItems,
            onClick: () => null,
            onSelect: () => null,
        },
    ],
    button_with_icon: [
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

export default function ButtonDemo() {
    return (
        <div style={{ width: '1200px' }}>
            <h6>Buttons</h6>

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                }}
            >
                {cols.map(({ id, title }) => {
                    return (
                        <Col key={`btn-col-${title}`}>
                            <Title>{title}</Title>
                            <Content type={id} list={buttons[id]} />
                        </Col>
                    )
                })}
            </div>
        </div>
    )
}
