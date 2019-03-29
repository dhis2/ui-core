import { storiesOf } from '@storybook/react'
import { resolve } from 'styled-jsx/css'
import React from 'react'

import { InputField } from '../src'
import notes from '../docs/InputField.md'
import { colors } from '../src/theme'

class InputFieldWrapper extends React.Component {
    state = {}

    onChange = (target, value) => this.setState({ [target]: value })

    render() {
        return (
            <InputField
                name="Default"
                label="Default label"
                help="Default help text"
                value={this.state[this.props.name]}
                onChange={(name, v) => this.onChange(name, v)}
                {...this.props}
            />
        )
    }
}

const OutlinedWrapper = props => (
    <InputFieldWrapper {...props} kind="outlined" />
)

const FilledWrapper = props => <InputFieldWrapper {...props} kind="filled" />

storiesOf('InputField: Outlined', module)
    .add('Default', () => <OutlinedWrapper kind="outlined" />, { notes })
    .add(
        'Placeholder',
        () => <OutlinedWrapper placeholder="Hold the place" />,
        { notes }
    )
    .add('Dense', () => <OutlinedWrapper size="dense" />, { notes })
    .add('Status: Valid', () => <OutlinedWrapper status="valid" />, { notes })
    .add('Status: Warning', () => <OutlinedWrapper status="warning" />, {
        notes,
    })
    .add('Status: Error', () => <OutlinedWrapper status="error" />, { notes })
    .add('Disabled', () => <OutlinedWrapper disabled={true} />, { notes })

    .add(
        'Label background with inline styles',
        () => (
            <div style={{ background: colors.grey100, padding: '30px' }}>
                <OutlinedWrapper
                    styles={{ label: { background: colors.grey100 } }}
                />
            </div>
        ),
        { notes }
    )

    .add(
        'Label background with styled-jsx',
        () => {
            const labelStyles = resolve`.label { background: ${
                colors.grey100
            }; }`
            const wrapperStyle = {
                background: colors.grey100,
                padding: '30px',
            }

            return (
                <div style={wrapperStyle}>
                    <OutlinedWrapper
                        styles={{ label: labelStyles.className }}
                    />
                    <style>{labelStyles.styles}</style>
                </div>
            )
        },
        { notes }
    )

storiesOf('InputField: Filled', module)
    .add('Default', () => <FilledWrapper />, { notes })
    .add('Placeholder', () => <FilledWrapper placeholder="Hold the place" />, {
        notes,
    })
    .add('Dense', () => <FilledWrapper size="dense" />, { notes })
    .add('Status: Valid', () => <FilledWrapper status="valid" />, { notes })
    .add('Status: Warning', () => <FilledWrapper status="warning" />, { notes })
    .add('Status: Error', () => <FilledWrapper status="error" />, { notes })
    .add('Disabled', () => <FilledWrapper disabled={true} />, { notes })
