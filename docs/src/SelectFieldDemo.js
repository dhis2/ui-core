/** @format */

import React from 'react'
import SelectField from 'core/SelectField'

const list = [
    { value: 1, label: 'One ', icon: 'alarm' },
    { value: 2, label: 'Two', icon: 'alarm' },
    { value: 3, label: 'Three', icon: 'face' },
    { value: 4, label: 'Four', icon: 'alarm' },
    { value: 5, label: 'Five', icon: 'alarm' },
]

const fields = [
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

export default class SelectDemo extends React.Component {
    state = {}
    onChange = (target, value) => this.setState({ [target]: value })

    render() {
        return (
            <div style={{ width: '1200px' }}>
                <h6>Select Field</h6>

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
                            <SelectField
                                name={`f${i}`}
                                list={list}
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
                </div>
            </div>
        )
    }
}
