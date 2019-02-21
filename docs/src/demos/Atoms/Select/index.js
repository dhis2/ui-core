import React from 'react'
import SelectField from 'SelectField'
import { Col, Row, Text } from '../../../helpers'

const _list = [
    { value: 1, label: 'One ', icon: 'alarm' },
    { value: 2, label: 'Two', icon: 'alarm' },
    { value: 3, label: 'Three', icon: 'face' },
    { value: 4, label: 'Four', icon: 'alarm' },
    { value: 5, label: 'Five', icon: 'alarm' },
]

const fields = [
    {
        title: 'Default',
        list: [
            {
                kind: 'filled',
            },
            {
                kind: 'filled',
                size: 'dense',
            },
            {
                kind: 'outlined',
            },
            {
                kind: 'outlined',
                size: 'dense',
            },
        ],
    },

    {
        title: 'Placeholder',
        list: [
            {
                kind: 'filled',
            },
            {
                kind: 'filled',
                size: 'dense',
            },
            {
                kind: 'outlined',
            },
            {
                kind: 'outlined',
                size: 'dense',
            },
        ],
    },

    {
        title: 'Icon',
        list: [
            {
                kind: 'filled',
                icon: 'face',
            },
            {
                kind: 'filled',
                icon: 'face',
                size: 'dense',
            },
            {
                kind: 'outlined',
                icon: 'face',
            },
            {
                kind: 'outlined',
                icon: 'face',
                size: 'dense',
            },
        ],
    },

    {
        title: 'Error',
        list: [
            {
                status: 'error',
                kind: 'filled',
            },
            {
                status: 'error',
                kind: 'filled',
                size: 'dense',
            },
            {
                status: 'error',
                kind: 'outlined',
            },
            {
                status: 'error',
                kind: 'outlined',
                size: 'dense',
            },
        ],
    },

    {
        title: 'Valid',
        list: [
            {
                status: 'valid',
                kind: 'filled',
            },
            {
                status: 'valid',
                kind: 'filled',
                size: 'dense',
            },
            {
                status: 'valid',
                kind: 'outlined',
            },
            {
                status: 'valid',
                kind: 'outlined',
                size: 'dense',
            },
        ],
    },

    {
        title: 'Warning',
        list: [
            {
                status: 'warning',
                kind: 'filled',
            },
            {
                status: 'warning',
                kind: 'filled',
                size: 'dense',
            },
            {
                status: 'warning',
                kind: 'outlined',
            },
            {
                status: 'warning',
                kind: 'outlined',
                size: 'dense',
            },
        ],
    },

    {
        title: 'Disabled',
        list: [
            {
                disabled: true,
                help: '',
                kind: 'filled',
            },
            {
                disabled: true,
                help: '',
                kind: 'filled',
                size: 'dense',
            },
            {
                disabled: true,
                help: '',
                kind: 'outlined',
            },
            {
                disabled: true,
                help: '',
                kind: 'outlined',
                size: 'dense',
            },
        ],
    },
]

const style = {
    width: 250,
    margin: '0 30px 0 0',
}
function Block({ children }) {
    return <div style={style}>{children}</div>
}

export class SelectDemo extends React.Component {
    static id = 'input-select'

    state = {}
    onChange = (target, value) => this.setState({ [target]: value })

    types({ title, list }) {
        return (
            <Col key={`sf-col-${title}`}>
                <Text>{title}</Text>
                <Row style={{ marginBottom: 30 }}>
                    {list.map((props, i) => (
                        <Block key={`sf-${i}`}>
                            <SelectField
                                name={`f${i}`}
                                list={_list}
                                value={this.state[`f${i}`] || ''}
                                label={`Label ${i}`}
                                help={`Help text ${i}`}
                                onChange={(name, v) =>
                                    this.onChange(`f${i}`, v)
                                }
                                {...props}
                            />
                        </Block>
                    ))}
                </Row>
            </Col>
        )
    }

    render() {
        return <Col>{fields.map(o => this.types(o))}</Col>
    }
}
