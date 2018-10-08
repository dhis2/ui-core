/** @format */

import React, { Component } from 'react'
import InputField from 'ui/core/InputField'

const fields = [
    // no placeholder
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

    // no placeholder
    {
        placeholder: undefined,
        icon: 'face',
        kind: 'filled',
    },
    {
        placeholder: undefined,
        icon: 'face',
        kind: 'filled',
        size: 'dense',
    },
    {
        placeholder: undefined,
        icon: 'face',
        kind: 'outlined',
    },
    {
        placeholder: undefined,
        icon: 'face',
        kind: 'outlined',
        size: 'dense',
    },

    // placeholder
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

    // placeholder
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

    // error + placeholder
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

    // valid + placeholder
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

    // warning + placeholder
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

    //  disabled + no help + placeholder
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
]

const style = {
    width: '250px',
    margin: '20px 0 30px 0',
}
function Block({ children }) {
    return <div style={style}>{children}</div>
}

export default class InputFieldDemo extends Component {
    state = {}
    onChange = (target, value) => this.setState({ [target]: value })

    render() {
        return (
            <div style={{ width: '1200px' }}>
                <h6>Input Field</h6>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                    }}
                >
                    {fields.map((props, i) => (
                        <Block key={`if-${i}`}>
                            <InputField
                                name={`f${i}`}
                                value={this.state[`f${i}`] || ''}
                                label={`Label ${i}`}
                                help={`Help text ${i}`}
                                placeholder={`Placeholder ${i}`}
                                onChange={(name, v) =>
                                    this.onChange(`f${i}`, v)
                                }
                                {...props}
                            />
                        </Block>
                    ))}
                </div>
            </div>
        )
    }
}
