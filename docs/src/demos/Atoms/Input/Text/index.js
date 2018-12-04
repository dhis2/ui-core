import React from 'react'
import InputField from 'core/InputField'

import { Text, Row, Col, Divider } from '../../../../helpers'

const fields = [
    {
        title: 'Dense without placeholder',
        list: [
            {
                placeholder: undefined,
                kind: 'filled',
            },
            {
                placeholder: undefined,
                kind: 'filled',
                size: 'dense',
            },
            {
                placeholder: undefined,
                kind: 'outlined',
            },
            {
                placeholder: undefined,
                kind: 'outlined',
                size: 'dense',
            },
        ],
    },

    {
        title: 'Dense with placeholder',
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
        title: 'Filled',
        list: [
            {
                kind: 'filled',
                icon: 'face',
                placeholder: undefined,
            },
            {
                kind: 'filled',
                icon: 'face',
                size: 'dense',
                placeholder: undefined,
            },
            {
                kind: 'outlined',
                icon: 'face',
                placeholder: undefined,
            },
            {
                kind: 'outlined',
                icon: 'face',
                size: 'dense',
                placeholder: undefined,
            },
        ],
    },

    {
        title: 'Error',
        list: [
            {
                status: 'error',
                kind: 'filled',
                placeholder: undefined,
            },
            {
                status: 'error',
                kind: 'filled',
                placeholder: undefined,
                size: 'dense',
            },
            {
                status: 'error',
                placeholder: undefined,
                kind: 'outlined',
            },
            {
                status: 'error',
                kind: 'outlined',
                placeholder: undefined,
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

const sInputContainer = { width: 250, margin: '0 30px 0 0' }
const InputContainer = ({ children }) => (
    <div style={sInputContainer}>{children}</div>
)

export class InputTextDemo extends React.Component {
    static id = 'input-text'

    state = {}
    onChange = (target, value) => this.setState({ [target]: value })

    fields(list, parentId) {
        return list.map((props, i) => {
            const name = `f-${parentId}-${i}`
            return (
                <InputContainer key={`if-${i}`}>
                    <InputField
                        name={name}
                        value={this.state[name] || ''}
                        label={`Label ${i}`}
                        help={`Help text ${i}`}
                        placeholder={`Placeholder ${i}`}
                        onChange={(name, v) => this.onChange(name, v)}
                        {...props}
                    />
                </InputContainer>
            )
        })
    }

    render() {
        return (
            <Col
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                }}
            >
                {fields.map(({ title, list }, i) => (
                    <Col key={`fields-${i}`}>
                        <Text>{title}</Text>
                        <Row style={{ marginBottom: 50 }}>
                            {this.fields(list, i)}
                        </Row>
                    </Col>
                ))}
                <Divider />
            </Col>
        )
    }
}
