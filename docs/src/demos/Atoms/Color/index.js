import React from 'react'
import { Col, Divider, Row, Text } from '../../../helpers'

const list = [
    {
        type: 'Primary',
        list: [
            {
                id: 'primary',
                name: 'Primary',
                color: '1976d2',
            },
            {
                id: 'primary-light',
                name: 'Primary light',
                color: '63a4ff',
            },
            {
                id: 'primary-dark',
                name: 'Primary dark',
                color: '004ba0',
            },
            {
                id: 'primary-lightest',
                name: 'Primary lightest',
                color: 'eaf4ff',
            },
        ],
    },

    {
        type: 'Secondary',
        list: [
            {
                id: 'secondary',
                name: 'Secondary',
                color: '00796b',
            },
            {
                id: 'secondary-light',
                name: 'Secondary light',
                color: '48a999',
            },
            {
                id: 'secondary-dark',
                name: 'Secondary dark',
                color: '004c40',
            },
            {
                id: 'secondary-lightest',
                name: 'Secondary lightest',
                color: 'b2dfdb',
            },
        ],
    },

    {
        type: 'Interface',
        list: [
            {
                id: 'black',
                name: 'Black',
                color: '000',
            },
            {
                id: 'grey-dark',
                name: 'Grey dark',
                color: '494949',
            },
            {
                id: 'grey',
                name: 'Grey',
                color: '9e9e9e',
            },
            {
                id: 'grey-light',
                name: 'Grey light',
                color: 'e0e0e0',
            },
            {
                id: 'grey-lighter',
                name: 'Grey lighter',
                color: 'eceff1',
            },
            {
                id: 'grey-lightest',
                name: 'Grey lightest',
                color: 'f4f6f8',
            },
        ],
    },

    {
        type: 'Information',
        list: [
            {
                id: 'error',
                name: 'Error',
                color: 'e53935',
            },
            {
                id: 'warning',
                name: 'Warning',
                color: 'e59635',
            },
            {
                id: 'valid',
                name: 'Valid',
                color: '3d9305',
            },
            {
                id: 'info',
                name: 'Info',
                color: 'eaf4ff',
            },
        ],
    },
]

const sColor = {
    margin: '16px 16px 0 8px',
    width: 56,
    height: 56,
    borderRadius: '50%',
}
const Circle = ({ id }) => <div style={{ ...sColor }} className={`${id}-bg`} />

const sRowColor = {
    height: 98,
    width: 250,
    minWidth: 250,
    borderRadius: 4,
    backgroundColor: '#fff',
}
const sText = {
    margin: 0,
    fontSize: 13,
    lineHeight: '22px',
    letterSpacing: '0.46px',
}
const sCol = {
    margin: '16px 0 0 0',
}

function hex2rgb(hex) {
    hex = hex.length === 3 ? `${hex}${hex}` : hex
    const r = parseInt(hex.substr(0, 2), 16)
    const g = parseInt(hex.substr(2, 2), 16)
    const b = parseInt(hex.substr(4, 2), 16)
    return `${r} / ${g} / ${b}`
}

function Color({ id, name, color, index }) {
    return (
        <Row
            style={{
                ...sRowColor,
                marginBottom: 24,
                marginRight: index > 1 && (index + 1) % 4 === 0 ? 0 : 19,
            }}
        >
            <Circle id={id} />
            <Col style={sCol}>
                <Text style={sText}>{id}</Text>
                <Text style={sText}>#{color.toUpperCase()}</Text>
                <Text style={sText}>RGB {hex2rgb(color)}</Text>
            </Col>
        </Row>
    )
}

export class ColorDemo extends React.Component {
    static id = 'color'

    colors(list) {
        return (
            <Row style={{ marginBottom: 40, width: 1080, flexWrap: 'wrap' }}>
                {list.map(({ id, name, color }, i) => (
                    <Color
                        key={`clr-${id}`}
                        index={i}
                        id={id}
                        name={name}
                        color={color}
                    />
                ))}
            </Row>
        )
    }

    render() {
        return (
            <Col>
                <Text style={{ marginBottom: 40 }}>
                    .color and .color-bg represents classes for color in css.
                    <br />
                    Primary color has class .primary for foreground and
                    .primary-bg for background
                </Text>
                {list.map(({ type, list }) => (
                    <Col key={`clr-${type}`}>
                        <Text>{type}</Text>
                        {this.colors(list)}
                    </Col>
                ))}
                <Divider />
            </Col>
        )
    }
}
